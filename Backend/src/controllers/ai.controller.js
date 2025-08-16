const aiService = require('../services/ai.service');

async function getResponse(req, res) {
    try{
        const code = req.body.code ;
        if(!code) {
            return res.status(400).send('code is required');
        }
        const response = await aiService(code);
        res.status(200).send(response);
    }
    catch(error) {
        console.error('Error generating response:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {getResponse};