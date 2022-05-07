/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-09 09:30:41
 * @version $Id$
 */

var p = document.querySelectorAll("li");
p[0].onclick=function () {
	// body...
	p[0].style.color = "red";
}
p[1].addEventListener('click',showtime);
function showtime(e){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var h1 = document.querySelector("h1");
	h1.innerHTML = year + "-" +month + "-" +day;
	// h1.innerHTML=date;
}
p[2].addEventListener('click',function addc(e){
	for(var i=0;i<p.length;i++){
		p[i].classList.add("fn-active");
	}
});
p[3].addEventListener('click',function movep8(e){
	var u = document.querySelector("ul");
	u.removeChild(p[7]);
	p[3].removeEventListener('click',movep8);
})
p[4].addEventListener('click',function (){
	window.open("https://www.taobao.com/",this-URL);
})
p[5].addEventListener('click',function() {
	// body...
	var u = document.querySelector("ul");
	var child = document.createElement("li");
	child.innerHTML = "p9";
	u.appendChild(child);
})
for(var i=0;i<p.length;i++){
	p[i].addEventListener('click',function(e) {
		alert(e.target.innerHTML);
	})
}
p[6].addEventListener("click",function(){
	var box = document.querySelector(".m-box");
	box.style.height= window.screen.availHeight+'px';
	console.log(box.height);
})