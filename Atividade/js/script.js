// EXERCICIO 1 ********
const exercicio1 = () => {
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};
// EXERCICIO 2 ********
const exercicio2 = () => {
  let num = document.getElementById("num");
  for (let i = 0; i <= num; i += 2) {
    document.getElementById("resposta").innerHTML += `<h2>${i}</h2>`;
  }
};
//   EXERCICIO 3 ********
const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerHTML = "";

  if (num <= 0) {
    error.innerText = `informar numero valido, o numero ${num} nao é positivo`;
    result.innerText = "";
  } else {
    error.innerText = "";
    let primo = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }
  }
};
//   EXERCICIO 4 ********
const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerHTML = "";

  if (num < 0) {
    error.innerHTML = "Numero informado negativo !";
  } else {
    for (let i = 0; i <= 10; i++) {
      result.innerHTML += `${num} x ${i} = ${num * i}<br>`;
    }
  }
};
//   EXERCICIO 5 ********
const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerHTML = "";
  if (num < 0) {
    error.innerText = `numero negativo !`;
  } else {
    let i = 0;
    while (i <= num) {
      if (i % 2 != 0) result.innerText += `#${i} `;
      i++;
    }
  }
};
//   EXERCICIO 6 ********
const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let i = 0;
  let soma = 0;
  while (i <= num) {
    soma += i;
    i += 2;
  }
  result.innerText = soma;
};
//   EXERCICIO 7 ********
const exercicio7 = () => {
  let contador = 1;

  while (contador < 10) {
    contador--;
    console.log(contador);
  }
};
//   EXERCICIO 8 ********
const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Favor informar uma palavra!";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};
//   EXERCICIO 9 ********
const exercicio9 = () => {
  let result = document.getElementById("resposta");
  let soma = 0;

  for (let i = 1; i <= 100; i++) {
    soma += i;
    result.innerHTML = soma;
  }
};
//   EXERCICIO 10 ********
const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;
  let media = 0;

  result.innerText = "";
  let contador = 0;
  while (contador <= num) {
    soma += contador;
    media = soma / contador;
    contador++;
  }
  result.innerText = `A soma dos numeros é ${soma} e a media é ${media}`;
};
//   EXERCICIO 11 ********
const exercicio11 = () => {
  let result = document.getElementById("reposta").innerHTML;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      document.getElementById("resposta").innerHTML += `#${i}`;
    }
  }
};
//   EXERCICIO 12 ********
const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let soma = 0;

  result.innerText = "";
  if (num <= 0) {
    error.innerText = `o numero a cima é invalido`;
    result.innerHTML = "";
  } else {
    for (let i = 0; (i = num.length); i++) {
      soma += num[i] * 1;
    }
    result.innerHTML += `${soma}`;
    error.innerText = "";
  }
};
//   EXERCICIO 13 ********
const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let maior, menor;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  } else {
    menor = num2;
    maior = num1;
  }
  result.innerText = "";
  if (num1 <= 0 || num2 <= 0) {
    error.innerText = `O número a cima é inválido`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let i = menor; i <= maior; i++) {
      let teste = verificaPrimo(i);
      if (teste) {
        result.innerText += `${i}`;
      }
    }
  }
};
//   EXERCICIO 14 ********
const exercicio14 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let area = 0;
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  result.innerText = "";

  if (num1 < 1 || num2 < 1) {
    error.innerText = "favor colocar um numero valido";
  } else {
    error.innerText = "";
    result.innerText = `A area desse retangulo é de ${num1 * num2}`;
  }
  console.log(area);
};
//   EXERCICIO 15 ********
const exercicio15 = () => {
  let pala = document.getElementById("palavra").value;
  document.getElementById("resultado").innerText = "";
  document.getElementById("erro").innerText = "";
  console.log(pala.length);
  let vog = [`a`, `e`, `i`, `o`, `u`];
  let consoante = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  pala = pala.toLowerCase();
  if (pala == "") {
    document.getElementById("erro").innerText = `Favor informar palavra`;
  }
  for (let i = 0; i < pala.length; i++) {
    for (let l = 0; l < vog.length; l++) {
      if (pala.charAt(i) == vog[l]) {
        document.getElementById("resultado").innerText += `#${pala.charAt(i)}`;
      }
    }
    for (let z = 0; z < consoante.length; z++) {
      if (pala.charAt(i) == consoante[z]) {
        document.getElementById("erro").innerText += `#${pala.charAt(i)}`;
      }
    }
  }
};
//   EXERCICIO 16 ********
const exercicio16 = () => {
   let uraio =  document.getElementById("num1").value
   let resposta =  document.getElementById("resultado")
   let err =  document.getElementById("erro")
   let area = 0
   
   if (uraio > 0) {
    area = uraio ** 2 * 3.14
    err.innerHTML = ""
    resposta.innerHTML = `A area do circulo de raio ${uraio} è = ${area}`
   } else {
    resposta.innerHTML = ""
    err.innerHTML = " informe um numero positivo"
   }
}
//   EXERCICIO 17 ********
const exercicio17 = () => {
  let pegar1 = document.getElementById("num1").value
  let pegar2 = document.getElementById("num2").value
  let resp = document.getElementById("resultado")
  let err = document.getElementById("erro")

  if (pegar1 <= 0 || pegar2 <= 0) {
    resp.innerHTML = ""
    err.innerHTML = `informe um numero positivo`
  } else {
    let area = (pegar1 * pegar2) / 2
    err.innerHTML = ""
    resp.innerHTML = `a base do triangulo ${pegar1} com a altura ${pegar2} resultara em :${area}`
  }
}
//   EXERCICIO 18 ********
  const exercicio18 = () => {
  let pegar1 = document.getElementById("num1").value * 1
  let pegar2 = document.getElementById("num2").value * 1
  let pegar3 = document.getElementById("num3").value * 1
  let resp = document.getElementById("resultado")
  let err = document.getElementById("erro")
  let soma = pegar1 + pegar2

  if (pegar1 <= 0 || pegar2 <= 0 || pegar3 <= 0) {
    resp.innerHTML = ""
    err.innerHTML = `informe um numero positivo`
  } else {
    let area = soma * pegar3
    err.innerHTML = ""
    resp.innerHTML = `O poligono de lado ${pegar1} e comprimento ${pegar2} possui uma area de ${area / 2}`
  }
  }
  //   EXERCICIO 19 ********
  const exercicio19 = () => {
    let datanasc = document.getElementById("data").value 
    let data = new Date()
    let data2 = new Date(datanasc)
    let resp = document.getElementById("resultado")
    let err = document.getElementById("erro")
    let idade = data.getTime() - data2.getTime()
    let difer = Math.floor(idade / (1000 * 60 * 60 * 24 * 365.25))

    if (difer >= 18) {
      resp.innerHTML = ""
      resp.innerHTML = `voce tem ${difer} anos de idade, e é maior de 18 anos`
    } else {
      resp.innerHTML = ""
      resp.innerHTML = `voce tem ${difer} anos de idade, e é menor de 18 anos`
    }
    }
    //   EXERCICIO 20 ********
  const exercicio20 = () => {
    
  }