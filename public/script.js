let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/*****mobile-menu**** */
function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[100px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[100px]'), list.classList.remove('opacity-100'))
}

/*****image-column-slider*******/


var columns = [2, 3, 4];

var pContainer = document.getElementById('products-container');

 document.querySelectorAll('.show-columns').forEach(function(item){

  item.addEventListener("click", function(){

    let column = this.getAttribute("data-columns");

    columns.filter(function(c){

      if(c != column  ){

        return c;
      }

    }).forEach(function(co){

  pContainer.classList.remove(`xl:grid-cols-${co}`);

    });

    pContainer.classList.add( `xl:grid-cols-${column}`)

  });

 });

// /**rating js*/

jQuery(".stars").mousemove(function(e) {
  var gLeft = $(".stars .stars-ghost").offset().left,
     pX = e.pageX;

  jQuery(".stars .stars-ghost").width(pX - gLeft);

});

/**star tating number***/

function stars(e){

var myval = null;

let star = document.querySelectorAll('.newStar');
let rate_num = document.querySelector('#rate-num');

for(let i = 0; i < star.length ; i++){
  star[i].classList.remove('active');
 
}

for (let j = 0; j <= e; j++) {
  star[j].classList.add('active');
  myval = j + 1 ;
  
}
rate_num.innerHTML = myval;

}



/***number comedown* */

  function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );

  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );

  decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
  });

  /** product filter***/

 // gallery item filter
  
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;
  
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
      
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")
  
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }
  
    })
}