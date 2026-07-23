const express = require('express');

const app = express();

const PORT = 3000;

const db = require('./config/db');

const heroRoutes = require('./routes/heroRoute');

app.use(express.json());

app.use(heroRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});