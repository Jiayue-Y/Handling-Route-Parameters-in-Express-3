// server.js
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('\/user/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello ${username}`);
});

app.get('/user/John', (req, res) =>{});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});