/**********************************************************************
 *  PREPARATION DE LA LISTE DES PRODUITS 
 * ********************************************************************/
let products = [
    {
        id : 1,
        nom: 'Arbre de Noél',
        image: 'https://media.auchan.fr/A0220020612000866028PRIMARY_1200x1200/B2CD/',
        description: 'Arbre de Noél de 1M78 Stock 21.',
        prix: 225,
        instock : 21
    },
    {
        id : 2,
        nom: 'Lot de Boile de Noel',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4rxcV5xa3Gitms4zY58fLdoQedMYU5TGoVAsTL_O0XwB4EWS0Qb8jwMJKB98CUQvYuQ&usqp=CAU',
        description: 'Lot de 50 boile de Noel Stock 51.',
        prix: 31,
        instock : 51
    },
    {
        id :3,
        nom: 'Etoile De Noel',
        image: 'https://previews.123rf.com/images/madllen/madllen1309/madllen130900366/22288698-or-%C3%A9toile-de-no%C3%ABl-isol%C3%A9-sur-fond-blanc.jpg',
        description: 'étoile de Noel En Or Stock 93.',
        prix: 23,
        instock : 93
    },
    {
        id :4,
        nom: 'Sapin De Noel',
        image: 'data:image/jpeg;base64,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',
        description: 'Sapin De Noel En Plastique 1m23 Stock 73.',
        prix: 131,
        instock : 73
    },
    {
        id : 5,
        nom: 'Papier Cadeaux',
        image: 'data:image/jpeg;base64,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',
        description: 'Papier De Trés Bonne Caliter Lot de 25 a 1m Couleur Différente Rouge Bleu Vert Noir Blant Stock 32 .',
        prix: 15,
        instock : 32
    },
    {
        id: 6,
        nom: 'Peluche Didier',
        image: 'data:image/jpeg;base64,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',
        description: 'FuZeShop.Fr Mieulleur Peluche Au Monde Stock 1000',
        prix: 20,
        instock : 1000
    },
    {
        id : 7,
        nom: 'Béder FuZe Et Didier',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21M5tFrK4NU_aFbXge89xHHwdyGoPRIxHJQ&usqp=CAU',
        description: 'Une Trés Bonne Béder Pour L offrir a ses proche pour Noel Stock 32 de chaque saison Saison Disponible 1; 2; 3; 4; 5.',
        prix: 31,
        instock : 32
    },
    {
        id : 8,
        nom: 'Chaussete De Noel',
        image: 'data:image/jpeg;base64,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',
        description: 'Chaussete De Noel Vendu par Lot de 8(Anti Audeur) Bonne Caliter Stock 50.',
        prix: 14,
        instock : 50
    }
];
        /******************************************************
        *                  TRAITEMENT DU PANIER               *
        ******************************************************/

// SELECTION DES  ELEMENTS
const produits = document.querySelector(".produits");
const panierElements = document.querySelector(".panier-elements");
const subtotal = document.querySelector(".subtotal");
const totalElementsInPanier = document.querySelector(".total-elements-in-panier");

//Fonction d'affichage des produits
function affichageProduits() {
    products.forEach((produit) => {
    produits.innerHTML +=`
    <div class="card col-md-3 element" style="width: 23rem; margin: 10px">
   <img src="${produit.image}" class="card-img-top" alt="...">
     <div class="card-body element-container">
     <h3 class="card-title"> ${produit.nom}</h5>
     <p class='card-text'>"${produit.description}</p>
     <h4 class='card-text'>${produit.prix}  €</h4>
     <a   onclick="addToPanier(${produit.id})" class='btn btn-primary add-to-panier' id="${produit.id}" >Ajouter au panier</a>
     </div></div>
     `;
});    
}
//appelle de la focntion pour l'affichage
affichageProduits();

// Declaration du panier à vide ou récupération du contenu via le localStorage
let panier = [] || JSON.parse(localStorage.getItem("PANIER"));

//Mise à jour du panier
updatePanier();
//console.log(panier);

//Fonction d'ajout produit dans le panier
function addToPanier(id) {
    // verification si le produit n'existe pas dans le panier
    if (panier.some((element) => element.id === id)) {

        //on augmente juste la quantité si le produit existe dèjà dans le panier
        changeQuantity("plus", id);
    } else {
        const element = products.find((produit) => produit.id === id);
        panier.push({
            ...element,
            quantite: 1,
        });
    }
    //rappelle de la fonction de mise à jour pour actualiser
    updatePanier();
}

//Mise à jour des valeurs des elements du panier et sauvegarde dans le localStorage
function updatePanier (){
    affichageElementsPanier();
    affichageSubtotal();

//sauvegarde des données du panier dans le local storage
 localStorage.setItem("PANIER", JSON.stringify(panier));
}

//Cacul et affichage du subtotal
function affichageSubtotal(){
    let totalPrix = 0,
    totalElements =0;

panier.forEach((element) => {
    totalPrix += element.prix * element.quantite;
    totalElements += element.quantite;
});
subtotal.innerHTML= `Subtotal (${totalElements} elements) : ${totalPrix.toFixed(2)} €)`;
totalElementsInPanier.innerHTML = totalElements;

}

// Affichage des elements du panier
function affichageElementsPanier(){
    panierElements.innerHTML = ""; // vider le panier
    panier.forEach((element) => {
    panierElements.innerHTML += `
    <div class="panier-element" id="produit${element.id}">
    <div class="element-info" >
        <h4>${element.nom}</h4>
    </div>
    <div class="unit-prix">
    ${element.prix}<small> €</small>
    </div>
    <div class="units">
        <div class="btn minus" onclick="changeQuantity('minus', ${element.id})">-</div>
        <div class="number">${element.quantite}</div>
        <div class="btn plus" onclick="changeQuantity('plus', ${element.id})">+</div>           
    </div>
    <div><button class="btn btn-danger" id=${element.id} onclick="removeElementFromPanier(${element.id})" type="button">Supprimmer</button></div>
    </div>
     ` ; });
  }

//Supprimer un element du apnier
function removeElementFromPanier(id){
   // panier = panier.filter((element)=> element.id !== id);
    panier.splice(id, 1); 
    console.log(id);
    $('#produit'+id).remove();
    //mise à jour du panier
    updatePanier();
}

//changement de la quantité 
function changeQuantity(action, id) {
    panier = panier.map((element) => {
let quantite = element.quantite;
if (element.id === id) {
    if (action === "minus" && quantite > 1) {
        quantite--;
    } else if(action == "plus" && quantite < element.instock) {
        quantite++;
    } 
} 
return {
    ...element,
    quantite,
};
    });
    updatePanier();
}
            /****************************************************************
            *     VALIDATION DE LA #ModalValidationCommande                 *
            *****************************************************************/
function finaliser() {
    // remplir les infos client
     $('#nomClient').html('<b> ' + $('#username').val() + '</b>')
     $('#prenomClient').html('<b> ' + $('#firstname').val() + '</b>')
     $('#telephoneClient').html('<b> ' + $('#telephone').val() + '</b>')
     $('#emailClient').html('<b> ' + $('#email').val() + '</b>')
     $('#addresseClient').html('<b> ' + $('#addresse').val() + '</b>')
     console.log('======== '+$('#addresse').val()+ ' ========')
     
     // remplir le panier :
     let listFinal = "";
     $("#listFinal").empty()
     var totalPrix = 0;
     panier.forEach(element => {
   
       listFinal += '<li class="list-group-item">';
       listFinal += '<div class="fw-bold">' + element.nom + '</div>';
       listFinal += ' <div class="row"> <div class="col-6">Prix unitaire :';
       listFinal += ' <b>' + element.prix + '€</b></div><div class="col-6"> ';
       listFinal += ' Quantité : <b>' + element.quantite + '</b></div></div></li>';
       totalPrix += element.prix * element.quantite;
   
     });
 
     $('#listFinal').append(listFinal);
     $('#totalPaye').html(totalPrix.toFixed(2)+ '€');
   }
   
   //FINALISER COMMANDE ET PAYER
   $(".finaliser").click(function () {
     document.location.href = "redirect.html"
   })