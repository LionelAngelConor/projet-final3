let list = [
  {
    couleur: "Blanc",
    image: "img1.png",
    libelle: "Arrière",
  },
  {
    couleur: "Blanc",
    image: "img2.png",
    libelle: "Avant",
  },
  {
    couleur: "Blanc",
    image: "img3.png",
    libelle: "Coté",
  },
  {
    couleur: "Noir",
    image: "img4.png",
    libelle: "Arrière",
  },
  {
    couleur: "Noir",
    image: "img5.png",
    libelle: "Avant",
  },
  {
    couleur: "Noir",
    image: "img6.png",
    libelle: "Coté",
  },
  {
    couleur: "Bleu",
    image: "img15.png",
    libelle: "Arrière",
  },
  {
    couleur: "Bleu",
    image: "img14.png",
    libelle: "Avant",
  },
  {
    couleur: "Bleu",
    image: "img16.png",
    libelle: "Coté",
  },
  {
    couleur: "Rose",
    image: "img13.png",
    libelle: "Arrière",
  },
  {
    couleur: "Rose",
    image: "img17.png",
    libelle: "Avant",
  },
  {
    couleur: "Rose",
    image: "img18.png",
    libelle: "Coté",
  },
  {
    couleur: "BlancNoir",
    image: "img10.png",
    libelle: "Arrière",
  },
  {
    couleur: "BlancNOIR",
    image: "img8.png",
    libelle: "Arrière",
  },
  {
    couleur: "BleuRose",
    image: "img22.png",
    libelle: "Arrière",
  },
  {
    couleur: "BleuRose",
    image: "img19.png",
    libelle: "Arrière",
  },
];

function recherche(arg) {
  console.log(arg.value);
}

(function affichage() {
  list.forEach((elm) => {
    let content = document.querySelector("#contenu");
    content.innerHTML +=
      `
       <div class="col-md-3">
              <div class="card w-100">
                <div class="card-header">
                 ` +
      elm.couleur +
      `
                </div>
                  <div class="card-body" style="height: 300px;">
                    <img src="assets/images/nouveau/` +
      elm.image +
      `" alt="" style="height: 100%; width: 100%;">
                  </div>
                  <div class="card-footer">
                    ` +
      elm.libelle +
      `
                  </div>
            </div>
          </div>`;
  });
})();
