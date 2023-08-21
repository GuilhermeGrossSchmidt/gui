const http= require('http');no
const srv = http.createServer((req, res) => {

console.log('METODO: ',req.method);
console.log('HEADERS: ',req.headers);
console.log('HTTP VERSÃO: ',req.httpversion);

res.end('ola Programdor a bordo!');
});


srv.listen(3001, () => {

console.log('servidor funcionando');

});