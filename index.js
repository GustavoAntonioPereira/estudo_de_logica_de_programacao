let nome_do_heroi = prompt("Digite o nome para seu heroi");
let experiencia_do_heroi = +prompt(
  "Digite um valor entre 0 e 15000 para experiência do seu heroi"
);

switch (true) {
  case experiencia_do_heroi >= 0 && experiencia_do_heroi <= 1000:
    alert("O heroi de nome: " + nome_do_heroi + " está no nível Ferro");
    break;
  case experiencia_do_heroi > 1000 && experiencia_do_heroi <= 2000:
    alert("O heroi de nome: " + nome_do_heroi + " está no nível Bronze");
    break;
  case experiencia_do_heroi > 2000 && experiencia_do_heroi <= 5000:
    alert("O heroi de nome: " + nome_do_heroi + " está no nível Prata");
    break;
  case experiencia_do_heroi > 5000 && experiencia_do_heroi <= 7000:
    alert("O heroi de nome: " + nome_do_heroi + " está no nível Ouro");
    break;
  case experiencia_do_heroi > 7000 && experiencia_do_heroi <= 8000:
    alert("O heroi de nome: " + nome_do_heroi + " está no nível Platina");
    break;
  case experiencia_do_heroi > 8000 && experiencia_do_heroi <= 9000:
    alert("O heroi de nome: " + nome_do_heroi + " está no nível Ascendente");
    break;
  case experiencia_do_heroi > 9000 && experiencia_do_heroi <= 10000:
    alert("O heroi de nome: " + nome_do_heroi + " está no nível Imortal");
    break;
  case experiencia_do_heroi > 10000 && experiencia_do_heroi <= 15000:
    alert("O heroi de nome: " + nome_do_heroi + " está no nível Radiante");
    break;
  default:
    alert("O valor inserido de experiencia não está dentro do solicitado.");
}
