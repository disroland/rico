'use strict'

let navTabs = document.querySelector('.nav-tabs');
let tabBlocks = document.querySelectorAll('.tab-block');
let navItems = document.querySelectorAll('.nav-item');




navTabs.addEventListener("click", showTabs)


function showTabs(e){
	console.log(e.target.getAttribute('data-nav'));
	for (let i=0; i<tabBlocks.length;i++){
		if (tabBlocks[i].classList.contains('active') && tabBlocks[i].getAttribute('data-tab') !== e.target.getAttribute('data-nav')){
			tabBlocks[i].classList.remove('active', 'show');
			navItems[i].classList.remove('active', 'show')
		} else if (tabBlocks[i].getAttribute('data-tab') === e.target.getAttribute('data-nav')){
			tabBlocks[i].classList.add('active', 'show');
			navItems[i].classList.add('active', 'show')
		}
	}
}