const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


function add(){
    let element = document.getElementById("counter");
    element.innerHTML = Number(element.innerHTML) + 1;
}

function show() {
    let element = document.getElementById('modal');
    element.style.visibility = "visible";
    element.style.transform = "scale(1)";
}


function hide() {
    let element = document.getElementById('modal');
    element.style.visibility = "hidden";
    element.style.transform = "scale(0)";

}


let map;
DG.then(function () {
    map = DG.map('map', {
        center: [55.755705, 37.634078],
        zoom: 20
    });
    DG.marker([55.755705, 37.634078]).addTo(map).bindPopup('Мы здесь!');
});