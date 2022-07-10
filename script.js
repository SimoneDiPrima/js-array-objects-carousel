

// array di oggetti

const gallery = document.querySelector(`#carousel .gallery`);
// gallery.classList.add(`main-section`);
// creo la mia variabile per inserire i thumbnails
const thumbnails = document.getElementById(`thumbnails`);

 const pictures = [
  {
     url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
    title: 'Svezia',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },

  {
    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Perù',
     description:
       'Lorem ipsum, dolor sit amet consecteturt tempore aliquid deleniti aut veniam.',
   },

   {
     url: 'https:img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
     title: 'Chile',
     description:
       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
   },
   {
     url: 'https:static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
     title: 'Argentina',
     description:
       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
   },
   {
     url: 'https:cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
     title: 'Colombia',
     description:
       'Lorem ipsum, dolor sit amet consectetur adipisicing elit.pore aliquid deleniti aut veniam.',
   },
 ];
let galleryElements = ``;//ricordarsi che questa è semplicemente una stringa
let thumbnailsElements = ``;
// e quindi una volta montata con il ciclo for posso metterla sia dentro a gallery che a thumbnails!!
pictures.forEach(picture=>{
  const img = `<img src="${picture.url}"/>`; 
  thumbnailsElements += img;
  galleryElements += `
   <figure class="text-end">
      ${img}
      <figcaption class = "text-white me-3">
        <h4><strong>${picture.title}</strong></h4>
        <p>${picture.description}</p>
      </figcaption>
    </figure>`
  
})

gallery.innerHTML = galleryElements;
  //anche qui voglio vedere tutte le immagini e altezza e larghezza sono gestite internamente nel css
thumbnails.innerHTML = thumbnailsElements;
// prendo tutte le immagini grazie al querySelectorAll
const images = document.querySelectorAll(`#carousel figure`); //mi restituisce una lista di nodi
//ovviamente devo prendere anche tutte le immagini all interno di thumbnails
const singleThumb = document.querySelectorAll(`#thumbnails img`);
// creo l indice d appoggio 
let allIndeximages = 0; 
// metto la classe active alla prima immagine in modo da vedere solo quella
images[allIndeximages].classList.add(`active`);
//metto la classe active anche alla prima immagine del thumbnails e quindi sara:
singleThumb[allIndeximages].classList.add(`active`);

// creo le due variabili bottoni al quale leghero il cambio delle immagini e al quale devo mettere il controllo affinche ripartano
// dall inizio quando arrivano all ultima immagine
nextButton = document.getElementById(`rightarrow`);

beforeButton = document.getElementById(`leftarrow`);

nextButton.addEventListener(`click`, function(){
    
    images[allIndeximages].classList.remove(`active`);
    singleThumb[allIndeximages].classList.remove(`active`);
    allIndeximages++ ;
    if(allIndeximages===images.length){
        allIndeximages = 0;
    }
    images[allIndeximages].classList.add(`active`);
    singleThumb[allIndeximages].classList.add(`active`);
})
beforeButton.addEventListener(`click`, function(){
    images[allIndeximages].classList.remove(`active`);
    singleThumb[allIndeximages].classList.remove(`active`);
    allIndeximages-- ;
    if(allIndeximages < 0){
        allIndeximages = (images.length - 1);
    }
    images[allIndeximages].classList.add(`active`);
    singleThumb[allIndeximages].classList.add(`active`);
})

