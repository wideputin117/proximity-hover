document.addEventListener('mousemove',(e)=>{
   

    // get mouse at x and y 
    const mouseX= e.clientX;
    const mouseY =e.clientY;
    
    // getting anchor from htmml
    const anchor= document.getElementById('anchor');
    const rekt = anchor.getBoundingClientRect();

    // calculating x and y coordinates
    // coordinates for the middle of the base image and current location of the mouse
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY =rekt.top+ rekt.height/2 ;

    // lets call the angle function
    const angleDeg = angle(mouseX,mouseY,anchorX,anchorY);
    console.log(angleDeg);

    // get eyes and add style to them
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye=>{
        eye.style.transform=`rotate(${angleDeg}deg)`;
    })


})
// another function to create the angle between the mouse and base image
function angle(cx,cy,ex,ey){
    const dy = ey - cy;
    const dx = ex - cx;
    // calculate angle in radian
    const rad = Math.atan2(dy,dx);
    // css only uses degrees so convert it
    const deg =  rad * 180 / Math.PI;
    return deg;
}