const express = require('express');
const app = express();
const port = process.env.PORT || 3000

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });

app.listen(port);
app.use(express.static(__dirname));

console.log('listening on port' + port);