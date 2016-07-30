//Librería para levantar automanticamente la página en el navegador por defecto
var open = require('open');
var colors = require('colors');
var info = require('./package.json');

console.log(info.author.underline.blue);
console.log(info.name.bold.yellow +'-'+ info.version.bold.yellow);
var options = {
    'weblogic': 'http://localhost:7001',
    'static': 'http://localhost:3000'
};

var API_URL = 'rest_api';
httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var connect = require('connect');
var http = require('http');

var proxyApp = connect().use(function(req,res) {
    console.log('req' + req.url);
    var target = options.static;
    req.headers.OAM_REMOTE_USER = "2-7";
    if(req.url.indexOf(API_URL) > -1) {
        req.url = req.url.replace(API_URL,'');
        target = options.weblogic;
    }
    proxy.web(req, res, {
        target: target
    });
});

http.createServer(proxyApp).listen(8000);
console.info('Running HTTP Proxy'.green);


var app = connect()
.use(connect.static('build/'))
.use(connect.directory('build/'))
.use(connect.cookieParser())
.use(connect.session({ secret: 'my secret here' }));

//http.createServer(app).listen(3000);
http.createServer(app).listen(3000, openBrowser);


function openBrowser(){
    console.log('Open browser'.green);
    open('http://localhost:' + 8000 + '/');
    console.log('Running Web Server'.green);
}
