import '../styles/styles.scss';
import { CONST, TsClass } from './script';
const title = document.getElementById('title');

const tsInstance = new TsClass();
title.innerHTML = `This is ${tsInstance.getName()}`;
console.log(CONST);
