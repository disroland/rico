'use strict'

// slider
let z = 3
if (window.innerWidth < 600) z = 1;
let slSlider = function (){

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: z,
  slidesToScroll: 1,
  dots:true,
  autoplay: true,
  autoplaySpeed: 2000,
});
}
window.onload = slSlider()

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


//modal
$('.card img').on('click', function(e)
{
  let $imgSrc = $(this).attr('src');
  let $modalImage = $('<img>');
  let modalTXT = document.createElement('div');
  let $modalText = $(this).closest('div')[0].nextElementSibling.innerHTML;
  console.log($modalText);
  modalTXT.innerHTML=$modalText;
  modalTXT.style.color = 'skyblue';
  modalTXT.style.fontSize = '20px';
  modalTXT.style.textTransform = 'uppercase';
  modalTXT.style.textShadow = 'black 1px 1px 2px';
  modalTXT.classList.add('modalTxt');
  modalTXT.classList.add('animate__animated');
  modalTXT.classList.add('animate__backInRight');
  $modalImage[0].classList.add('animate__animated');
  $modalImage[0].classList.add('animate__fadeInLeft');
  $modalImage.attr('src', $imgSrc).addClass('ba-modal__image');
  $('.ba-modal-content-wrapper').append($modalImage);
  $('.ba-modal-content-wrapper').append(modalTXT);
  openModal();
}
)

let openModal = function(){
  $('.ba-modal').addClass('ba-modal-open');
  $('body').addClass('ba-modal-is-open');
  $(document).on('keydown', function (e){
    if (e.keyCode == 27){
      closeModal();
    }
  })
}
let closeModal = function(){
  $('.ba-modal').removeClass('ba-modal-open');
  $('body').removeClass('ba-modal-is-open');
  $('.ba-modal-content-wrapper').empty();
}
$('.ba-modal-close').on('click', closeModal);
$('.ba-modal').on('click', function(e){
  let modalContent = $('.ba-modal-content');
  if (!modalContent.is(e.target) && modalContent.has(e.target).length==0){
    closeModal();
  }
})

