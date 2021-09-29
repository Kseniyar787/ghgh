import "./css/style.scss";


let data = [
    { id: 1, title: 'Мельница у реки', path: "img/1.jpg", type: "img" },
    { id: 2, title: 'Горы осенью', path: "img/2.jpg", type: "img" },
    { id: 3, title: 'Деревня летом', path: "img/3.jpg", type: "img" },
    { id: 4, title: 'Анимированный котик', path: "img/4.gif", type: "img" },
    { id: 5, title: 'Пение птиц', path: "audio/1.mp3", type: "audio" },
    { id: 6, title: 'Пение птиц', path: "audio/2.mp3", type: "audio" },
    { id: 7, title: 'Пение птиц', path: "audio/3.mp3", type: "audio" },
    { id: 8, title: 'Пение птиц', path: "video/1.mp4", type: "video" },

];
const renderProduct = (card) => {
    if (card.type === "img") {
        return `<div class="photos">
    <img class="pictures" src="${card.path}"> 
    <h3 class="names">${card.title}</h3>
    </div>`}

    else if (card.type === "audio") {
        return `<div class="photos">
       
    <audio class="pictures" controls poster="img/1.jpg">
    <source src="${card.path}" type="audio/mpeg">
  </audio>
  <h3 class="names">${card.title}</h3>
    </div>`}

    else
        return `<div class="photos">
    <video class="pictures" controls>
        <source src="${card.path}">
    </video>
    <h3 class="names">${card.title}</h3>
    </div>`

};

const renderAllProdact = data.map(item => renderProduct(item)).join("");
document.querySelector(".content").insertAdjacentHTML("afterbegin", renderAllProdact);


