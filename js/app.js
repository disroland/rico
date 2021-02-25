'use strict'

let navTabs = document.querySelectorAll('.nav-tabs');
let tabBlocks = document.querySelectorAll('.tab-block');
let navItems = document.querySelectorAll('.nav-item');
let navItems2 = document.querySelectorAll('.nav-item2');
let menuBtn = document.querySelector('.menu-btn');
let hiddenMnu = document.querySelector('.hidden_menu');
let main = document.querySelector('main');
let parallaxFog = document.querySelector('.parallax_fog');

main.onclick = function(e){
	let moveGrade = (e.screenX + e.screenY)/300;
	if (moveGrade < 1) {moveGrade = 1.5}
	parallaxFog.style.transform = 'scale(' + moveGrade + ')';
}

for (let i=0; i<navTabs.length; i++){
navTabs[i].addEventListener("click", showTabs)
}

menuBtn.addEventListener('click', function(e){
	hiddenMnu.classList.toggle('show_hidden_menu');
	menuBtn.classList.toggle('pressed')
	}
	)


function showTabs(e){
	console.log(e.target.getAttribute('data-nav'));
	for (let i=0; i<tabBlocks.length;i++){
		if (tabBlocks[i].classList.contains('active') && tabBlocks[i].getAttribute('data-tab') !== e.target.getAttribute('data-nav')){
			tabBlocks[i].classList.remove('active', 'show');
			navItems[i].classList.remove('active', 'show');
			navItems2[i].classList.remove('active', 'show')
		} else if (tabBlocks[i].getAttribute('data-tab') === e.target.getAttribute('data-nav')){
			tabBlocks[i].classList.add('active', 'show');
			navItems[i].classList.add('active', 'show');
			navItems2[i].classList.add('active', 'show')
		}
	}
}

window.addEventListener('resize', function(){
	
		hiddenMnu.classList.remove('show_hidden_menu');
	    menuBtn.classList.remove('pressed')
	
})