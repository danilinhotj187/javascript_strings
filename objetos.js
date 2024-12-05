// let fruta = 'maçã'                               //criacao de variavel

// let frutas = ['maçã' , 'banana' , 'uva']    //criacao de array

// let pessoa2 = {             //criacao e objeto
//     nome: "João",
//     idade: 30,
//     profissao: "Desenvolvedor"
//   };

// //-----------------------------------------------------------
// //exemplo de objeto dentro de objeto

// const pessoa = {
//     nome: "João",
//     idade: 30,
//     endereco: {
//       rua: "Rua das Flores",
//       numero: 123,
//       cidade: "São Paulo",
//       estado: "SP",
//       telefones: [ 11984637281 , 11945279183]
//     },
//     cep: '09248-398'
//   };
  
//   // Acessando propriedades do objeto 'endereco'
//   console.log(pessoa.nome);          // João
//   console.log(pessoa.endereco.rua);  // Rua das Flores
//   console.log(pessoa.endereco.cidade); // São Paulo
//   console.log(pessoa.cep);
//   console.log(pessoa.endereco.telefones)

  //array de objetos

  const pessoas = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
    {
      nome: "Maria",
      idade: 22,
      profissao: "Designer"
    }
  ];
  
  // Acessando os objetos no array
  console.log(pessoas[0].nome); // Ana
  console.log(pessoas[1].idade); // 35
  console.log(pessoas[2].profissao); // Designer

  //array de arrays
  //exemplo cada filial tem 3 vendas: frutas, bolsas, canetas

  vendasLojas = [
    [2000 , 3000, 4000] ,
    [400, 500, 1000]
  ]

console.log('As vendas de bolsas da primeira loja foram: ' + vendasLojas[0][1])
console.log('As vendas de bolsas da segunda loja foram: ' + vendasLojas[1][2])

//objeto contendo varios objetos
const empresa = {
    funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
    funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
    funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" }
  };
  
  // Acessando os objetos dentro do objeto 'empresa'
  console.log(empresa.funcionario1.nome); // Ana

  console.log(empresa.funcionario2.cargo); // Professor

  console.log(empresa.funcionario3.idade); // 22
  console.log(empresa.funcionario3['nome']) //Maria 

  empresa.funcionario3.idade = 23

  console.log(empresa.funcionario3.idade)