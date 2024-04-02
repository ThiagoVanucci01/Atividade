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
