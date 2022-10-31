const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;


app.get('/', (req, res) =>{
    res.send('testowe glowne dziala');
});

app.get('/inne', (req, res) =>{
    res.send('inne tez dziala dziala');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});