const prevent = ev => ev.preventDefault();
const menuBtn = document.querySelector('.menu__btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation__close__btn')
const fullpageEl = document.querySelector('.page')

const blurOverlay = document.querySelector('.blur__overlay')

const IS_ACTIVE = 'is--active'



$(".onepage").onepage_scroll({
  sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
  pagination: false,               // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
  loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: false,                  // You can activate the keyboard controls
  responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
  // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
  // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});

$(function () {
  $(".project__arrow").on('click', function (){
    $(".onepage").moveDown();
  })
})

$(function () {
  $(".project__page_wall").on('click', function (){
    $(".onepage").moveTo(1);
    document.removeEventListener('wheel', prevent);
    navigation.classList.remove(IS_ACTIVE)
    blurOverlay.classList.remove(IS_ACTIVE)
    fullpageEl.classList.remove('no-scroll')
  })
  $(".project__page_overlap").on('click', function (){
    $(".onepage").moveTo(2);
    document.removeEventListener('wheel', prevent);
    navigation.classList.remove(IS_ACTIVE)
    blurOverlay.classList.remove(IS_ACTIVE)
    fullpageEl.classList.remove('no-scroll')
  })
  $(".project__page_sizing").on('click', function (){
    $(".onepage").moveTo(3);
    document.removeEventListener('wheel', prevent);
    navigation.classList.remove(IS_ACTIVE)
    blurOverlay.classList.remove(IS_ACTIVE)
    fullpageEl.classList.remove('no-scroll')
  })
  $(".project__page_column").on('click', function (){
    $(".onepage").moveTo(4);
    document.removeEventListener('wheel', prevent);
    navigation.classList.remove(IS_ACTIVE)
    blurOverlay.classList.remove(IS_ACTIVE)
    fullpageEl.classList.remove('no-scroll')
  })
  $(".project__page_special").on('click', function (){
    $(".onepage").moveTo(5);
    document.removeEventListener('wheel', prevent);
    navigation.classList.remove(IS_ACTIVE)
    blurOverlay.classList.remove(IS_ACTIVE)
    fullpageEl.classList.remove('no-scroll')
  })
  $(".project__page_components").on('click', function (){
    $(".onepage").moveTo(6);
    document.removeEventListener('wheel', prevent);
    navigation.classList.remove(IS_ACTIVE)
    blurOverlay.classList.remove(IS_ACTIVE)
    fullpageEl.classList.remove('no-scroll')
  })
})

const toggleNavigation = () => {
  navigation.classList.toggle(IS_ACTIVE)
  blurOverlay.classList.toggle(IS_ACTIVE)
  fullpageEl.classList.toggle('no-scroll')
  document.addEventListener('wheel', prevent, {passive: false});
}

const CLICK = 'click'

/*menuBtn.addEventListener(CLICK, toggleNavigation)*/
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, function () {
  document.removeEventListener('wheel', prevent);
})
blurOverlay.addEventListener(CLICK, function () {
  document.removeEventListener('wheel', prevent);
})

$(".menu__btn_1").on(CLICK, function () {
  $(".navigation").css('top', '0%');
  $(".blur__overlay").css('top', '0%');
  toggleNavigation()
})

$(".menu__btn_2").on(CLICK, function () {
  $(".navigation").css('top', '100%');
  $(".blur__overlay").css('top', '100%');
  toggleNavigation()
})

$(".menu__btn_3").on(CLICK, function () {
  $(".navigation").css('top', '200%');
  $(".blur__overlay").css('top', '200%');
  toggleNavigation()
})

$(".menu__btn_4").on(CLICK, function () {
  $(".navigation").css('top', '300%');
  $(".blur__overlay").css('top', '300%');
  toggleNavigation()
})

$(".menu__btn_5").on(CLICK, function () {
  $(".navigation").css('top', '400%');
  $(".blur__overlay").css('top', '400%');
  toggleNavigation()
})

$(".menu__btn_6").on(CLICK, function () {
  $(".navigation").css('top', '500%');
  $(".blur__overlay").css('top', '500%');
  toggleNavigation()
})