const express = require("express");

const app = express();

//register view engine
app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
    res.render('home.ejs');
})

app.get('/branches', (req, res) => {
    res.render('branches', { title: 'branches' });
})
app.listen(4000, () => {
    console.log("server is running at port 4000...");
})