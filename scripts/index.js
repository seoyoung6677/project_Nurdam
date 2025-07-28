const cards = document.querySelectorAll('.menu-card');
function animate(){
    const now = Date.now() / 1000; //초단위
    cards.forEach((card, i)=>{
        const floatY = Math.sin(now + i) * 12;
        const floatX =Math.cos(now + i) * 4;

        const isHovered = card.matches(':hover');
        const hoverBoost = isHovered ? -30 : 0;
        card.style.transform = `translate(${floatX}px, ${floatY + hoverBoost}px)`;
    });
    requestAnimationFrame(animate)
}
animate();