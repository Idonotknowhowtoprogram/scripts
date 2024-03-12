// ==UserScript==
// @name        directory filter
// @namespace   Violentmonkey Scripts
// @match       https://www.sonomaacademy.org/about/meet-us-faculty--staff*
// @grant       none
// @version     1.0
// @author      -
// @description 3/6/2024, 12:59:29 PM
// ==/UserScript==
const textBox = document.createElement("input");
const element = document.querySelector("#layout_region_3");
textBox.setAttribute("type","text");
const button = document.createElement('button');
button.textContent = "surch";
button.addEventListener("click",searchLoop(textBox.value))
const init = function (){ 
  let numberOfLi = document.querySelectorAll("#content_1903384 > div > div > ul > li");
  element.appendChild(textBox);
  element.appendChild(button);
}
window.addEventListener("load", init);
const searchLoop = function (input) {
for (let index = 0; index < 75; index++) {
  let check = false;
  check = numberOfLi.includes(input)
}
}
{{
  
}}