document.addEventListener("mousemove", function (e) {
    console.log(e);
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById("anchor");
    const rekt = anchor.getBoundingClientRect();
    const achorX = rekt.left + rekt.width / 2;
    const achorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(achorX, achorY, mouseX, mouseY);

    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${angleDeg}deg)`;
    })

});

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * (180 / Math.PI);
    return deg;
}
