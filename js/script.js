// Declaración de variables
const imgPrincipal = document.querySelector('#imagen-principal')
const sectionDCImages = document.querySelector('#dc-comic')
const sectionMarvelImages = document.querySelector('#marvel')
const sectionAnimeImages = document.querySelector('#anime')
const btnBlur = document.querySelector('#btn-blur')
const btnGris = document.querySelector('#btn-gris')
const btnSepia = document.querySelector('#btn-sepia')
const btnContraste = document.querySelector('#btn-contraste')

// Pool de imágenes
DC_CHARACTERS = [
  {
    URL:'https://images.unsplash.com/photo-1583156340160-7867f31285d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Silhouette Batman'
  },
  {
    URL:'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Batman Dark Knight'
  },
  {
    URL:'https://images.unsplash.com/photo-1532169627909-dc6319871078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Lego Batman'
  },
  {
    URL:'https://images.unsplash.com/photo-1513384312027-9fa69a360337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
    title: 'Lego Superman'
  },
  {
    URL:'https://images.unsplash.com/photo-1538051046377-5ad74dc62f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Flying Superman'
  },
  {
    URL:'https://images.unsplash.com/photo-1558507334-57300f59f0bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Superman'
  },
  {
    URL:'https://images.unsplash.com/photo-1579986965247-608bb43de2d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80',
    title: 'Lego Joker'
  },
  {
    URL:'https://images.unsplash.com/photo-1556707752-481d500a2c58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'DC Characters'
  },
  {
    URL:'https://images.unsplash.com/photo-1559107749-09d30cc1d9bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Batman vs Superman'
  }
]

MARVEL_CHARACTERS = [
  {
    URL: 'https://images.unsplash.com/photo-1583998079856-2f2a9c9133a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Vision'
  },
  {
    URL: 'https://images.unsplash.com/photo-1569002848204-08cf7f5f7e02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Ironman'
  },
  {
    URL: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Capitan America'
  },
  {
    URL: 'https://images.unsplash.com/photo-1580164631075-b3f1304f4051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Wolverine'
  },
  {
    URL: 'https://images.unsplash.com/photo-1568833450751-fba3c6b2d129?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Ironman Wall'
  },
  {
    URL: 'https://images.unsplash.com/photo-1524481905007-ea072534b820?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Spiderman'
  },
  {
    URL: 'https://images.unsplash.com/photo-1593067401452-a1ac88689702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Ironman Figure'
  },
  {
    URL: 'https://images.unsplash.com/photo-1589886347963-3acbe01452c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Marvel Characters'
  },
  {
    URL: 'https://images.unsplash.com/photo-1568890724546-a0ad828fd94d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=851&q=80',
    title: 'Photographer Spiderman'
  }
]

ANIME_CHARACTERS = [
  {
    URL: 'https://images3.alphacoders.com/144/144565.jpg',
    title: 'Uchiha Itachi'
  },
  {
    URL: 'https://images.alphacoders.com/846/84631.jpg',
    title: 'Portgas D. Ace'
  },
  {
    URL: 'https://images2.alphacoders.com/718/71840.jpg',
    title: 'Uzumaki Naruto'
  },
  {
    URL: 'https://images2.alphacoders.com/606/606275.jpg',
    title: 'Monkey D. Luffy'
  },
  {
    URL: 'https://images8.alphacoders.com/545/545909.jpg',
    title: 'Ken Kaneki'
  },
  {
    URL: 'https://images4.alphacoders.com/678/678317.jpg',
    title: 'Son Goku'
  },
  {
    URL: 'https://images.alphacoders.com/205/205913.jpg',
    title: 'Naruto Hokage'
  },
  {
    URL: 'https://images4.alphacoders.com/641/641968.jpg',
    title: 'Pikachu'
  },
  {
    URL: 'https://images6.alphacoders.com/596/596848.jpg',
    title: 'Ken Kaneki Ghoul'
  }
]

// Mostrar imagen seleccionada como imagen principal
const eventoAmpliar = (imgElement) => {
  imgElement.addEventListener('click', async () => {
    imgPrincipal.style.filter = 'none' // Limpiando cualquier filtro CSS
    limpiarActives() // Limpiando cualquier active en los botones
    imgPrincipal.setAttribute('src', imgElement.getAttribute('src'))
    // Aplicar animación
    if(imgPrincipal.classList.contains('showUp')) imgPrincipal.classList.remove('showUp')
    void imgPrincipal.offsetWidth
    imgPrincipal.classList.add('showUp')
  })
}

// Metodo para Agragar imagen a la sección correspondiente
const agregarImagen = (sectionImagenes, imagen) => {
  // sectionDCImages.insertAdjacentHTML('beforeend', `<img src="${imagen}" alt="comic-character" class="imagen" onclick="ampliar(event)">`)
  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', imagen.URL)
  imgElement.setAttribute('title', imagen.title)
  imgElement.classList.add('imagen')
  sectionImagenes.append(imgElement)
  eventoAmpliar(imgElement); // Agregando el eventListener para la imagen
}

// Recorriendo los arrays de imágenes
const renderImagenes = () => {
  // Renderizando las imágenes de DC Comic
  DC_CHARACTERS.forEach((imgURL) => {
    agregarImagen(sectionDCImages, imgURL)
  })
  // Renderizando las imágenes de Marvel
  MARVEL_CHARACTERS.forEach((imgURL) => {
    agregarImagen(sectionMarvelImages, imgURL)
  })
  // Renderizando las imágenes Anime
  ANIME_CHARACTERS.forEach((imgURL) => {
    agregarImagen(sectionAnimeImages, imgURL)
  })
}

// Quitar cualquier active de los botones de filtro
const limpiarActives = () => {
  btnBlur.classList.remove('btn-blur-active')
  btnGris.classList.remove('btn-gris-active')
  btnSepia.classList.remove('btn-sepia-active')
  btnContraste.classList.remove('btn-contraste-active')
}

const aplicarFiltro = (filtro, btn, clase) => {
  limpiarActives()
  if(imgPrincipal.style.filter === filtro) {
    imgPrincipal.style.filter = 'none'
  } else {
    imgPrincipal.style.filter = filtro
    btn.classList.add(clase)
  }
}

// Activando filtros de CSS
btnBlur.addEventListener("click", () => {
  aplicarFiltro('blur(5px)', btnBlur, 'btn-blur-active')
});
btnGris.addEventListener("click", () => {
  aplicarFiltro('grayscale(100%)', btnGris, 'btn-gris-active')
});
btnSepia.addEventListener("click", () => {
  aplicarFiltro('sepia(100%)', btnSepia, 'btn-sepia-active')
});
btnContraste.addEventListener("click", () => {
  aplicarFiltro('contrast(150%)', btnContraste, 'btn-contraste-active')
});

// Iniciando la Galería
(() => {
  imgPrincipal.setAttribute('src', DC_CHARACTERS[0].URL) // Mostrando imagen 1 como principal
  renderImagenes() // Mostrando las imágenes de las categoría
})()