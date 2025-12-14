// carnet des méthodes

// methode : filter()

// ma définition personnelle
// filter est une méthode qui crée un nouveau tableau avec seulement les éléments qui respectent une condition.

// paramètres acceptés
// une fonction qui retourne true ou false.

// ce qu’elle retourne
// un nouveau tableau.

// quand l’utiliser ?
// quand je veux garder certains éléments et supprimer les autres.

// ce qu’elle ne fait pas
// elle ne modifie pas le tableau original.

// les 3 visages de filter()

// sur un tableau
// array=nombres.filter(num=>num>10);

// sur une string
// phras = phrase.split(" ").filter(mot => mot.length > 3);

// sur un objet
// array = object.entries(utilisateurs).filter(([k, v]) => v === true);









// méthode : reduce()

// ma définition personnelle
// reduce est une méthode qui transforme un tableau en une seule valeur.

// paramètres acceptés
// une fonction = (acc, elm) + une valeur initiale.

// ce qu’elle retourne
// une valeur (nombre, objet, etc.).

// quand l’utiliser ?
// pour calculer une somme ou un total.

// ce qu’elle ne fait pas
// elle ne retourne pas un tableau.

// reduce() les 3 visages

// sur un tableau
// let total=nombres.reduce((c,nbr)=>{if(nbr>10)c+1; return c},0);

// sur une string
// let count = mot.split("").reduce((c, m) =>{if(m=="a" )c=c+1 ;return c; }, 0); 

// sur un objet
// let count=Object.values(panier).reduce((c,m)=>c+1,0);





// méthode : map()

// ma définition personnelle
// map est une méthode qui transforme chaque élément d’un tableau.

// paramètres acceptés
// une fonction qui modifie chaque élément.

// ce qu’elle retourne
// un nouveau tableau modifié.

// quand l’utiliser ?
// quand je veux changer la forme des données.

// ce qu’elle ne fait pas
// elle ne filtre pas les éléments.
// elle ne modifie pas le tableau original.

// .map()  les 3 visages

//  sur un tableau
// array = notes.map(note => note * 2);

//  sur une string
// phras = phrase.split(" ").map(mot => mot.toUpperCase());

//  sur un objet
// array = Object.entries(utilisateurs).map(([k, v]) => v.toUpperCase());
// array = Object.values(utilisateurs).map(nom => nom.toUpperCase());






// méthode : every()

// ma définition personnelle
// every est une méthode qui vérifie si tous les éléments respectent une condition.

// paramètres acceptés
// une fonction qui retourne true ou false.

// ce qu’elle retourne
// true ou false.

// quand l’utiliser ?
// pour vérifier une condition globale.

// ce qu’elle ne fait pas
// elle ne retourne pas un tableau.

// every() les 3 visages

// sur un tableau
// let verifier= prixProduits.every(prix=>prix>20);

// sur une string
// let verifier=mot.split("").every(a=>a===a.toLowerCase());

// sur un objet
// let verifier=Object.values(stockProduits).every(v=>v>0);





// méthode : find()

// ma définition personnelle
// find est une méthode qui retourne le premier élément qui respecte une condition.

// paramètres acceptés
// une fonction de condition.

// ce qu’elle retourne
// un élément ou undefined.

// quand l’utiliser ?
// pour chercher un seul élément.

// ce qu’elle ne fait pas
// elle ne retourne pas plusieurs éléments.

// find() 3 visages

// sur un tableau
// let produit = produits.find(produit=>produit.prix>30);

// sur une string
// let alpha="javascript".split("").find(al=>al==="a");

// sur un objet
// let object=Object.entries(utilisateurs).find(([k,v])=>k==="user2");








// méthode : push()

// ma définition personnelle
// push est une méthode qui ajoute un ou plusieurs éléments à la fin d’un tableau.

// paramètres acceptés
// un ou plusieurs éléments (nombre, string, objet…).

// ce qu’elle retourne
// la nouvelle longueur du tableau.

// quand l’utiliser ?
// quand je veux ajouter un élément à la fin d’un tableau.

// ce qu’elle ne fait pas
// elle ne crée pas un nouveau tableau.

// push() — 3 visages
// sur un tableau
// produits.push({ id: 4, nom: "stylo", prix: 5 });

// sur une string
// let mot = "hello";
// let arr = mot.split("");
// arr.push("!");
// mot = arr.join("");

// sur un objet
// let ut = Object.entries(utilisateurs);
// ut.push(["user3", "Charlie"]);
// utilisateurs = Object.fromEntries(ut);







// méthode : shift()

// ma définition personnelle
// shift est une méthode qui supprime le premier élément d’un tableau.

// paramètres acceptés
// aucun paramètre.

// ce qu’elle retourne
// l’élément supprimé.

// quand l’utiliser ?
// quand je veux supprimer le premier élément d’un tableau.

// ce qu’elle ne fait pas
// elle ne supprime pas le dernier élément.
// elle ne creé pas un noveaux tableau.

// shift() 3 visages

// sur un tableau
// produits.shift();

// sur une string
// let arr = mot.split("");
// arr.shift();
// mot = arr.join("");

// sur un objet
// let arr = Object.entries(utilisateurs);
// arr.shift();
// utilisateurs = Object.fromEntries(arr);




// méthode : sort()

// ma définition personnelle
// sort est une méthode qui permet de trier les éléments d’un tableau.

// paramètres acceptés
// une fonction de comparaison (optionnelle).

// ce qu’elle retourne
// le tableau trié.

// quand l’utiliser ?
// quand je veux organiser les éléments d’un tableau (ordre croissant ou décroissant).

// ce qu’elle ne fait pas
// elle ne crée pas un nouveau tableau, elle modifie le tableau original.

// sort() 3 visages
// sur un tableau
// produits.sort((a, b) => a.prix - b.prix);

// sur une string
// "dcba".split("").sort().join("");

// sur un objet
// object.entries(config).sort(([a], [b]) => a.localecompare(b));





// méthode : touppercase()

// ma définition personnelle
// touppercase est une méthode qui transforme tous les caractères d’une chaîne en majuscules.

// paramètres acceptés
// aucun paramètre.

// ce qu’elle retourne
// une nouvelle chaîne en majuscules.

// quand l’utiliser ?
// pour normaliser ou mettre en valeur du texte.

// ce qu’elle ne fait pas
// elle ne modifie pas la chaîne originale (strings immutables).

// touppercase() — 3 visages
// sur un tableau
// produits.map(p => p.nom.touppercase());

// sur une string
// "bonjour".touppercase();

// sur un objet
// object.values(config).map(v => typeof v === "string" ? v.touppercase() : v);




// méthode : foreach()

// ma définition personnelle
// foreach est une méthode qui permet de parcourir chaque élément d’un tableau et d’appliquer une fonction sur chacun, sans créer de nouveau tableau.

// paramètres acceptés
// une fonction qui prend chaque élément, son index et le tableau lui-même : (élément, index, tableau).

// ce qu’elle retourne
// undefined (elle ne retourne pas de tableau).

// quand l’utiliser ?
// quand je veux exécuter une action pour chaque élément, comme afficher ou modifier les éléments, sans avoir besoin d’un nouveau tableau.

// ce qu’elle ne fait pas
// elle ne filtre pas, ne transforme pas et ne retourne pas de valeur.

// les 3 visages de foreach()

// sur un tableau
// produits.foreach(p => console.log(p.nom));

// sur une string
// "bonjour".split("").foreach(l => console.log(l));

// sur un objet
// object.entries(config).foreach(([k, v]) => console.log(k, v));






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

