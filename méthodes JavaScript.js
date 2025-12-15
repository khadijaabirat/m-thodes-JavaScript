

// phase 2 : le laboratoire
// atelier pratique - niveau 1
// // données de départ
// const produits = [
// { id: 1, nom: “ordinateur”, prix: 999, catégorie: “électronique”, stock: 5 },
// { id: 2, nom: “t-shirt”, prix: 25, catégorie: “vêtement”, stock: 0 },
// { id: 3, nom: “livre js”, prix: 35, catégorie: “livre”, stock: 12 }
// ];
// // tes missions :

// // 1. trouve tous les produits en stock (stock > 0)
// array=produits.filter(produit=>produit.stock>0);

// // 2. calcule le prix total de tous les produits
// totaleprix=produits.reduce((sum,produit)=>sum+produit.prix,0);

// // 3. crée un tableau des noms de produits en majuscules
// array = produits.map(produit => produit.nom.touppercase());

// // 4. vérifie si tous les produits coûtent plus de 20€
// vereffier=produits.every(produit=>produit.prix>20);

// // 5. trouve le produit avec l’id 2
// produittouver=produits.find(produit=>produit.id===2);

// // 6. ajoute un nouveau produit à la fin
// produits.push({ id: 4, nom: "souris", prix: 25, catégorie: "électronique", stock: 6 });

// // 7. enlève le premier produit
// produits.shift();

// // 8. trie les produits par prix (croissant)
// produits.sort((produitp,produitd)=>produitp.prix-produitd.prix);



// ** atelier pratique - niveau 2 (expert)**
// simulateur de panier d’achat
// const panier = [];
// const catalogue = [
// { id: “a1”, nom: “pomme”, prix: 1.5, promo: false },
// { id: “a2”, nom: “banane”, prix: 2, promo: true },
// { id: “b1”, nom: “lait”, prix: 3.5, promo: false }
// ];

// ton défi : crée ces fonctions

// function ajouteraupanier(idproduit, quantité) {
//     produittrouver=produits.find(produit=>produit.id===idproduit); 
//      if(produittrouver){
//         panier.push({...produittrouver,quantité:quantité});
//     }
// }

// function calculertotal() {
//  totaleprix=panier.reduce((sum,produit)=>sum+(produit.prix*produit.quantité),0);
//   return totaleprix;
// }

// function appliquerpromotion() {
//     catalogue=catalogue.map(produit=>{
//         if(produit.promo===true){
//             produit.prix=produit.prix-(produit.prix*10/100)
//         }return produit
//     });
//     return catalogue}
// ou bien aver foreach 
// function appliquerpromotion() {
//   catalogue.foreach(produit => {
//     if (produit.promo === true) {
//       produit.prix = produit.prix - (produit.prix * 10 / 100);
//     }
//   });
// }

// function produitschers(seuil) {
//   const array = catalogue.filter(produit => produit.prix >= seuil);
//   return array;
// }

// function viderpanier() {
//   panier = [];
// }

