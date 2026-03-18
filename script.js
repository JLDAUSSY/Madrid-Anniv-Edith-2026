// =======================
// LISTE DES PHOTOS ET TITRES
// =======================
const sets = {
    palais:[16,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],
    cathedrale:[14,15,21,25,51,52,53,54,55,56,57],
    francisco:[93,92],
    prado:[74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
    thyssen:[94,95,96,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112],
    vues:[21,68,70],
    edith:[18],
    letras:[1,2],
    sol:[3,4,5,6,60,61,62,63,64,65,68,69,70],
    austrias:[7,8,9,10,11,12,23,66,67],
    latina:[13,24,58,59,71,91],
    arguelles:[19,20,22],
    lavapies:[72],
    retiro:[73]
}

sets.all = [].concat(...Object.values(sets))

const titles = {
    1:"Plaza Santa Ana",
    2:"Plaza de Canalejas",
    3:"Palacio de la Equitativa",
    4:"L'Ours et l'Arbousier",
    5:"Pub pour Tio Pepe",
    6:"Statue Du Roi Charles III",
    7:"Plaza Mayor",
    8:"Plaza Mayor, statue de Felipe III ",
    9:"Plaza Mayor",
    10:"Plaza Mayor",
    // ... compléter avec tous tes titres comme avant
    18:"Madrid 2026 à l'occasion de l'anniversaire d'Edith"
}

// =======================
// PARAMÈTRES
// =======================
const params = new URLSearchParams(window.location.search)
const set = params.get('set')
const numbers = sets[set] || sets.all

const slideshowItems = numbers.map(num => ({
    src: `photos/${num}.jpg`,
    title: titles[num] || ""
}))

let index = 0
const imgElement = document.getElementById('img1')
const caption = document.getElementById('caption')

// =======================
// PRÉCHARGEMENT DES IMAGES
// =======================
slideshowItems.forEach(item => {
    const img = new Image()
    img.src = item.src
})

// =======================
// AFFICHER IMAGE + TITRE
// =======================
function show() {
    const item = slideshowItems[index]
    const img = new Image()
    img.onload = () => {
        imgElement.src = item.src
        caption.innerText = item.title
    }
    img.src = item.src
}

// =======================
// NAVIGATION
// =======================
function next() { index = (index + 1) % slideshowItems.length; show() }
function prev() { index = (index - 1 + slideshowItems.length) % slideshowItems.length; show() }

// =======================
// CLAVIER
// =======================
document.addEventListener('keydown', e => {
    if(e.key === "ArrowRight") next()
    if(e.key === "ArrowLeft") prev()
})

// =======================
// SWIPE MOBILE
// =======================
let startX = 0
document.addEventListener('touchstart', e => startX = e.touches[0].clientX)
document.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX
    if(endX - startX > 50) prev()
    if(startX - endX > 50) next()
})

// =======================
// DÉMARRAGE
// =======================
show()