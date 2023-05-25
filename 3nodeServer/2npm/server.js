const Color = require('color');
//Generate random color
const color = Color("#7743CE").alpha(0.5).lighten(0.5);
console.log(color)

const singleColor = color.hsl().toString();
console.log(singleColor);
//o/p:- hsla(262.4, 58.6%, 80.3%, 0.5)

//Globally package install :- npm i -g nodemon  || password :- sudo npm i -g nodemon