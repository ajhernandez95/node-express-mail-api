const express = require('express');
const app = express();

app.use(express.json());

app.use('/', require('./routes/home'));

app.use('/api/mail', require('./routes/mail'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
