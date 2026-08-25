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
