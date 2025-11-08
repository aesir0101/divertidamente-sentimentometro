const selectHumor = document.getElementById("humor");
const btn = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");
const imagem = document.getElementById("imagem");
const title = document.querySelector("h1");
const overlay = document.getElementById("overlay");
const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");

function mostraMensagem() {
  const valor = selectHumor.value;
  mensagem.classList.remove("show");
  imagem.classList.remove("show");

  if (!valor) {
    mensagem.textContent = "Escolha um humor antes de confirmar! 😊";
    mensagem.classList.add("show");
    imagem.style.display = "none";
    return;
  }

  let emoji = '', texto = '', cor = '', imgURL = '', btnColor = '';

  switch (valor) {
    case "feliz":
      emoji = "😍";
      texto = "Que bom que você está feliz! Continue espalhando alegria!";
      cor = "linear-gradient(135deg, rgba(255,241,118,0.6), rgba(255,213,79,0.6))";
      imgURL = "https://i.pinimg.com/originals/61/79/47/6179473423f1a5d8cef1847bca646fa4.gif";
      btnColor = "#fdeb4c";
      break;
    case "triste":
      emoji = "😢";
      texto = "Sinto muito que você está triste. Tudo passa 💙";
      cor = "linear-gradient(135deg, rgba(68,110,182,0.6), rgba(33,150,243,0.6))";
      imgURL = "https://uploads.jovemnerd.com.br/wp-content/uploads/saddddd.gif";
      btnColor = "#007BFF";
      break;
    case "nojo":
      emoji = "🤢";
      texto = "O nojo também é sabedoria do corpo. Confie no seu instinto!";
      cor = "linear-gradient(135deg, rgba(114,182,136,0.6), rgba(56,142,60,0.6))";
      imgURL = "https://pilotandotv.wordpress.com/wp-content/uploads/2016/04/zsgit6l2.gif?w=530&h=299";
      btnColor = "#28A745";
      break;
    case "raiva":
      emoji = "😠";
      texto = "Cuidado com a raiva! Respire e transforme em energia criativa 💪";
      cor = "linear-gradient(135deg, rgba(239,83,80,0.6), rgba(198,40,40,0.6))";
      imgURL = "https://i.pinimg.com/originals/0c/30/19/0c3019bbcdd8bfb23d728aaac7df295a.gif";
      btnColor = "#DC3545";
      break;
    case "medo":
      emoji = "😱";
      texto = "O medo protege, mas não pode te paralisar. Um passo de cada vez!";
      cor = "linear-gradient(135deg, rgba(170,111,191,0.6), rgba(106,27,154,0.6))";
      imgURL = "https://i0.wp.com/s-media-cache-ak0.pinimg.com/originals/87/cd/d0/87cdd0e25f4c4e5c20781de83fb29401.gif";
      btnColor = "#8E24AA";
      break;
    case "ansiedade":
      emoji = "😰";
      texto = "Respire... você não precisa controlar tudo. 🍂";
      cor = "linear-gradient(135deg, rgba(242,169,83,0.6), rgba(255,183,77,0.6))";
      imgURL = "https://media.tenor.com/oYMCvgUOz4EAAAAM/anxiety-inside-out.gif";
      btnColor = "#FB8C00";
      break;
    case "inveja":
      emoji = "🫣";
      texto = "A inveja mostra o que você admira — transforme em inspiração ✨";
      cor = "linear-gradient(135deg, rgba(100,211,194,0.6), rgba(27,168,158,0.6))";
      imgURL = "https://media.tenor.com/hP0FSdeckOwAAAAM/inside-out-2-envy.gif";
      btnColor = "#1ba89e";
      break;
    case "tedio":
      emoji = "😒";
      texto = "Isso tudo é tão... meh. Vamos só existir por um tempo. 😴";
      cor = "linear-gradient(135deg, rgba(101,92,158,0.6), rgba(140,133,173,0.6))";
      imgURL = "https://media.tenor.com/zqh7JkYNKggAAAAM/bored-ennui.gif";
      btnColor = "#655c9e";
      break;
    case "vergonha":
      emoji = "😳";
      texto = "A vergonha te lembra que ser vulnerável também é ser humano 🌸";
      cor = "linear-gradient(135deg, rgba(233,168,191,0.6), rgba(255,133,165,0.6))";
      imgURL = "https://media.tenor.com/GSOymOliUoIAAAAM/inside-out-2-embarassment.gif";
      btnColor = "#ff85a5";
      break;
  }

  overlay.style.background = cor;
  btn.style.backgroundColor = btnColor;
  title.style.color = "#fff";

  mensagem.innerHTML = `<span style='font-size:1.5em'>${emoji}</span> ${texto}`;
  imagem.src = imgURL;
  imagem.style.display = 'block';
  setTimeout(() => imagem.classList.add("show"), 200);
  mensagem.classList.add("show");
  clickSound.play();

  setTimeout(() => {
    overlay.style.background = "rgba(0,0,0,0.4)";
    mensagem.classList.remove("show");
    imagem.classList.remove("show");
    imagem.style.display = "none";
  }, 10000);
}

btn.addEventListener("click", mostraMensagem);
