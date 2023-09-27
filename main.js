// get slider items 
var sliderImage = Array.from(document.querySelectorAll('.slider_container img'));
var slidesCount = sliderImage.length;

//set current slide
var currentSlide = 1;

//slide numder box
var slideNO= document.querySelector('.slide_number')

//perv & next button
var prevButton = document.querySelector('.prev')
var nextButton = document.querySelector('.next')

nextButton.onclick = nextslide;
prevButton.onclick = pervslide;

//create ul
var indicatorUl = document.createElement('ul')
indicatorUl.setAttribute('id','indicatorUl')

//create li
for(let i=1;i<=slidesCount;i++){
    var indicatorLi= document.createElement('li')
    indicatorLi.setAttribute('data-index',i)
    indicatorLi.appendChild(document.createTextNode(i))
    indicatorUl.appendChild(indicatorLi)

}

//add the created al

var indicator =document.querySelector('.indicators')
indicator.appendChild(indicatorUl)

var newCreatedUl = document.getElementById('indicatorUl')
var indicatorBullets = Array.from(document.querySelectorAll('#indicatorUl li'));
7//loop through all bullets

for(var i=0;i<indicatorBullets.length;i++){
    indicatorBullets[i].onclick=function(){
        currentSlide=parseInt(this.getAttribute('data-index'))
        checker()
    
    }

}




//function next&prev slide
function nextslide(){
    if(nextButton.classList.contains('disable')){

    }
    else{
        currentSlide++
        checker()
    }
}
function pervslide(){
    if(prevButton.classList.contains('disable')){

    }
    else{
        currentSlide--
        checker()
    }
}

//create checker fun
function checker(){
    slideNO.textContent= 'Slide #'+(currentSlide)+ ' of ' + (slidesCount)

    removeAllActive()
    // set class active on current slide
    sliderImage[currentSlide-1].classList.add('active')

    indicatorBullets[currentSlide-1].classList.add('active')
    
    //set active class on current ul
    newCreatedUl.children[currentSlide-1]
    
    if(currentSlide==1){
        prevButton. classList.add('disable')

    }
    else{
        prevButton. classList.remove('disable')

    }
        if(currentSlide==slidesCount){
        nextButton. classList.add('disable')

    }
    else{
        nextButton. classList.remove('disable')

    }


}

//trigger the fun
// checker()

// remove all active classes

function removeAllActive(){
    //loop through images
    sliderImage.forEach(function(img){
        img.classList.remove('active')
    })
    indicatorBullets.forEach(function(bull){
        bull.classList.remove('active')
    })
}

