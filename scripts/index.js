/* const cards = document.querySelectorAll('.menu-card');
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
animate(); */

/* const floatItems = document.querySelectorAll('.menu-card');

function floatAnimation() {
floatItems.forEach((item, index) => {
const now = performance.now();
const y = Math.round(Math.sin((now + index * 300) / 500) * 5); // 정수로 둠
const isHovered = card.matches(':hover');
const hoverBoost = isHovered ? -30 : 0;
item.style.transform = `translateY(${y}px)`;
});

requestAnimationFrame(floatAnimation);
}

floatAnimation(); */
const floatItems = document.querySelectorAll('.menu-card');

function floatAnimation() {
floatItems.forEach((item, index) => {
const now = performance.now();
const baseY = Math.round(Math.sin((now + index * 300) / 500) * 5);
const hoverOffset = item.matches(':hover') ? -30 : 0; // hover 시 위로 10px
item.style.transform = `translateY(${baseY + hoverOffset}px)`;
});

requestAnimationFrame(floatAnimation);
}

floatAnimation();
const specialDeal = new Swiper('#special_deal_swiper',{
    slidesPerView:4,
    slidesPerGroup:1,
    spaceBetween:25,
    loop:true,
    autoplay:{
    delay:2500,
    disableOnInteraction:false,
    },
    navigation:{
    nextEl:"#special_deal_swiper_prev",
    prevEl:"#special_deal_swiper_next",
    }
})
const bestProduct = new Swiper('#best_product_swiper',{
    slidesPerView:4,
    slidesPerGroup:1,
    spaceBetween:25,
    loop:true,
    autoplay:{
    delay:2500,
    disableOnInteraction:false,
    },
    navigation:{
    nextEl:"#best_product_swiper_prev",
    prevEl:"#best_product_swiper_next",
    }
})