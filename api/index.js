const Express = require('express');
const App = Express();


App.use('/api', 'Rutas');

App.use('Cors');

App.listen(3000, ()=>console.log('console.log(3000)'));