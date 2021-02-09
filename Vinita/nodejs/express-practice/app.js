const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // middle ware

app.get('/:id', (req, res) => {
    console.log(req.params);
    res.status(200).send("Hi from server !!");
});
cd
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Done');
});

app.listen(PORT, (err) => {
    if (err) {
        throw new err;
    }
    console.log(`Server running on PORT: ${PORT}....`);
});
