/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/

/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [
  {
    nome: "Cuffie",
    categoria: "Elettronica",
    prezzo: 89.99,
    rating: 4,
    immagine: "",
    disponibile: true,
  },
  {
    nome: "Tablet",
    categoria: "Elettronica",
    prezzo: 199.99,
    rating: 5,
    immagine: "",
    disponibile: true,
  },
  {
    nome: "Romanzo",
    categoria: "Libri",
    prezzo: 14.9,
    rating: 4,
    immagine: "",
    disponibile: true,
  },
  {
    nome: "Zaino",
    categoria: "Abbigliamento",
    prezzo: 49.99,
    rating: 4,
    immagine: "",
    disponibile: true,
  },
  {
    nome: "Lampada",
    categoria: "Casa",
    prezzo: 29.5,
    rating: 4,
    immagine: "",
    disponibile: true,
  },
  {
    nome: "Smartwatch",
    categoria: "Elettronica",
    prezzo: 119.0,
    rating: 4,
    immagine: "",
    disponibile: true,
  },
  {
    nome: "Mouse",
    categoria: "Elettronica",
    prezzo: 24.9,
    rating: 4,
    immagine: "",
    disponibile: true,
  },
  {
    nome: "Caffettiera",
    categoria: "Casa",
    prezzo: 22.0,
    rating: 5,
    immagine: "",
    disponibile: true,
  },
  {
    nome: "Parka",
    categoria: "Abbigliamento",
    prezzo: 109.99,
    rating: 5,
    immagine: "",
    disponibile: false,
  },
  {
    nome: "Giallo",
    categoria: "Libri",
    prezzo: 17.9,
    rating: 4,
    immagine: "",
    disponibile: false,
  },
  {
    nome: "Tastiera",
    categoria: "Elettronica",
    prezzo: 19.9,
    rating: 2,
    immagine: "",
    disponibile: true,
  },
  {
    nome: "Vaso",
    categoria: "Casa",
    prezzo: 34.99,
    rating: 3,
    immagine: "",
    disponibile: true,
  },
];

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function formattaPrezzo(obj) {
  let prezzo = obj.prezzo;
  let nome = obj.nome;
  console.log(`${nome}: € ${prezzo}`);
}

for (let i = 0; i < prodotti.length; i++) {
  formattaPrezzo(prodotti[i]);
  console.log(stellineFast(prodotti[i]));
}

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/
/* 
---------------------------------FUNZIONE LENTA---------------------------------------------------------
function stelline(obj) {
  let rating = [];
  for (let i = 0; i < obj.rating; i++) {
    rating.push("★");
  }
  for (let i = rating.length; i < 5; i++) {
    rating.push("☆");
  }
  rating = rating.join("");
  return rating;
}

----------------------------------------------------------------------------------------------------------
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function stellineFast(obj) {
  let rating = obj.rating;
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}
/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtraPerCategoria(categoria) {
  const filtrati = [];

  for (let i = 0; i < prodotti.length; i++) {
    if (prodotti[i].categoria === categoria) {
      filtrati.push(prodotti[i]);
    }
  }

  return filtrati;
}

console.log(filtraPerCategoria("Elettronica"));

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtraPerDispo() {
  const filtrati = [];

  for (let i = 0; i < prodotti.length; i++) {
    if (prodotti[i].disponibile && prodotti[i].rating >= 3) {
      filtrati.push(prodotti[i]);
    }
  }

  return filtrati;
}
console.log(filtraPerDispo());

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista) //CARTELLA APPOSITA 
/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure
*/

// Closure: `conteggio` è privato, si può cambiare solo tramite aggiungi()

const cartBtns = document.querySelectorAll(".btn-cart");
let counter = 0;
cartBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    counter++;
    let cart = document.querySelector("#cartButton");
    cart.textContent = `Carrello (${counter})`;
    console.log(counter);
  });
});

const bin = document.querySelector("#bin");
bin.addEventListener("click", (event) => {
  counter = 0;
  let cart = document.querySelector("#cartButton");
  cart.textContent = `Carrello (${counter})`;
  console.log("Carrello svuotato");
  return counter;
});
/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
