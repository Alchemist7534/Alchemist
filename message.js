var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<form action="/message" method="post" enctype="application/x-www-form-urlencoded" style="text-align: center;"');
res.write('<p>Please input your message below</p>');
res.write('<br><textarea cols="35" rows="10" placeholder="your message" name="message"></textarea>');
res.write('<br><br><button>Send</button>');
res.write('</form>');
if (req.method === 'POST') {
let body = '';
req.on('data', chunk => {
body += chunk.toString(); 
});
req.on('end', () => {
fs.appendFileSync('./message.txt', body);
res.end('ok');
});
}
else {
return 'error';
}
res.end();
}).listen(8080);
