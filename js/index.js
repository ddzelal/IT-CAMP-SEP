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


function jeLiBrojFizBuzzIliSamoJedno(mojBroj){
    console.log(`rec je o borju ${mojBroj}`)
    if(mojBroj % 5 == 0 && mojBroj % 3 == 0){
        console.log("fizzBuzz")
    }else if(mojBroj % 3 == 0){
        console.log("fiz")
    }else if(mojBroj % 5 ==0){
        console.log('buzz')
    }else if(isNaN(mojBroj)){
     console.log("niste uneli broj")   
    }
    else {
        console.log("broj nije deljiv ni sa 3 ni sa 5")
    }
}



jeLiBrojFizBuzzIliSamoJedno(prompt("Unesi broj prvi"))
jeLiBrojFizBuzzIliSamoJedno(prompt("Unesi broj prvi"))
jeLiBrojFizBuzzIliSamoJedno(prompt("Unesi broj prvi"))
