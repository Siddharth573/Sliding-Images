const mainImg = document.querySelector('#mainImg');
const imgChgLeft = document.querySelector('#imgChgLeft');
const imgChgRight = document.querySelector('#imgChgRight');
const imgArray = ["s11.jpg", "s12.jpg", "s13.jpg", "s14.jpg","s15.jpg","s16.jpg","s17.jpg","s18.jpg","s19.jpg","s20.jpg"];
let i=0;
let v= imgArray.length-1;
imgChgRight.addEventListener('click',function(){
     i++;
     mainImg.src = imgArray[i];
     if(i===imgArray.length){
        mainImg.src = imgArray[0];
        i=0;
     }
     console.log(`right click ${i}`);
})

imgChgLeft.addEventListener('click', function(){
    if(i<imgArray.length && i!=0){
         i--;
         mainImg.src = imgArray[i];
    } else if(i==0){
        mainImg.src = imgArray[v];
        i = v;
    }
    console.log(`left click ${i}`);
})



