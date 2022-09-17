'use strict';
import '../html/index.html';
//import '../css/style.css'; off because we using scss ;
import '../scss/main.scss';
import "@babel/polyfill";

import code from '../img/1.jpg';


import {sum, multiply} from '../modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.width = 200;
img.src = code;
imgWrap.append(img);


console.log(sum(3.6, 10));
console.log(multiply(2, 10));