import './style.css'
import { test } from './test.js'

document.querySelector('#app').innerHTML = `
<ul id="msglist"></ul>
<input id="msg" name="msg" type="text">
<button id="send">Send</button>
<p id="warning"></p>
<div id="history">
  <ul id="historylist"></ul>
</div>
<button id="show">Show History</button>
`

test(document.querySelector('#app'))
