let frutas = ['Maçã', 'Banana', 'Laranja']

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])

frutas[1] = 'Manga'
console.log(frutas); // ["Maçã", "Manga", "Laranja"]

console.log(frutas.length); // 3

frutas.push("Uva");
console.log(frutas); // ["Maçã", "Banana", "Laranja", "Uva"]

frutas.pop();
console.log(frutas); // ["Maçã", "Banana", "Laranja"]

frutas.shift();
console.log(frutas); // ["Banana", "Laranja"]

frutas.unshift("Abacaxi");
console.log(frutas); // ["Abacaxi", "Banana", "Laranja"]

let indice = frutas.indexOf("Laranja");
console.log(indice); // 1

let algumasFrutas = frutas.slice(1, 3);
console.log(algumasFrutas); // ["Banana", "Laranja"]

let frutasMaiusculas = frutas.map(function(fruta) {
    return fruta.toUpperCase();
  });
  
  console.log(frutasMaiusculas); // ["ABACAXI", "BANANA", "LARANJA"]

  let frutasComA = frutas.filter(function(fruta) {
    return fruta.includes("a");
  });
  
  console.log(frutasComA); // ["Maçã, "Banana", "Laranja"]



// let cabecalho = ['Código' , 'Nome' , 'Preço']
// let produto = ['ABC123' , 'Fone de ouvido' , 150.00]

// console.log(
//     `Detalhes do produto:
//     ${cabecalho[0]} : ${produto[0]}
//     ${cabecalho[1]} : ${produto[1]}
//     ${cabecalho[2]} : ${produto[2]}
// `)