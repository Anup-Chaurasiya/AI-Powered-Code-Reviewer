const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

function loadController(service) {
    const source = readFileSync(path.join(__dirname, '../src/controllers/ai.controller.js'), 'utf8');
    const context = {
        module: { exports: {} },
        require(name) {
            assert.equal(name, '../services/ai.service');
            return service;
        },
        console: { error() {} }
    };
    vm.runInNewContext(source, context);
    return context.module.exports.getResponse;
}

function response() {
    return {
        statusCode: null,
        body: null,
        status(value) { this.statusCode = value; return this; },
        send(value) { this.body = value; return this; }
    };
}

for (const body of [undefined, null, {}, { code: null }, { code: '' },
    { code: ' \n\t' }, { code: 123 }, { code: true }, { code: [] }, { code: {} }]) {
    test('rejects invalid body ' + JSON.stringify(body), async () => {
        let calls = 0;
        const getResponse = loadController(async () => { calls++; });
        const res = response();
        await getResponse({ body }, res);
        assert.equal(res.statusCode, 400);
        assert.equal(res.body, 'code is required');
        assert.equal(calls, 0);
    });
}

test('passes valid code unchanged and returns the review', async () => {
    const code = '  function add() { return 1 + 1; }\n';
    const getResponse = loadController(async (input) => {
        assert.equal(input, code);
        return 'Review result';
    });
    const res = response();
    await getResponse({ body: { code } }, res);
    assert.equal(res.statusCode, 200);
    assert.equal(res.body, 'Review result');
});

test('returns a generic error when the AI service fails', async () => {
    const getResponse = loadController(async () => { throw new Error('private upstream details'); });
    const res = response();
    await getResponse({ body: { code: 'const x = 1;' } }, res);
    assert.equal(res.statusCode, 500);
    assert.equal(res.body, 'Internal Server Error');
});
