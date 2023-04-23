(()=>{"use strict";var t={661:(t,e,r)=>{r.d(e,{$:()=>o});var n=r(647);const o=t=>{let e=[],r=new Map,o=t;for(let t=0;t<10;t++){e.push([]);for(let n=0;n<10;n++)e[t].push(null),r.set(`${t}${n}`,!1)}function a(t,r=0,n,o){if(0==r)for(let r=0;r<t.length;r++){if(n+r>9||o>9)return!1;if(null!=e[n+r][o])return!1}else for(let r=0;r<t.length;r++){if(n>9||o+r>9)return!1;if(null!=e[n][o+r])return!1}return!0}return{isValid:a,placeShip:function(t,r=0,l,i){if(0==a(t,r,l,i))return!1;if(0==r)for(let r=0;r<t.length;r++)e[l+r][i]=t;else for(let r=0;r<t.length;r++)e[l][i+r]=t;n.SO.addShip(t,r,o,l,i)},attack:function(t,a){return null!=e[t][a]&&"object"==typeof e[t][a]?(e[t][a].hit(),r.set(`${t}${a}`,!0),n.SO.hit(o,t,a),!0):(r.set(`${1*t}${a}`,!0),n.SO.miss(o,t,a),!1)},getData:function(t,r){if(!(t>9||t<0||r>9||r<0))return e[t][r]},get board(){return e},get tileData(){return r}}}},340:(t,e,r)=>{r.d(e,{S:()=>n}),(()=>{let t=document.createElement("div");t.setAttribute("class","gameSpace");for(let e=1;e<3;e++){let r=document.createElement("div");r.setAttribute("class","gameBoard"),r.setAttribute("id",`${e}`);for(let t=0;t<10;t++)for(let n=0;n<10;n++){let o=document.createElement("div");o.setAttribute("id",`${e}${t}${n}`),r.appendChild(o)}t.appendChild(r)}document.body.appendChild(t)})();const n={addShip:function(t,e=0,r=1,n,o){if(document.getElementById(`${r}${n}${o}`),0==e)for(let e=0;e<t.length;e++)document.getElementById(`${r}${n+e}${o}`).innerHTML=`<div>${t.length}</div>`;else for(let e=0;e<t.length;e++)document.getElementById(`${r}${n}${o+e}`).innerHTML=`<div>${t.length}</div>`},miss:function(t,e,r){document.getElementById(`${t}${e}${r}`).setAttribute("class","miss")},hit:function(t,e,r){document.getElementById(`${t}${e}${r}`).setAttribute("class","hit")}}},379:(t,e,r)=>{var n=r(647);(()=>{let t=document.getElementById("2");for(let r of t.children)r.addEventListener("click",(t=>{e(t)}));function e(t){if(1==n.J5.turn){t=""==t.target.id?t.target.parentElement.id:t.target.id;let e=Math.floor(Math.floor(t/10)%10),r=Math.floor(t%10);if(1==n.AI.AIBoard.tileData.get(`${e}${r}`))return void alert("duplicate");n.J5.play(e,r),n.J5.endTurn()}n.AI.play(),n.J5.beginTurn()}})()},62:(t,e,r)=>{r.d(e,{AI:()=>a,J:()=>o});var n=r(647);const o=(()=>{let t=!0;const e=(0,n.$l)(1);for(let t=1;t<6;t++){let r=Math.floor(10*Math.random()+0),o=Math.floor(10*Math.random()+0),a=Math.floor(2*Math.random()+0)>0?90:0,l=(0,n.lO)(t);for(;0==e.placeShip(l,a,r,o);)r=Math.floor(10*Math.random()+0),o=Math.floor(10*Math.random()+0),a=Math.floor(2*Math.random()+0)>0?90:0;e.placeShip(l,a,r,o)}return{beginTurn:function(){t=!0},endTurn:function(){t=!1},play:function(t,e){a.AIBoard.attack(t,e)},get turn(){return t},playerBoard:e}})(),a=(()=>{const t=(0,n.$l)(2);for(let e=1;e<6;e++){let r=Math.floor(10*Math.random()+0),o=Math.floor(10*Math.random()+0),a=Math.floor(2*Math.random()+0)>0?90:0,l=(0,n.lO)(e);for(;0==t.placeShip(l,a,r,o);)r=Math.floor(10*Math.random()+0),o=Math.floor(10*Math.random()+0),a=Math.floor(2*Math.random()+0)>0?90:0;t.placeShip(l,a,r,o)}return{play:function(){let t=function(){let t=Math.floor(10*Math.random()+0),e=Math.floor(10*Math.random()+0);for(;1==o.playerBoard.tileData.get(`${t}${e}`);)t=Math.floor(10*Math.random()+0),e=Math.floor(10*Math.random()+0);return[t,e]}();return 1==o.playerBoard.attack(t[0],t[1])&&console.log("AI Hit"),t},AIBoard:t}})()},884:(t,e,r)=>{r.d(e,{l:()=>n});const n=t=>{const e=t;let r=0,n=!1;return{length:e,get hitCount(){return r},isSunk:function(){return n},hit:function(){r++,r>=e&&(n=!0)}}}},647:(t,e,r)=>{r.d(e,{$l:()=>n.$,AI:()=>l.AI,J5:()=>l.J,SO:()=>o.S,lO:()=>a.l});var n=r(661),o=r(340),a=r(884),l=r(62);r(379)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(379),r(340),r(62),r(884),r(661),r(647)})();