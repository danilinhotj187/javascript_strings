// // let fruta = 'maçã'                               //criacao de variavel

// // let frutas = ['maçã' , 'banana' , 'uva']    //criacao de array

// // let pessoa2 = {             //criacao e objeto
// //     nome: "João",
// //     idade: 30,
// //     profissao: "Desenvolvedor"
// //   };

// // //-----------------------------------------------------------
// // //exemplo de objeto dentro de objeto

// // const pessoa = {
// //     nome: "João",
// //     idade: 30,
// //     endereco: {
// //       rua: "Rua das Flores",
// //       numero: 123,
// //       cidade: "São Paulo",
// //       estado: "SP",
// //       telefones: [ 11984637281 , 11945279183]
// //     },
// //     cep: '09248-398'
// //   };
  
// //   // Acessando propriedades do objeto 'endereco'
// //   console.log(pessoa.nome);          // João
// //   console.log(pessoa.endereco.rua);  // Rua das Flores
// //   console.log(pessoa.endereco.cidade); // São Paulo
// //   console.log(pessoa.cep);
// //   console.log(pessoa.endereco.telefones)

//------------------------------------------------------------------

//   //array de objetos

//   const pessoas = [
//     {
//       nome: "Ana",
//       idade: 28,
//       profissao: "Engenheira"
//     },
//     {
//       nome: "Carlos",
//       idade: 35,
//       profissao: "Professor"
//     },
//     {
//       nome: "Maria",
//       idade: 22,
//       profissao: "Designer"
//     }
//   ];
  
//   // Acessando os objetos no array
//   console.log(pessoas[0].nome); // Ana
//   console.log(pessoas[1].idade); // 35
//   console.log(pessoas[2].profissao); // Designer

//   //array de arrays
//   //exemplo cada filial tem 3 vendas: frutas, bolsas, canetas

//   vendasLojas = [
//     [2000 , 3000, 4000] ,
//     [400, 500, 1000]
//   ]

// console.log('As vendas de bolsas da primeira loja foram: ' + vendasLojas[0][1])
// console.log('As vendas de bolsas da segunda loja foram: ' + vendasLojas[1][2])

// //objeto contendo varios objetos
// const empresa = {
//     funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
//     funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
//     funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" }
//   };
  
//   // Acessando os objetos dentro do objeto 'empresa'
//   console.log(empresa.funcionario1.nome); // Ana

//   console.log(empresa.funcionario2.cargo); // Professor

//   console.log(empresa.funcionario3.idade); // 22
//   console.log(empresa.funcionario3['nome']) //Maria   //usando notaçao colchetes

//   empresa.funcionario3.idade = 23 // alterando o valor

//   console.log(empresa.funcionario3.idade)

//----------------------------------------------------------------

//   const pessoa3 = {
//     nome: "Ana",
//     idade: 25
//   };
  
//   // Adicionando o objeto 'endereco' depois
//   pessoa3.endereco = {
//     rua: "Avenida Central",
//     numero: 456,
//     cidade: "Rio de Janeiro",
//     estado: "RJ"
//   };
  
//   console.log(pessoa3.endereco.cidade); // Rio de Janeiro

  //-------------------------------------------------

  //adicionando um novo objeto usando push

//   const pessoas4 = [
//     {
//       nome: "Ana",
//       idade: 28,
//       profissao: "Engenheira"
//     },
//     {
//       nome: "Carlos",
//       idade: 35,
//       profissao: "Professor"
//     },
//   ];
//   pessoas4.push( {
//     nome: "Pedro",
//     idade: 40,
//     profissao: "Médico"
//   });
  
//   console.log("\n\n---" + pessoas4[2].nome + "\n\n---"); // Pedro

//------------------------------------------

// const empresa2 = {
//     nome: "Tech Solutions",
//     fundacao: 2010,
//     endereco: {
//       rua: "Rua das Flores",
//       numero: 123,
//       cidade: "São Paulo",
//       estado: "SP"
//     }
//   };
  
//   // Removendo o objeto 'endereco'
//   delete empresa2.endereco;
  
//   console.log(empresa2);
//   /*
//   Saída:
//   {
//     nome: "Tech Solutions",
//     fundacao: 2010
//   }
//   */

  //-------------------------------

//   const pessoa5 = {
//     nome: "João",
//     idade: 30
//   };
  
//   const novoEndereco = {
//     endereco: {
//       rua: "Rua das Palmeiras",
//       numero: 456,
//       cidade: "Rio de Janeiro"
//     }
//   };
  
//   // Mesclando o novo objeto 'endereco' no objeto 'pessoa'
//   Object.assign(pessoa5, novoEndereco);
  
//   console.log(pessoa5);
//   /*
//   Saída:
//   {
//     nome: "João",
//     idade: 30,
//     endereco: {
//       rua: "Rua das Palmeiras",
//       numero: 456,
//       cidade: "Rio de Janeiro"
//     }
//   }
//   */

  //-----------------------------------

//   const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// const keys = Object.keys(person);
// const valores = Object.values(person)
// console.log(keys)

// keys.forEach(key => {console.log (key)})
// console.log('----------------------')
// valores.forEach(valor=> {console.log(valor)})

//------------------------------------

// pessoa.email = "joao@email.com";
// console.log(pessoa); // { nome: 'João', idade: 30, email: 'joao@email.com' }

// let pessoa6 = {
//     nome: "João",
//     idade: 30,
    
//   };
//   console.log("nome" in pessoa6); // true
//   console.log("sobrenome" in pessoa6); // false

//   console.log(pessoa6.hasOwnProperty("idade")); // true
  //------------------------------------------------------

//   let pessoa7 = {
//     nome: "João",
//     idade: 30,
//     profissao: "Desenvolvedor"
//   };
//   for (let chave in pessoa7) {
//     console.log(chave + ": " + pessoa7[chave]);
//   }

  //--------------------------

  let pessoas = [
    {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira"
  }
  forEach (let chave in pessoas) {
    console.log(chave + ": " + pessoas[chave]);
  }
  {
    nome: "Mario",
    idade: 25,
    profissao: "Professor"
  };
  for (let chave in pessoas) {
    console.log(chave + ": " + pessoas[chave]);
  }
];

//DESAFIO RELAMPAGO: FAÇA UMA COMBINAÇÃO DE LOOPS PARA IMPRIMIR CADA CHAVE-VALOR DE CADA PESSOA
//SAÍDA ESPERADA:
// nome: Ana
// idade: 28
// profissao: Engenheira
// nome: Mario
// idade: 25
// profissao: Professor


