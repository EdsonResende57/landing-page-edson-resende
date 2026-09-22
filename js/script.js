const fotoGrande = document.getElementById("fotoGrande");

const miniaturas = document.querySelectorAll(".miniaturas img");

miniaturas.forEach(function(miniatura){

    miniatura.addEventListener("click", function(){

        fotoGrande.src = this.src;    
        
        miniaturas.forEach(function(img){
            img.classList.remove("ativa");
        });

        this.classList.add("ativa");

    });

});

// Compatibilidade com chamadas onclick="trocarFoto(this.src)"
function trocarFoto(src){
    const fotoGrande = document.getElementById("fotoGrande");
    if(!fotoGrande) return;

    fotoGrande.src = src;

    document.querySelectorAll(".miniaturas img").forEach(function(img){
        img.classList.remove("ativa");
        if(img.src === src){
            img.classList.add("ativa");
        }
    });
}


// Conversão do Google Ads para cliques nos botões/links de contato
function gtag_report_conversion(url) {
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-18266778847/26-pCKWHuMQcEN_Zo4ZE',
      'value': 1.0,
      'currency': 'BRL'
    });
  }

  // Permite que o link original respeite target="_blank"
  // e abra o WhatsApp em outra aba, mantendo a landing page aberta.
  return true;
}

// Rastreamento separado da abertura do WhatsApp.
// Não cancela o clique nem altera o target="_blank" dos links.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".botao-whatsapp").forEach(function (botao) {
    botao.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", "conversion", {
          "send_to": "AW-18266778847/26-pCKWHuMQcEN_Zo4ZE",
          "value": 1.0,
          "currency": "BRL"
        });
      }
    });
  });
});
