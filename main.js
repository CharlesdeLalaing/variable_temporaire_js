//1
//# Variables temporaires
// let a = 1; //-> 2
// let b = 2; //-> 3
// let c = 3; //-> 1

// let mix = a;

// a = b;
// b = c;
// c = mix; 

// console.log(a,b,c);
//Afficher le changement des variables

//2

// let a = 1; //-> 2
// let b = 2; //-> 3
// let c = 3; //-> 4
// let d = 4; //-> 1

// let mixDeux = a;
// a = b;
// b = c;
// c = d;
// d = mixDeux;

// console.log(a,b,c,d);

//Afficher le changement des variables


//3
//Afficher 4, 3, 2, 1 avec une variable temporaire

// let tableau = [1, 2, 3, 4];

// let temp = tableau[0];

// tableau[0] = tableau[3];
// tableau[3] = temp

// temp = tableau[1];

// tableau[1] = tableau[2];
// tableau[2] = temp;

// console.log(tableau)

//Exo 4

let a = 1 //-> 4 d
let b = 2 //-> 5 e
let c = 3 //-> 1 a 
let d = 4 //-> 2 b
let e = 5 //-> 6 f
let f = 6 //-> 3 c

let temp = d;
d = b;
b = e;
e = f;
f = c;
c = a;
a = temp;


console.log(a,b,c,d,e,f);

    // - ## Afficher le changement des variables
