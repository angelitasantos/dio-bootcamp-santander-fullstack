const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        // recebe uma string e transforma em JSON
        const json = await data.json();
        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    // retornar dentro da imagem
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

// para a pagina já inicializar com uma imagem
loadImg();