"use strict"

// console.log('Ovo je nas prvi cas!',2);



// // prosti!
// var ovoJeNumber = 23;
// var ovoJeBoolean = true;
// var ovoJeString = "Vekjko Sedi Pored Mervana"
// var ovoJeUndefined = undefined;
// var ovoJeNull = null;
// // Number,
// // Boolean,
// // String,
// // undefined,
// // null

// let brojdeset = 10;
// brojdeset = 12;
// brojdeset = "dwadwa";


// // slozeni

// var ovoJeArray = [2,"[]",true,"false",ovoJeString];
// // Array,
// // Object,
// // Function



// var osoba = {
//     ime:"Mervan",
//     prezume: "Zejenlovic",
//     godine:15
// }



// function test(e){
// console.log(e)
// }

// test(2)


// var praznastting = ["t","e","s","t"]
// var test = 'test'
// var ovojenull = null;
// console.log(typeof test);
// var auKemale = "2";
// test = 2;




// let dodeliVrednost = 23;


// let plus = 2 + 2;
// let minus = 2-2;
// let mnozenje = 2*2;
// let deljenje = 2/2;
// let number = 2;
// let string = "2";


// let test1 =false || (number == string);

// console.log(!test1);

// let test2 = 2 <= 2;


// console.log(test2)




// let kemal = 150;

// const cokolada = 120;



// console.log(kemal >= cokolada);
// kemal = kemal - cokolada;
// console.log(kemal >= cokolada);
// console.log(kemal)

// let mojNovcanik = 100;

// const kafa = 10;
// const sok = 20;
// const cigare = 250;





// let kemal = prompt("Koliko ce kemal da ima para....");
// const staZelisKupiti = prompt("Mozes kupiti 1.cokolada , 2.cigare, 3.sok").toLowerCase();
// console.log(typeof kemal, "gore typeof od kemal")

// const sok = 60;
// const cokolada = 40;
// const cigare = 480;

// switch(staZelisKupiti){
//     case "cokolada":
//         if(kemal >= cokolada){
//             kemal = kemal - cokolada;
//             console.log(`Kupio si ${staZelisKupiti}, i ostalo ti je ${kemal}`)
//             console.log(typeof kemal,"typeof od kemal")
//         }
//         else{
//             console.log("Nemas dovoljno para....")
//         }
//         break;
//     case "cigare":
//         if(kemal >= cigare){
//             kemal = kemal - cigare;
//             console.log(`Kupio si ${staZelisKupiti}, i ostalo ti je ${kemal}`)
//         }else {
//             console.log("Nemas dovoljno para....")
//         }
//         break;
//     case "sok":
//         if(kemal >= sok){
//             kemal = kemal - sok;
//             console.log(`Kupio si ${staZelisKupiti}, i ostalo ti je ${kemal}`)
//         }else {
//             console.log("Nemas dovoljno para....")
//         }
//         break;
//     default:
//         console.log("Odustao si nisi hteo da kupis nista...")
// }




// if(true && true){
//     console.log("uslov ispunjen")
// }
// else{
//     console.log("uslov nije ispunjen")
// }



// domaci jeste da korisnika pitate koliko zeli novca da ima
// napraviti takodje store gde mozete kupiti odredjenje artikle
//ako korisnik uneste neki od ponudjenih onda se provera da li korisnik ima novca dovljno za to ako nema pitamo korisnika
// da li zeli da se uzajmi i vi korisniku pozajmite onoliko koliko on unese



//  1 > 2 proverava je l 1 vece od 2 output: false
// 1 < 2 proverava je l 1 manje od 2 output: true
// 2 == 2 proverava je l 2 jednako 2 otput: true
// 2 === "2" proverava i tip i vrednost otput je ??? : false
// && i leva i desna strana moraju da su tacne
// || jedna strana mora da je true
//  !flase je negacija od false a to je true!
// 1 != 2 je l jenda razlicito od 2 ??? otput je ??? true
// 1 !== "2" proverava i tip 



// let novac = 150;

// const cokolada = 151;
// const cips = 60;
// const nargila = 500;


// const staZelisKupiti = prompt("Zdravo mi imamo 1.cokoladu, 2.cips, 3.nargilu sta zelis kuppiti od ponudjenog?")
// switch(staZelisKupiti){
//     case "1":
//         if(cokolada <= novac){
//             novac -= cokolada;
//             console.log(`Kupio si cokoladu hvala prijatno evo ti kusur, ${novac}`)
//         }
//         else{
//             console.log("nemate dovoljno novca da li zelite da vas upisem na recku!")
//             let zajam = prompt("Da ili Ne?").toLowerCase();
//             if(zajam == 'da'){
//                 let dug = Number(prompt("Unesite koliko zelite novca!"))
//                 if(!isNaN(dug)){
//                     novac +=  dug
//                     novac -= cokolada;
//                     console.log(`Kupio si cokoladu i ostalo ti je ${novac}, i ostao si mi duzan ? ${dug}`)
//                 }
//                 else{
//                     console.log("Zao mi je ne mogu ti pozajmiti text!")
//                 }
//             }else{
//                 console.log("Nema veze skupices ti to!")
//             }
//         }
//         break;
//     case "2":
//         break;
//     case "3":
//         break;
//     default:
//         console.log("Doso si samo da gledas, nista nisi kupio..")
//         break;
    
// }



// const broj = prompt("Unesi broj za proveru ")

// if(!isNaN(broj)){
//     if(broj == 0){
//         console.log("Broj je neutralan ili je nulica")
//     }else{
//         if(broj % 2 == 0){
//             console.log("broj je paran")
//         }
//         else{
//             console.log("broj je naparan!")
//         }
//     }
// }
// else{
//     console.log('Morate da unesete broj :)')
// }



// switch("1"){
//     case "1":
//         console.log(1)
//     case "2":
//         console.log(2)
//     case "3":
//         console.log(3);
//     default:
//         console.log("4")
// }



// const nekiBrojKojiCemoDaPosaljemo = 10;
// const nekiDrBr = 13;
// const nekiDrBrTr= 15;

// if(nekiBrojKojiCemoDaPosaljemo % 5 == 0 && nekiBrojKojiCemoDaPosaljemo % 3 == 0){
//     console.log("fizzBuzz")
// }else if(nekiBrojKojiCemoDaPosaljemo % 3 == 0){
//     console.log("fiz")
// }else if(nekiBrojKojiCemoDaPosaljemo % 5 ==0){
//     console.log('buzz')
// }else if(isNaN(nekiBrojKojiCemoDaPosaljemo)){
//  console.log("niste uneli broj")   
// }
// else {
//     console.log("broj nije deljiv ni sa 3 ni sa 5")
// }


// if(nekiDrBr % 5 == 0 && nekiDrBr % 3 == 0){
//     console.log("fizzBuzz")
// }else if(nekiDrBr % 3 == 0){
//     console.log("fiz")
// }else if(nekiDrBr % 5 ==0){
//     console.log('buzz')
// }else if(isNaN(nekiDrBr)){
//  console.log("niste uneli broj")   
// }
// else {
//     console.log("broj nije deljiv ni sa 3 ni sa 5")
// }


// if(nekiDrBrTr % 5 == 0 && nekiDrBrTr % 3 == 0){
//     console.log("fizzBuzz")
// }else if(nekiDrBrTr % 3 == 0){
//     console.log("fiz")
// }else if(nekiDrBrTr % 5 ==0){
//     console.log('buzz')
// }else if(isNaN(nekiDrBrTr)){
//  console.log("niste uneli broj")   
// }
// else {
//     console.log("broj nije deljiv ni sa 3 ni sa 5")
// }


// function jeLiBrojFizBuzzIliSamoJedno(mojBroj){
//     console.log(`rec je o borju ${mojBroj}`)
//     if(mojBroj % 5 == 0 && mojBroj % 3 == 0){
//         console.log("fizzBuzz")
//     }else if(mojBroj % 3 == 0){
//         console.log("fiz")
//     }else if(mojBroj % 5 ==0){
//         console.log('buzz')
//     }else if(isNaN(mojBroj)){
//      console.log("niste uneli broj")   
//     }
//     else {
//         console.log("broj nije deljiv ni sa 3 ni sa 5")
//     }
// }



// jeLiBrojFizBuzzIliSamoJedno(prompt("Unesi broj prvi"))
// jeLiBrojFizBuzzIliSamoJedno(prompt("Unesi broj prvi"))
// jeLiBrojFizBuzzIliSamoJedno(prompt("Unesi broj prvi"))






// function kalkulator(brojA,brojB,operacija){
//     if(operacija == "+"){
//         let sum = brojA + brojB
//         console.log(`${brojA} + ${brojB} = ${sum}`)
//     }
//     else if(operacija == "-"){
//         let razlika = brojA - brojB
//         console.log(`${brojA} - ${brojB} = ${razlika}`)
//     }
//     else {
//         console.log(`Niste uneli ispravnu operacij!`)
//     }
// }
// function jelKorisnikUneoBroj(kojiBr){
//     let broj;
//     while(isNaN(broj)){
//         broj = Number(prompt(`Unesite broj ${kojiBr}`))
//         console.log(broj)
//     }
//     return broj;

// }


// let brojA,brojB


// brojA = jelKorisnikUneoBroj("a")
// brojB = jelKorisnikUneoBroj("b")

// let operacija;



// while(operacija !== "+" && operacija !== "-" && operacija !== "/" && operacija !== "*"){
//     operacija = prompt("Unesite neku operaciju od ponudjenih : +, -,/,* ")
// }

// kalkulator(brojA,brojB,operacija)


// napraviti funkciju koja prima kao arg string nakon toga ta funkcija pokusava da obradi taj string u nabuer i nakon toga vraca taj 
// namer vi vrednost te fun cuvate u var i nakon toga console log proverite tip te var
// ako ne mozete da konvertujete to u number vi vratiet string + nisam mogao da se konvertujem.... :D

// let test = 2;

// console.log(test)

// test = 23;

// console.log(test)

// console.log(test - test)


// test = 0;

// console.log(1)


// console.log(typeof test)








// let unos1 =pretvarac("")
// let unos2 =pretvarac("23")
// let unos3 =pretvarac("dwadwa")
// let unos4 =pretvarac(23)


// console.log(Number("a" !== "a"))



function pretvarac(unos){
    if(typeof unos == 'string' && unos == ""){
        return unos + "Bio sam prazan"
    }
    else if(isNaN(Number(unos))){
        return unos + "Nisam mogao da se pretvorim..."
    }
    else {
        return Number(unos)
    }
}


// console.log(unos1,unos2,unos3,unos4)

// let faris = 23

// const ime = "12" - faris

// console.log(ime)



// const arr = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6];


// let res = 0;


// let counter = arr.length - 1;
// while(counter >= 0){
//     if(arr[counter] % 2 == 0){
//         res = res + arr[counter]
//     }
//     counter--;
// }


// console.log(res)


// let parni = 0;
// let neparni = 0;
// const arr = [1,2,3,4,5,6,712,23,12,323,5]
// let counter = arr.length -1;
// while(counter >= 0){
//     if(arr[counter] % 2 == 0){
//         parni = parni+arr[counter]
//     }
//     else {
//         neparni = neparni+arr[counter]
//     }
//     counter--;
// }

// console.log(parni,"ovo su parni",neparni,"ovo su neparni..")



// const arrTest = [1,2,3,4,5,6,7,8,9,10,11,12]




// let start = 0
// let end = arrTest.length -1
// let newArr = [];


// while(start < arrTest.length /2){
//     newArr.push(arrTest[start] + arrTest[end])
//     start++;
//     end--;
// }


// let brojac1 = 0;
// let brojac2 = 0;
// let brojac3 = 0;

// console.log(brojac1,brojac2,brojac3)


// let prom = prompt("unesite text")


// da napravite funckiju koja proverava je l promt palindrom


// 121
// 11211
// ana
// gereg
// kemal

// console.log(newArr)
// Sad u novi Arr treba da smestite sumu prvi parni i poslednji neparni i sve tako u krug .... 


// [ 2, 4, 6, 8, 10, 12 ] parni
// [ 1, 3, 5, 7, 9, 11 ] neparni
//rezultat treb  da bude [13,13,13,13,13,13]

// const text = "aattaa"
// let newText = ""



// for (let i = text.length-1; i >= 0; i--) {
//  newText= newText+text[i];
// }



// if(newText === text){
//     console.log("ovo je palindrom")
// }
// else {
//     console.log("ovo nije palindrom")
// }


// for (let i = 0,j = text.length -1; i < text.length /2; i++,j--) {
//     if(text[i] !== text[j]){
//         console.log("ovo nije palindrom!")
//     }
// }




// ovo su podaci iz baze

// const username = "faris"
// const password = "faris123"
// let unosUsername = ""
// let unosPassword = ""




// while(username !== unosUsername){
//      unosUsername = prompt("Unesite username")
//      if(unosUsername !== username){
//         alert("Pogresili ste username ili password")
//      }
// }

// while(password !== unosPassword){
//      unosPassword = prompt("Unesite password")
//      if(unosPassword !== password){
//         alert("Pogresili ste username ili password")
//      }
// }

// alert("Uspesno ste se ulogovali")


// window.location.replace("/home/dzelal/Desktop/dzelal-public/IT-CAMP-SEP/flex.html")


// const arr = [1,2,3,4,5,6,7]
// const arr2 = [1,3,3,5,6,7,8]


// // 7,6,5,4,3,2,1
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === arr2[i]){
//         newArr.push(arr[i])
//     }
// 


const arrDiagonala = [[1,2,3],[4,5,6],[7,8,9]]

// treba da se ispise 1,5,9

const arr2 = [[1,2,3],[1,2,3],[1,2,3]];
const newArr =[]
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
        newArr.push(arr2[i][j])
    }
}


console.log(newArr);

// console.log(newArr);

// Iterirate for petljom tako da proveravate da li se na trenutom brojacu od arr1 i arr2 
// nalaze isit brojevi ako se nalaze onda ih pusate u novi arr

 



