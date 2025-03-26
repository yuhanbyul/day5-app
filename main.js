//바로가기 메뉴(.shortcut) 마우스 닿으면 (mouseenter) 숨겨진 하위덩어리 표시(do what!) 
// DOM 탐색 메소드: document.puerySelector(): 한개, document.puerySelectorAll() : 여러개
const shortcut = document.querySelector(".shortcut");

shortcut.addEventListener("click", showLayer);

function showLayer() {
    const layer1 = document.puerySelector("#layer1");
    //console.log(layer1);
    layer1.style.display = "block"
}