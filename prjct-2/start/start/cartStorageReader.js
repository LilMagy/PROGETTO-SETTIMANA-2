console.log(localStorage);

const div= document.querySelector(".strgOutput");

let totale = 0;
console.log(div);
for (let i=0; i< localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key} ${value}`);
    div.innerHTML += `${key}: ${value} <br />`;

    totale += prezzoANumero(value);
}



function prezzoANumero(stringa) {
  const pulita = stringa
    .replace(/[^\d,.-]/g, "") 
    .replace(",", ".");       
  return parseFloat(pulita);
}



console.log(totale);
div.innerHTML += `Totale: ${totale} <br />`;