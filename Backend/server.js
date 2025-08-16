require('dotenv').config();
const express = require('express');
const aiRoutes = require('./src/routes/ai.route');
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/' , (req, res) => {
    res.send('Hello, world!');
})

app.use('/ai', aiRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});