const express = require('express');

const app = express();

app.use(express.static('./dist/angular-ddd'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/angular-ddd'});
})

app.listen(process.env.PORT || 3030, () => {
    console.log("server starting"); 
});