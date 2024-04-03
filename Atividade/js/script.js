exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    // console.log(i);
    document.getElementById("resposta").innerHTML += `<h2>${i}</h2>`;
  }
};

exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  let num = document.getElementById("num").value;
  for (let i = 0; i <= num; i += 2) {
    // console.log(i);
    document.getElementById("resposta").innerHTML += `<h2>${i}</h2>`;
  }
};

exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `Informar numero valido, o numero ${num} nao é positivo`;
    result.innerText = "";
  } else {
    error.innerText = "";
    let primo = true; // declarei variavel para primo

    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; //  %  resto da divisão
    }

    primo
      ? (result.innerText = `O numero ${num} é primo!`)
      : (result.innerText = `O numero ${num} não é primo`);
  }
};

exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    result.innerHTML += `${i} X ${num} = ${i * num} <br />`;
  }
};

exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  result.innerText = ""; //começar a escrever no vazio
  let contador = 1;
  while (contador < num) {
    result.innerText += ` # ${contador}`;
    contador += 2;
  }
  console.log();
};

exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;

  result.innerText = ""; //começar a escrever no vazio
  let contador = 0;
  while (contador <= num) {
    soma += contador;
    contador += 2;
  }
  result.innerText = soma;
};

exercicio7 = () => {
  let result = document.getElementById("resposta");

  result.innerText = "";

  let contador = 10;
  while (contador >= 0) {
    result.innerText += ` # ${contador}`;
    contador -= 1;
  }
  console.log(contador);
};

exercicio8 = () => {
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

exercicio9 = () => {
  let resposta = document.getElementById("resposta");
  let soma = 0;

  resposta.innerText = "";

  for (let contador = 1; contador < 101; contador++) {
    if (contador % 1 == 0) {
      soma += contador;
      resposta.innerText = soma;
    }
  }
};

exercicio10 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;
  let media = 0;

  result.innerText = ""; //começar a escrever no vazio
  let contador = 0;
  while (contador <= num) {
    soma += contador;
    media = soma / contador;
    contador++;
  }
  result.innerText = `A Soma dos numeros é ${soma} e a media é ${media}`;
};

exercicio11 = () => {
  let resposta = document.getElementById("resposta");
  resposta.innerText = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      resposta.innerText += ` ${i}`;
      console.log(i);
    }
  }
};

exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;
  let error = document.getElementById("erro");

  result.innerText = "";

  if (num <= 9) {
    error.innerHTML = `<h3>Favor informar uma palavra!</h3>`;
  } else {
    for (let i = 1; i <= num.length; i++) {
      soma += parseInt(num.charAt(num.length - i));
    }
    result.innerText = soma;
  }
};

exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let maior, menor;
  result.innerText = "";
  if (num2 < num1) {
    menor = parseInt(num2);
    maior = parseInt(num1);
  } else {
    menor = parseInt(num1);
    maior = parseInt(num2);
  }

  if (parseInt(num1) <= 0 || parseInt(num2) <= 0) {
    error.innerText = "Digite Números maiores que Zero";
    result.innerText = "";
  } else {
    error.innerText = "";
    for (let i = menor; i <= maior; i++) {
      let teste = verificarPrimo(i);
      if (teste) result.innerText += ` ${i}`;
    }
  }
};

function verificarPrimo(numero) {
  let primo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) primo = false;
  }
  return primo;
}

exercicio14 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let area = 0;
  result.innerText = "";

  if (num1 < 1 || num2 < 1) {
    error.innerText = "Favor informar uma Numero valido!";
  } else {
    error.innerText = "";
    result.innerText = `A area desse restangulo é de ${num1 * num2}`;
  }
  console.log(area);
};

exercicio15 = () => {
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
    document.getElementById("erro").innerText = `Favor informar uma palavra`;
  }
  for (let i = 0; i < pala.length; i++) {
    for (let l = 0; l < vog.length; l++) {
      if (pala.charAt(i) == vog[l]) {
        document.getElementById("resultado").innerText += ` #${pala.charAt(i)}`;
      }
    }
    for (let z = 0; z < consoante.length; z++) {
      if (pala.charAt(i) == consoante[z]) {
        document.getElementById("erro").innerText += ` #${pala.charAt(i)}`;
      }
    }
  }
};

exercicio16 = () => {
  let num1 = document.getElementById("num1").value
  let resposta = document.getElementById("resultado")
  let error = document.getElementById("erro")
  let area = 0;
  if (num1 < 0) {
      resposta.innerHTML = "";
      error.innerHTML = "informe um numero positivo"
  } else {
      
      area = num1 ** 2 * Math.PI.toFixed(5);
      error.innerHTML = "";
      resposta.innerHTML = `A area do ciculo de raio ${num1} é = ${area} `
  }
};

exercicio17 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let area = 0;
  result.innerText = "";

  if (num1 < 1 || num2 < 1) {
    error.innerText = "Favor informar uma Numero valido!";
  } else {
    error.innerText = "";
    result.innerText = `A area desse triangulo é de ${(num1 / 2) * num2}`;
  }
  console.log(area);
};

exercicio18 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let num1 = document.getElementById("num1").value * 1;
  let num2 = document.getElementById("num2").value * 1;
  let num3 = document.getElementById("num3").value * 1;

  result.innerText = "";

  if (num1 < 1 || num2 < 1 || num3 < 1) {
    error.innerText = "Favor informar uma Numero valido!";
  } else {
    error.innerText = "";
    result.innerText = `A area desse trapezio é de ${
      ((num1 + num2) * num3) / 2
    }`;
  }
  console.log(area);
};

exercicio19

exercicio20
