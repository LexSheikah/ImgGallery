// Declaración de variables
const imgPrincipal = document.querySelector('#imagen-principal')
const sectionDCImages = document.querySelector('#dc-comic')
const sectionMarvelImages = document.querySelector('#marvel')
const btnBlur = document.querySelector('#btn-blur')
const btnGris = document.querySelector('#btn-gris')
const btnSepia = document.querySelector('#btn-sepia')
const btnContraste = document.querySelector('#btn-contraste')
const btnNinguno = document.querySelector('#btn-ninguno')

// Pool de imágenes
DC_CHARACTERS = [
  'https://images.unsplash.com/photo-1583156340160-7867f31285d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1532169627909-dc6319871078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1513384312027-9fa69a360337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
  'https://images.unsplash.com/photo-1538051046377-5ad74dc62f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1558507334-57300f59f0bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1579986965247-608bb43de2d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80',
  'https://images.unsplash.com/photo-1556707752-481d500a2c58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1559107749-09d30cc1d9bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
]
MARVEL_CHARACTERS = [
  'https://images.unsplash.com/photo-1583998079856-2f2a9c9133a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1569002848204-08cf7f5f7e02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1580164631075-b3f1304f4051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1568833450751-fba3c6b2d129?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1524481905007-ea072534b820?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1593067401452-a1ac88689702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1589886347963-3acbe01452c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1568890724546-a0ad828fd94d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=851&q=80'
]

// Definiendo el template del elemento img
const imagenTemplate = (imgURL) => {
  return `<img src="${imgURL}" alt="comic-character" class="imagen" onclick="ampliar(event)">`
}

// Creando el template del elemento img
const crearElementoImagen = (HTMLString) => {
  const elemento = document.implementation.createHTMLDocument()
  elemento.body.innerHTML = HTMLString
  return elemento.body.children[0]
}

// Recorriendo los arrays de imágenes
const renderImagenes = () => {
  // Renderizando las imágenes de DC Comic
  DC_CHARACTERS.forEach((imgURL) => {
    const HTMLString = imagenTemplate(imgURL)
    const imagenElemento = crearElementoImagen(HTMLString)
    sectionDCImages.append(imagenElemento)
  })
  // Renderizando las imágenes de Marvel
  MARVEL_CHARACTERS.forEach((imgURL) => {
    const HTMLString = imagenTemplate(imgURL)
    const imagenElemento = crearElementoImagen(HTMLString)
    sectionMarvelImages.append(imagenElemento)
  })
}

// Mostrar imagen seleccionada como imagen principal
const ampliar = (evt) => {
  imgPrincipal.style.filter = 'none' // Limpiando cualquier filtro CSS
  imgPrincipal.setAttribute('src', evt.toElement.getAttribute("src"))
  // Aplicar animación
  if(imgPrincipal.classList.contains('showUp')) imgPrincipal.classList.remove('showUp')
  void imgPrincipal.offsetWidth;
  imgPrincipal.classList.add('showUp')
}

// Aplicar filtros de CSS
btnBlur.addEventListener("click", () => {
  imgPrincipal.style.filter = 'blur(5px)'
});
btnGris.addEventListener("click", () => {
  imgPrincipal.style.filter = 'grayscale(100%)'
});
btnSepia.addEventListener("click", () => {
  imgPrincipal.style.filter = 'sepia(100%)'
});
btnContraste.addEventListener("click", () => {
  imgPrincipal.style.filter = 'contrast(150%)'
});
btnNinguno.addEventListener("click", () => {
  imgPrincipal.style.filter = 'none'
});

// Iniciando la Galería
(() => {
  imgPrincipal.setAttribute('src', DC_CHARACTERS[0]) // Mostrando imagen 1 como principal
  renderImagenes() // Mostrando las imágenes de las categoría
})()
