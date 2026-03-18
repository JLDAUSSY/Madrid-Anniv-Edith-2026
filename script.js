// =======================
// LISTES DES PHOTOS ET TITRES
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

// Ajouter all
sets.all = [].concat(
    sets.palais, sets.cathedrale, sets.francisco, sets.prado, sets.thyssen,
    sets.vues, sets.edith, sets.letras, sets.sol, sets.austrias, sets.latina,
    sets.arguelles, sets.lavapies, sets.retiro
)

// Titres complets
const titles = {
1:"Plaza Santa Ana",2:"Plaza de Canalejas",3:"Palacio de la Equitativa",4:"L'Ours et l'Arbousier (El Oso y el Madroño), symbole de la ville de Madrid",5:"Pub pour Tio Pepe, sherry sec de Jerez",
6:"Statue Du Roi Charles III",7:"Plaza Mayor",8:"Plaza Mayor, statue de Felipe III",9:"Plaza Mayor",10:"Plaza Mayor",
11:"Plaza Mayor",12:"plaza de la Villa",13:"Iglesia Catedral de las Fuerzas Armadas",14:"Cathédrale de la Almudena",15:"Entrée De La Crypte De La Cathédrale de la Almudena",
16:"Palais Royal",17:"Cathédrale de la Almudena",18:"Madrid 2026 à l'occasion de l'anniversaire d'Edith, le 12 mars",19:"Casa Gallardo",20:"Temple égyptien d'Amon (ou Temple de Debod)",
21:"La cathédrale et le palais royal",22:"Fuente del Cielo",23:"Plaza Mayor",24:"Plaza de Ramales",25:"Cathédrale de la Almudena",
26:"Palais Royal - statue de Moctezuma II",27:"Grand escalier du Palais Royal",28:"Palais Royal",29:"Palais Royal",30:"Palais Royal",
31:"La salle des colonnes",32:"Antichambre de Charles III",33:"un lustre ... vu de dessous",34:"L'Horloge de Cronos - horloger français François-Louis Godon vers 1798",
35:"Salón De Gasparini",36:"Salón De Gasparini",37:"Salón De Gasparini",38:"Salón De Gasparini",39:"Salón De Gasparini",40:"nSalón De Gasparini",
41:"Le cabinet de porcelaine",42:"Le cabinet de porcelaine",43:"Palais Royal",44:"Un autre lustre vu du dessous",45:"Palais Royal",46:"la Cour du Prince (Patio del Príncipe)",
47:"Cabinet Chinois (Gabinete Chino), également connu sous le nom de Cabinet de laques",48:"Palais Royal",49:"Un autre lustre vu du dessous",50:"Salle du trône",
51:"Détails d'une porte en bronze de la Cathédrale",52:"Chœur et abside de la Cathédrale de l'Almudena",53:"Orgue de la cathédrale construit par le facteur d'orgues allemand Gerhard Grenzing",
54:"Retable de la Vierge de l'Almudena",55:"Chapelle du Saint-Sacrement (Capilla del Santísimo)",56:"Cathédrale de l'Almudena - Saint Isidore le Laboureur (San Isidro Labrador), saint patron de la ville de Madrid",
57:"Cathédrale de l'Almudena - Sainte Marie-Micaëla du Saint-Sacrement",58:"Edificio de la Compañía Colonial (Édifice de la Compagnie Coloniale), également connu sous le nom d'Edificio Conrado Martín",
59:"Edificio de la Compañía Colonial (Édifice de la Compagnie Coloniale), également connu sous le nom d'Edificio Conrado Martín",60:"Edificio Metrópolis",61:"Edificio Metrópolis",
62:"La calle Alcala",63:"Palais de Cybèle (Palacio de Cibeles) - Mairie de Madrid (Ayuntamiento)",64:"Détail d'une façade de l'Edificio de la Equitativa",65:"El Edificio de la Gran Vía, 1 appelé aussi Edificio de Eladio Laredo",
66:"Edificio de la Unión y el Fénix Español",67:"La station de métro Callao",68:"Depuis le rooftop du Corte Ingles Callao; au loin, le palais royal, la Cathédrale et le théâtre royal",
69:"Au centre, l'opéra, au loin la Cathédrale et à face à l'enseigne Tio Pepe, la Real Casa de Correos",70:"Depuis le rooftop du Corte Ingles Callao, vue vers la Puerta del Sol",
71:"Ruines de l'église du collège des écoles piaristes de San Fernando",72:"Ministère de l'agriculture",73:"Parc du Retiro - Façade du Palais de Velázquez",
74:"... au musée du Prado",75:"Hall du musée du Prado",76:"Albrecht Dürer - portrait d'un homme",77:"Albrecht Dürer - autoportrait",78:"Jérôme Bosch - le jardin des délices",
79:"Rogier van der Weyden - La descente de la croix",80:"Marie Tudor",81:"Raphaël - portrait d'un cardinal",82:"Francisco de Goya - El tres de Mayo",
83:"Eduardo Rosales - Isabelle la Catholique dictant son testament",84:"Eduardo Rosales - Concepción Serrano, qui sera Contesse de Santovenia",85:"El Greco - portrait d'un inconnu",
86:"Diego Velázquez - La Reine Marguerite d'Autriche à cheval",87:"Bartolomé Esteban Murillo - le Rêve du Patricien",88:"Hyacinthe Rigaud - Louis XIV",89:"Goya - la comtesse de Chinchón",
90:"Goya - la duchesse d'Abrantes",91:"Costanilla de San Andrés",92:"Basilique de San Francisco El Grande",93:"Basilique de San Francisco El Grande",
94:"Raphaël - portrait d'un jeune homme",95:"Hans Balbung Grien - Portrait d'une femme",96:"Lucas van Valckenborch - Le Massacre des Innocents",97:"Caravage - Sainte Catherine of Alexandria",
98:"Caravage - Sainte Catherine of Alexandria",99:"il Canaletto - le Grand Canal",100:"Pierre Bonnard - Misia Godebska",101:"Johan Barthold Jongkind - Moulins à Delft",
102:"Edvard Munch - Baie avec navire et maison",103:"Camille Pissarro - Rue Saint-Honoré, dans l'après-midi. Effet de pluie",104:"André Derain - Le pont de Waterloo",
105:"Van Gogh - Les débardeurs à Arles",106:"Edvard Munch - l'enfant malade",107:"Edward Hopper - Hotel room",108:"Ross Bleckner - sans titre",
109:"Roy Lichtenstein - femme au bain",110:"Edvard Munch - oies dans un verger",111:"Childe Hassam - Place de la Merced, Ronda",112:"Alfred Sisley - Un soir à Moret, fin octobre"
}

// =======================
// PARAMÈTRES
// =======================

const params = new URLSearchParams(window.location.search)
const set = params.get('set')
const numbers = sets[set] || sets.all

// Créer tableau d’objets image + titre
const slideshowItems = numbers.map(num => ({ src: `photos/${num}.jpg`, title: titles[num] || "" }))

let index = 0
let imgA = document.getElementById('img1')
let imgB = document.getElementById('img2')
let showingA = true

// =======================
// AFFICHER IMAGE ET TITRE
// =======================

function show() {
    const currentItem = slideshowItems[index]
    const nextImg = showingA ? imgB : imgA
    const currentImg = showingA ? imgA : imgB

    const img = new Image()
    img.onload = function() {
        nextImg.src = currentItem.src
        document.getElementById('caption').innerText = currentItem.title
        nextImg.classList.add('visible')
        currentImg.classList.remove('visible')
        setTimeout(()=> nextImg.classList.add('zoom'), 50)
        showingA = !showingA
    }
    img.src = currentItem.src
}

// =======================
// NAVIGATION
// =======================

function next() {
    index++
    if(index >= slideshowItems.length) index = 0
    show()
}

function prev() {
    index--
    if(index < 0) index = slideshowItems.length - 1
    show()
}

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
document.addEventListener('touchstart', e => { startX = e.touches[0].clientX })
document.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX
    if(endX - startX > 50) prev()
    if(startX - endX > 50) next()
})

// =======================
// DÉMARRAGE
// =======================

show()