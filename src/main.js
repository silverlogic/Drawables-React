var Parse = require('parse').Parse;

var AboutPage = require('./pages/AboutPage');
var HomePage = require('./pages/HomePage');
var UserPage = require('./pages/UserPage');
var ReactHack = require('ReactHack');

Parse.initialize('CzanMMcAdeSDqRry02vrzlIABrSo3Oay0KOGjO3c', 'h2ogTCAaG87UT3JgONGQhHEKsFiJrwnuh18QPa8t');
ReactHack.start({
  '': HomePage,
  'pages/:name': UserPage,
  'about': AboutPage
});