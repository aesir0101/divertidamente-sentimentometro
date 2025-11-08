const mensagens = {
  feliz: "Sorrisos iluminam o caminho! 🌞",
  triste: "Tudo bem não estar bem. A chuva também faz florescer. 🌧️",
  nojo: "Nem tudo agrada — o importante é manter a autenticidade. 💚",
  raiva: "Canalize o fogo, transforme-o em força. 🔥",
  medo: "Coragem é sentir medo e seguir mesmo assim. 🦁",
  ansiedade: "Respire fundo, o amanhã se resolve no tempo certo. 🌿",
  inveja: "Compare menos, admire mais — cada um tem seu tempo. 🌸",
  tedio: "Até o silêncio pode ensinar algo novo. 🌙",
  vergonha: "Errar é humano. E humano é lindo. 💫"
};

const imagens = {
  feliz: "https://i.pinimg.com/originals/61/79/47/6179473423f1a5d8cef1847bca646fa4.gif",
  triste: "https://uploads.jovemnerd.com.br/wp-content/uploads/saddddd.gif",
  nojo: "https://pilotandotv.wordpress.com/wp-content/uploads/2016/04/zsgit6l2.gif?w=530&h=299",
  raiva: "https://i.pinimg.com/originals/0c/30/19/0c3019bbcdd8bfb23d728aaac7df295a.gif",
  medo: "https://i0.wp.com/s-media-cache-ak0.pinimg.com/originals/87/cd/d0/87cdd0e25f4c4e5c20781de83fb29401.gif",
  ansiedade: "https://media.tenor.com/oYMCvgUOz4EAAAAM/anxiety-inside-out.gif",
  inveja: "https://media.tenor.com/hP0FSdeckOwAAAAM/inside-out-2-envy.gif",
  tedio: "https://media.tenor.com/zqh7JkYNKggAAAAM/bored-ennui.gif",
  vergonha: "https://media.tenor.com/GSOymOliUoIAAAAM/inside-out-2-embarassment.gif"
};

const btn = document.getElementById('btn');
const mensagem = document.getElementById('mensagem');
const imagem = document.getElementById('imagem');
const humor = document.getElementById('humor');

btn.addEventListener('click', () => {
  const valor = humor.value;

  if (valor && mensagens[valor]) {
    mensagem.textContent = mensagens[valor];
    mensagem.classList.add('show');
    imagem.src = imagens[valor];
    imagem.classList.add('show');
  } else {
    mensagem.textContent = "Por favor, selecione uma emoção primeiro!";
    imagem.src = "";
    imagem.classList.remove('show');
  }
});

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("✅ Service Worker registrado"))
    .catch(err => console.error("Erro ao registrar SW:", err));
}
