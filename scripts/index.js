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


 /*  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".TPO_collection-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");

      // 1. 모든 tab에서 active 제거
      tabs.forEach(t => t.classList.remove("active"));
      // 2. 클릭한 tab에만 active 추가
      tab.classList.add("active");

      // 3. 모든 content에서 active 제거
      contents.forEach(c => c.classList.remove("active"));
      // 4. 클릭한 탭에 해당하는 content만 active 추가
      document.getElementById(target).parentElement.classList.add("active");
    });
  });
 */

/*   const tabs = document.querySelectorAll('.tab');
  const stickyNotes = document.querySelectorAll('.sticky-note');
  const productList = document.querySelectorAll('.product-list');
  const iconImages = document.querySelectorAll('.images-box');

  tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
      const target = tab.dataset.target;

      //탭 active 토글
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      stickyNotes.classList.remove("yellow", "blue", "red")
      stickyNotes.classList.add(target);
      //포스트잇 바꾸기
      stickyNotes.forEach(note => {
        note.style.display = note.classList.contains(target) ? 'block' : 'none';
      })
      //상품 리스트 바꾸기
      productList.forEach(list=> {
        list.style.display = list.classList.contains(target) ? 'block' : 'none';
      })
      //이미지 바꾸기
      iconImages.forEach(icon => {
        icon.style.display =icon.classList.contains(target) ? 'block' : 'none';
      })
      //아이콘 이미지 바꾸기
      iconImages.src=`./images/${target}.png`;
      /* floatItems.forEach(item => {
        item.classList.remove('active');
        if (item.classList.contains(target)) {
          item.classList.add('active');
        }
      })
    })
  }) */

const tabs = document.querySelectorAll(".tab");
const stickyNote = document.querySelector(".sticky-note");
const productLists = document.querySelectorAll(".product-list");

tabs.forEach((tab) => {
tab.addEventListener("click", () => {
const target = tab.getAttribute("data-target"); // 클릭한 버튼의 색상
// 👉 탭 active 클래스 갱신
tabs.forEach((btn) => btn.classList.remove("active"));
tab.classList.add("active");

// 👉 포스트잇 색상 바꾸기
stickyNote.classList.remove("yellow", "blue", "red");
stickyNote.classList.add(target);

// 👉 상품리스트 보여줄 것만 display: block
productLists.forEach((list) => {
  if (list.classList.contains(target)) {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});
});
});
