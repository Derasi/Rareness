let offset = 0;
const  SliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click',function(){
    offset = offset + 700;
    if(offset > 2100 ){
        offset = 0;
    }
    SliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider-prev').addEventListener('click',function(){
    offset = offset - 700;
    if(offset < 0 ){
        offset = 2100;
    }
    SliderLine.style.left = -offset + 'px';
})