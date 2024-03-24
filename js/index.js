"use strict"

// // console.log('Ovo je nas prvi cas!',2);



// // // prosti!
// // var ovoJeNumber = 23;
// // var ovoJeBoolean = true;
// // var ovoJeString = "Vekjko Sedi Pored Mervana"
// // var ovoJeUndefined = undefined;
// // var ovoJeNull = null;
// // // Number,
// // // Boolean,
// // // String,
// // // undefined,
// // // null

// // let brojdeset = 10;
// // brojdeset = 12;
// // brojdeset = "dwadwa";


// // // slozeni

// // var ovoJeArray = [2,"[]",true,"false",ovoJeString];
// // // Array,
// // // Object,
// // // Function



// // var osoba = {
// //     ime:"Mervan",
// //     prezume: "Zejenlovic",
// //     godine:15
// // }



// // function test(e){
// // console.log(e)
// // }

// // test(2)


// // var praznastting = ["t","e","s","t"]
// // var test = 'test'
// // var ovojenull = null;
// // console.log(typeof test);
// // var auKemale = "2";
// // test = 2;




// // let dodeliVrednost = 23;


// // let plus = 2 + 2;
// // let minus = 2-2;
// // let mnozenje = 2*2;
// // let deljenje = 2/2;
// // let number = 2;
// // let string = "2";


// // let test1 =false || (number == string);

// // console.log(!test1);

// // let test2 = 2 <= 2;


// // console.log(test2)




// // let kemal = 150;

// // const cokolada = 120;



// // console.log(kemal >= cokolada);
// // kemal = kemal - cokolada;
// // console.log(kemal >= cokolada);
// // console.log(kemal)

// // let mojNovcanik = 100;

// // const kafa = 10;
// // const sok = 20;
// // const cigare = 250;





// // let kemal = prompt("Koliko ce kemal da ima para....");
// // const staZelisKupiti = prompt("Mozes kupiti 1.cokolada , 2.cigare, 3.sok").toLowerCase();
// // console.log(typeof kemal, "gore typeof od kemal")

// // const sok = 60;
// // const cokolada = 40;
// // const cigare = 480;

// // switch(staZelisKupiti){
// //     case "cokolada":
// //         if(kemal >= cokolada){
// //             kemal = kemal - cokolada;
// //             console.log(`Kupio si ${staZelisKupiti}, i ostalo ti je ${kemal}`)
// //             console.log(typeof kemal,"typeof od kemal")
// //         }
// //         else{
// //             console.log("Nemas dovoljno para....")
// //         }
// //         break;
// //     case "cigare":
// //         if(kemal >= cigare){
// //             kemal = kemal - cigare;
// //             console.log(`Kupio si ${staZelisKupiti}, i ostalo ti je ${kemal}`)
// //         }else {
// //             console.log("Nemas dovoljno para....")
// //         }
// //         break;
// //     case "sok":
// //         if(kemal >= sok){
// //             kemal = kemal - sok;
// //             console.log(`Kupio si ${staZelisKupiti}, i ostalo ti je ${kemal}`)
// //         }else {
// //             console.log("Nemas dovoljno para....")
// //         }
// //         break;
// //     default:
// //         console.log("Odustao si nisi hteo da kupis nista...")
// // }




// // if(true && true){
// //     console.log("uslov ispunjen")
// // }
// // else{
// //     console.log("uslov nije ispunjen")
// // }



// // domaci jeste da korisnika pitate koliko zeli novca da ima
// // napraviti takodje store gde mozete kupiti odredjenje artikle
// //ako korisnik uneste neki od ponudjenih onda se provera da li korisnik ima novca dovljno za to ako nema pitamo korisnika
// // da li zeli da se uzajmi i vi korisniku pozajmite onoliko koliko on unese



// //  1 > 2 proverava je l 1 vece od 2 output: false
// // 1 < 2 proverava je l 1 manje od 2 output: true
// // 2 == 2 proverava je l 2 jednako 2 otput: true
// // 2 === "2" proverava i tip i vrednost otput je ??? : false
// // && i leva i desna strana moraju da su tacne
// // || jedna strana mora da je true
// //  !flase je negacija od false a to je true!
// // 1 != 2 je l jenda razlicito od 2 ??? otput je ??? true
// // 1 !== "2" proverava i tip 



// // let novac = 150;

// // const cokolada = 151;
// // const cips = 60;
// // const nargila = 500;


// // const staZelisKupiti = prompt("Zdravo mi imamo 1.cokoladu, 2.cips, 3.nargilu sta zelis kuppiti od ponudjenog?")
// // switch(staZelisKupiti){
// //     case "1":
// //         if(cokolada <= novac){
// //             novac -= cokolada;
// //             console.log(`Kupio si cokoladu hvala prijatno evo ti kusur, ${novac}`)
// //         }
// //         else{
// //             console.log("nemate dovoljno novca da li zelite da vas upisem na recku!")
// //             let zajam = prompt("Da ili Ne?").toLowerCase();
// //             if(zajam == 'da'){
// //                 let dug = Number(prompt("Unesite koliko zelite novca!"))
// //                 if(!isNaN(dug)){
// //                     novac +=  dug
// //                     novac -= cokolada;
// //                     console.log(`Kupio si cokoladu i ostalo ti je ${novac}, i ostao si mi duzan ? ${dug}`)
// //                 }
// //                 else{
// //                     console.log("Zao mi je ne mogu ti pozajmiti text!")
// //                 }
// //             }else{
// //                 console.log("Nema veze skupices ti to!")
// //             }
// //         }
// //         break;
// //     case "2":
// //         break;
// //     case "3":
// //         break;
// //     default:
// //         console.log("Doso si samo da gledas, nista nisi kupio..")
// //         break;
    
// // }



// // const broj = prompt("Unesi broj za proveru ")

// // if(!isNaN(broj)){
// //     if(broj == 0){
// //         console.log("Broj je neutralan ili je nulica")
// //     }else{
// //         if(broj % 2 == 0){
// //             console.log("broj je paran")
// //         }
// //         else{
// //             console.log("broj je naparan!")
// //         }
// //     }
// // }
// // else{
// //     console.log('Morate da unesete broj :)')
// // }



// // switch("1"){
// //     case "1":
// //         console.log(1)
// //     case "2":
// //         console.log(2)
// //     case "3":
// //         console.log(3);
// //     default:
// //         console.log("4")
// // }



// // const nekiBrojKojiCemoDaPosaljemo = 10;
// // const nekiDrBr = 13;
// // const nekiDrBrTr= 15;

// // if(nekiBrojKojiCemoDaPosaljemo % 5 == 0 && nekiBrojKojiCemoDaPosaljemo % 3 == 0){
// //     console.log("fizzBuzz")
// // }else if(nekiBrojKojiCemoDaPosaljemo % 3 == 0){
// //     console.log("fiz")
// // }else if(nekiBrojKojiCemoDaPosaljemo % 5 ==0){
// //     console.log('buzz')
// // }else if(isNaN(nekiBrojKojiCemoDaPosaljemo)){
// //  console.log("niste uneli broj")   
// // }
// // else {
// //     console.log("broj nije deljiv ni sa 3 ni sa 5")
// // }


// // if(nekiDrBr % 5 == 0 && nekiDrBr % 3 == 0){
// //     console.log("fizzBuzz")
// // }else if(nekiDrBr % 3 == 0){
// //     console.log("fiz")
// // }else if(nekiDrBr % 5 ==0){
// //     console.log('buzz')
// // }else if(isNaN(nekiDrBr)){
// //  console.log("niste uneli broj")   
// // }
// // else {
// //     console.log("broj nije deljiv ni sa 3 ni sa 5")
// // }


// // if(nekiDrBrTr % 5 == 0 && nekiDrBrTr % 3 == 0){
// //     console.log("fizzBuzz")
// // }else if(nekiDrBrTr % 3 == 0){
// //     console.log("fiz")
// // }else if(nekiDrBrTr % 5 ==0){
// //     console.log('buzz')
// // }else if(isNaN(nekiDrBrTr)){
// //  console.log("niste uneli broj")   
// // }
// // else {
// //     console.log("broj nije deljiv ni sa 3 ni sa 5")
// // }


// // function jeLiBrojFizBuzzIliSamoJedno(mojBroj){
// //     console.log(`rec je o borju ${mojBroj}`)
// //     if(mojBroj % 5 == 0 && mojBroj % 3 == 0){
// //         console.log("fizzBuzz")
// //     }else if(mojBroj % 3 == 0){
// //         console.log("fiz")
// //     }else if(mojBroj % 5 ==0){
// //         console.log('buzz')
// //     }else if(isNaN(mojBroj)){
// //      console.log("niste uneli broj")   
// //     }
// //     else {
// //         console.log("broj nije deljiv ni sa 3 ni sa 5")
// //     }
// // }



// // jeLiBrojFizBuzzIliSamoJedno(prompt("Unesi broj prvi"))
// // jeLiBrojFizBuzzIliSamoJedno(prompt("Unesi broj prvi"))
// // jeLiBrojFizBuzzIliSamoJedno(prompt("Unesi broj prvi"))






// // function kalkulator(brojA,brojB,operacija){
// //     if(operacija == "+"){
// //         let sum = brojA + brojB
// //         console.log(`${brojA} + ${brojB} = ${sum}`)
// //     }
// //     else if(operacija == "-"){
// //         let razlika = brojA - brojB
// //         console.log(`${brojA} - ${brojB} = ${razlika}`)
// //     }
// //     else {
// //         console.log(`Niste uneli ispravnu operacij!`)
// //     }
// // }
// // function jelKorisnikUneoBroj(kojiBr){
// //     let broj;
// //     while(isNaN(broj)){
// //         broj = Number(prompt(`Unesite broj ${kojiBr}`))
// //         console.log(broj)
// //     }
// //     return broj;

// // }


// // let brojA,brojB


// // brojA = jelKorisnikUneoBroj("a")
// // brojB = jelKorisnikUneoBroj("b")

// // let operacija;



// // while(operacija !== "+" && operacija !== "-" && operacija !== "/" && operacija !== "*"){
// //     operacija = prompt("Unesite neku operaciju od ponudjenih : +, -,/,* ")
// // }

// // kalkulator(brojA,brojB,operacija)


// // napraviti funkciju koja prima kao arg string nakon toga ta funkcija pokusava da obradi taj string u nabuer i nakon toga vraca taj 
// // namer vi vrednost te fun cuvate u var i nakon toga console log proverite tip te var
// // ako ne mozete da konvertujete to u number vi vratiet string + nisam mogao da se konvertujem.... :D

// // let test = 2;

// // console.log(test)

// // test = 23;

// // console.log(test)

// // console.log(test - test)


// // test = 0;

// // console.log(1)


// // console.log(typeof test)








// // let unos1 =pretvarac("")
// // let unos2 =pretvarac("23")
// // let unos3 =pretvarac("dwadwa")
// // let unos4 =pretvarac(23)


// // console.log(Number("a" !== "a"))



// function pretvarac(unos){
//     if(typeof unos == 'string' && unos == ""){
//         return unos + "Bio sam prazan"
//     }
//     else if(isNaN(Number(unos))){
//         return unos + "Nisam mogao da se pretvorim..."
//     }
//     else {
//         return Number(unos)
//     }
// }


// // console.log(unos1,unos2,unos3,unos4)

// // let faris = 23

// // const ime = "12" - faris

// // console.log(ime)



// // const arr = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6];


// // let res = 0;


// // let counter = arr.length - 1;
// // while(counter >= 0){
// //     if(arr[counter] % 2 == 0){
// //         res = res + arr[counter]
// //     }
// //     counter--;
// // }


// // console.log(res)


// // let parni = 0;
// // let neparni = 0;
// // const arr = [1,2,3,4,5,6,712,23,12,323,5]
// // let counter = arr.length -1;
// // while(counter >= 0){
// //     if(arr[counter] % 2 == 0){
// //         parni = parni+arr[counter]
// //     }
// //     else {
// //         neparni = neparni+arr[counter]
// //     }
// //     counter--;
// // }

// // console.log(parni,"ovo su parni",neparni,"ovo su neparni..")



// // const arrTest = [1,2,3,4,5,6,7,8,9,10,11,12]




// // let start = 0
// // let end = arrTest.length -1
// // let newArr = [];


// // while(start < arrTest.length /2){
// //     newArr.push(arrTest[start] + arrTest[end])
// //     start++;
// //     end--;
// // }


// // let brojac1 = 0;
// // let brojac2 = 0;
// // let brojac3 = 0;

// // console.log(brojac1,brojac2,brojac3)


// // let prom = prompt("unesite text")


// // da napravite funckiju koja proverava je l promt palindrom


// // 121
// // 11211
// // ana
// // gereg
// // kemal

// // console.log(newArr)
// // Sad u novi Arr treba da smestite sumu prvi parni i poslednji neparni i sve tako u krug .... 


// // [ 2, 4, 6, 8, 10, 12 ] parni
// // [ 1, 3, 5, 7, 9, 11 ] neparni
// //rezultat treb  da bude [13,13,13,13,13,13]

// // const text = "aattaa"
// // let newText = ""



// // for (let i = text.length-1; i >= 0; i--) {
// //  newText= newText+text[i];
// // }



// // if(newText === text){
// //     console.log("ovo je palindrom")
// // }
// // else {
// //     console.log("ovo nije palindrom")
// // }


// // for (let i = 0,j = text.length -1; i < text.length /2; i++,j--) {
// //     if(text[i] !== text[j]){
// //         console.log("ovo nije palindrom!")
// //     }
// // }




// // ovo su podaci iz baze

// // const username = "faris"
// // const password = "faris123"
// // let unosUsername = ""
// // let unosPassword = ""




// // while(username !== unosUsername){
// //      unosUsername = prompt("Unesite username")
// //      if(unosUsername !== username){
// //         alert("Pogresili ste username ili password")
// //      }
// // }

// // while(password !== unosPassword){
// //      unosPassword = prompt("Unesite password")
// //      if(unosPassword !== password){
// //         alert("Pogresili ste username ili password")
// //      }
// // }

// // alert("Uspesno ste se ulogovali")


// // window.location.replace("/home/dzelal/Desktop/dzelal-public/IT-CAMP-SEP/flex.html")


// // const arr = [1,2,3,4,5,6,7]
// // const arr2 = [1,3,3,5,6,7,8]


// // // 7,6,5,4,3,2,1
// // const newArr = [];

// // for (let i = 0; i < arr.length; i++) {
// //     if(arr[i] === arr2[i]){
// //         newArr.push(arr[i])
// //     }
// // 


// const arrDiagonala = [[1,2,3],[4,5,6],[7,8,9]]

// // treba da se ispise 1,5,9

// const arr2 = [[1,2,3],[1,2,3],[1,2,3]];
// const newArr =[]
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr2[i].length; j++) {
//         newArr.push(arr2[i][j])
//     }
// }


// console.log(newArr);

// // console.log(newArr);

// // Iterirate for petljom tako da proveravate da li se na trenutom brojacu od arr1 i arr2 
// // nalaze isit brojevi ako se nalaze onda ih pusate u novi arr

 





// const domaciArr = [[1,2,3],
//                     [4,5,6],
//                     [7,8,9]]
// const noviDomaciArr=[]
// for (let i = domaciArr.length-1,j=0; i >= 0; i--,j++) {
//     noviDomaciArr.push(domaciArr[j][i])
// }



// console.log(noviDomaciArr);




// // imma arr.push(el) ubacuje el na poslednje mesto
// // imamo arr.pop() izbacije poslednji element
// // imamo arr.shift() on nam izbacuje prvi el iz niza
// // imamo arr.unshift(el) da ubacimo el na pocetak niza

// const test = "ime-prezime";
// let ime = ""
// let prezime = ""
// let pomocnaVar = false;


// for (let i = 0; i < test.length; i++) {
//     if(test[i] === '-'){
//         pomocnaVar = true;
//         continue;
//     }
//     if(pomocnaVar === false) {
//         ime+=test[i]
//     }
//     if(pomocnaVar === true){
//         prezime+= test[i]
//     }
// }




// for (let i = 0; i <= 4; i++) {
//     if(i === 2){
//         continue;
//     }
//     console.log(i);
// }


// console.log(ime,prezime);





// // Na primer korisnik unese broj n
// //  vi na osnovu tog broja n treba da uradite spratove zvezdica
// // pa na primer ako korisnik unese broj 3 
// // onda vas output treba da bude 

// // *
// // **
// // *** 

// const unos = 3;
// const noviNiz =[];
// for (let i = 0; i < unos; i++) {
//     let biloSta = "";
//     for (let j = 0; j <= i; j++) {
//         biloSta+='*'     
//     }    
//     noviNiz.push(biloSta)
// }



// // OVako za domaci
// //     *
// //    ***
// //   *****
// console.log(noviNiz.join("\n"));

// const nest = noviNiz.join('\n')

// console.log(nest);



// // NPR


// const arr = [1,2,3,4,5,6,7,8,9]
// // zelim da mi je output 1-2-3-4-5-6-7-8-9-9

// const nesto = arr.join("-")

// console.log(nesto);

// const bezCrtica = nesto.split("-")

// console.log(bezCrtica);



// console.log(arr.includes(10));





// const arr1 = [1,2,3,4,5,6,7,8,9]
// const arr3 = [2,2,3,1,5,6,7,21,5,76,8,9]


// const arr4 = [];





// const nekiArrOdBrojeva = [1,2,3,4,5,6,7,8,9]


// console.log(nekiArrOdBrojeva.includes(1));

// // Nama treba string takav da izmedju svakog elementa mi imamo crticu -
// // output bi trebao biti 1-2-3-4-5-6-7-8-9


// const toStoNamTreba = nekiArrOdBrojeva.join("\n")


// console.log(toStoNamTreba);

// const boljiPrimer = "ime-prezime"

// const bezCrtice = boljiPrimer.split("-")

// console.log(bezCrtica);



// const testString = "Ana voli milovana"

// const testNoviString = testString.replace("voli","ne voli")

// console.log(testNoviString);



// const ahmed = "ahmed nije dolazio par dana"
// const ahmedjeste = ahmed.replace("nije dolazio","dolazio je")
// const paragraph = "I think Ruth's dog is cuter than your dog!";




// const niz = [1,2,3,4,5,6,7,8,9]

// const testNiz = niz.join("").replace("2","3").split("").map((el) => Number(el))





// const bekir = "Bekir je dolazio svaki dan na casove"

// const davidmo = bekir.replace("je","nije")



// const proba = "23233412313131test"

// const proba2 = proba.replace("2","nije dolazio ")

// console.log(proba2);

// console.log(davidmo);

// const kemalGreskaUKoracima = "Kemal je pogodio odgovor"

// const daVdimo = kemalGreskaUKoracima.replace("pogodio","nije pogodio")

// console.log(daVdimo);

// const dajemPrimer = [1,2,2,4,5,6,7,8,2,10]

// const sergej = "sergej je dosao na vreme"
// const isSergej = sergej.replace("je","nije")
// console.log(isSergej);

// console.log(dajemPrimer.lastIndexOf(2))

// for (let i = 0; i < dajemPrimer.length; i++) {
//     dajemPrimer[i] = String(dajemPrimer[i] * dajemPrimer[i])    
// }

// const zadatakZadaca = [12,32,32,321,213,3213,1313131,313131]

// const  bucanResenje = zadatakZadaca.map( (el,i,arr) => {
//     if(i === 0){
//        return el;
//     }
//     else {
//         if(el % 2 === 0){
//             return el-arr[i-1]
//         }
//         else  {
//             return el
//         }    }
// })

// console.log(bucanResenje);

// const t = ""


// function sumTwoNum (a,b){
//     return a+b
// }


// sumTwoNum(1,2)


// const test1 = zadatakZadaca.map((el,index,arr)=>{
//     console.log(arr);
//     if(index % 2 === 0){
//         return el +1
//     }
//     else {
//         return el;
//     }
// })


// console.log(test1,"test");

// const vasZadatakJeste = [1,2,3,4,5,6,7,8,9,10]

// const saStrelicama = vasZadatakJeste.map((el) => {
// if(el % 2 === 0){
//    return el -1
// }
// else {
//    return el +1
// }
// })

// console.log(saStrelicama);

// saStrelicama.forEach((el,i,arr)=>{

// })



// function ispisiIme(ime){
//    return ime
// }


// function reciCao(fun,ime){

//     const ime1 = fun(ime)
//     console.log("cao" + ime1);
//     return 0;
// }

// console.log(reciCao(ispisiIme,"dzelal"));

// function ovaDruga(){
//     console.log("CAOO!!!");
// }

// function reciCao(drugaFunkcijaKojaCeDaSeIzvrisi){
//     drugaFunkcijaKojaCeDaSeIzvrisi();
//     return "faris"
// }

// console.log(reciCao(ovaDruga));

// function myCustomMap(){
// }
// const br1 = 1;
// const br2 = 3
// let operator = "/2";

// // console.log(eval(`${br1} ${operator} ${br2}`));

// // console.log(operator.charAt(1));
// // console.log(operator.charCodeAt());

// const kemal = [1,2,3,4,5,67,8,9,0,10,12,32,14]
// const veljko = [2,3,4,5,6,7,8,12,32]

// let kemalVeljko =[];

// // NEMA OVOGA!
// kemalVeljko = kemal.concat(veljko)

// console.log(kemalVeljko);

// const testArr = ["2","2","3"] - ["2","23"]

// console.log(testArr);


// function customMap(arr){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] + 1)
//     }
//     return newArr;
// }

// const svi = [1,2,3421,321321,321321,12,21312312]

// const samoNeparni = [];

// // for (let I = 0; I < svi.length; I++) {
// //     if(svi[I] % 2 !== 0) samoNeparni.push(svi[I])    
// // }

// // console.log(samoNeparni);

// // NESTO NOVO!>>>>
// const samoNeparniSaFilter = svi.filter((el) => el & 1)
// // NESTO NOVO2! >>>>
// const drugiPrimer = svi.filter((el) => el % 2 !== 0)

// console.log(samoNeparniSaFilter);

// console.log(drugiPrimer.includes(false));

// const bazaPodataka = ["Ahmed","Silvester","Veljko","Nerma","Faris","Mervan","Sergejbit"]

// const sergejBezBit = "";

// bazaPodataka.forEach((el)=>{
//     console.log(el);
// })


// const dajmePrimerZaSergejBit = "Sergejbit"

// console.log(funkcijaKojaNazivaCao());

// function funkcijaKojaNazivaCao(){
//     console.log("cao!!! ahmede!!");
//     return "dada"    
// }


// // console.log(test23);
// // console.log(test24);
// console.log(test25);


// var test25 = 43;
// let test24 = 32;
// const test23 = 32;

// console.log(test25);

// arr1.forEach(()=>{
// })

// for(let i = 0; i < 10; i++) {
// }



// const imateImamo = [[[123],[2323]],[[323],[32323]]]

// const faris = imateImamo.flat(2).some((el) => el > 2)


// // treba da bude [1,2,3,32,23232,323232]
// // imate 3 min + 1 + 2 + 40sec

// console.log(typeof null);
// let mojAhmedovArr = [];


// for (let i = 0; i < imateImamo.length; i++) {
//     for (let j = 0; j < imateImamo[i].length; j++) {
//             mojAhmedovArr.push(imateImamo[i][j])    
            
//     }
// }



// const flex = imateImamo.flat(2)
// console.log(flex);

// const testSome = [1,2323,32323,3232,23]


// console.log(testSome.some((el) => el >2));



// {
//     {
//         const kemal123 = "1232131"
//         var test12 = "testse"
//         {

//             console.log(kemal123);
//         }
//     }
// }

// console.log(test12);

// const nadijaBilaNaKop = [1,2,3,4,5,6,7,8,9]

// let sumNadIIIIJJJJa = 0;
// for (let i = 0; i < nadijaBilaNaKop.length; i++) {
//     sumNadIIIIJJJJa+= nadijaBilaNaKop[i]
// }


// console.log(sumNadIIIIJJJJa);

// let kracaNadiiijjjja = 0;

// nadijaBilaNaKop.forEach((el)=>{
//     kracaNadiiijjjja+=el;
// })

// console.log(kracaNadiiijjjja);




// const ucenici = [["Kemal","Skrijelj",18,"SVE"],["Ahmed","JereRaslja",16,"Drugari"]]

// console.log(ucenici[0]);



// const kemal2 = {
//     ime:"Kemal",
//     prezime: "Skrijelj",
//     godine:18,
//     hobi:["kosarka","ispijanje kafe","programiranje"],
//     lokacija:{
//         grad:"Novi Zarpa",
//         drzava:"Srbija"
//     },
//     bilosta : () => {
//         const test = {
//             t:"test"
//         }

//         console.log(test.t);
//         return t;
//     }
// }

// console.log(kemal2.bilosta(),"test!");



// let test321 = "t"

// console.log(test321);

// test321 = "23"

// console.log(test23);

// console.log(kemal2);





// const osoba = {
//     ime:"",
//     prezime:"",
//     godine:0,
//     grad:"",
//     hobi:[]
// }

// while(osoba.ime.length < 1){
//     osoba.ime = prompt("unesite vase ime")
// }

// while(osoba.prezime < 1){
//     osoba.prezime = prompt("unesite vase prezime")
// }

// while(osoba.godine > 0){
//     osoba.godine = Number(prompt("Unesite vase godine"))
// }

// osoba.grad = prompt("Unesite vas grad")

// let brojac = 1;
// let jos = true


// while(osoba.hobi.length < 1 || jos){
//     let hobi = prompt(`uensite vas hobi br ${brojac} `)
//     osoba.hobi.push(hobi)
//     let hocesJos = prompt("da li zelis da dodas jos hobia, DA/NE")
//     if(hocesJos.toLocaleLowerCase() == "ne"){
//         jos = false
//     }
//     brojac++;
// }


// console.log(osoba,"osoba!");





// const kreiraniUser = {
//     korisnicko_ime:"",
//     email:"",
//     sifra:""
// }




// KAKO PROGRAM KRECE VI TREBATE DA KREIRATE USERA.....
// USER TREBA DA IMA
// username,password,email
// Nakon toga treba da se ulogujete sa kreditrencijalima od ovog usera kojeg ste kreirali





// const output = {
// }

// console.log(kreiraniUser.hasOwnProperty('email'));

// const sergejOdeNaKop = new Set(arr)


// const arr = [1,1,2,1,3,3,5]
// arr.forEach((el) => {
//     console.log(output[el]);
//     output[el] = (output[el] || 0) + 1
//     console.log(output);
//     console.log('========================');
// })
    

// console.log(output,"tes!");

// const testThis = () =>{
//     console.log(this);
// }

// (function(){
//     console.log(this);
// })()

// console.log(testThis());

// const kemal = {
//     ime:"Kemal",
//     prezime:"Skrijelj"
// }

// const nerma = {
//     ime:"Nerma",
//     prezime:"Corovic"
// }



// class Zmaj {
//     constructor(brojGlava,brojKrila,boja,ime){
//          this.brojGlava = brojGlava,
//          this.brojKrila = brojKrila,
//          this.boja = boja,
//          this.ime = ime
//     }
//     getInfo(){
//         console.log(this.boja,this.brojGlava);
//     }

// }

// const mervanovZmaj = new Zmaj(3,2,"crvena","meki")
// const farisovZmaj = new Zmaj(2,3,"plava","faxi")

// mervanovZmaj.dada = "dwadwa"

// console.log(mervanovZmaj);
// console.log(farisovZmaj);


// Napravit cllasu osoba koja ce da ima : ime,prezime,godiste i metodu koja vraca vasu staros


// class Kalkulator {
//     static izracunajAiB(a,b){
//         console.log(a+b);
//     }
//     static pomnoziAiB(a,b){
//             console.log(a*b);
//     }
// }

// Kalkulator.izracunajAiB(2,3)
//  class Covek {
//     constructor(ime,prezime,godine){
//         this.ime = ime,
//         this.prezime = prezime,
//         this.godine = godine
//     }

//          ispisImePrezime(){
//         console.log(`Vase ime i prezime jeste:${this.ime} ${this.prezime}`);
//     }
// }

// const ahmed = new Covek("Ahmed","Jerebicanin",13)
// const kemal = new Covek("Kemal","Skrijelj",18)

// Vas zadatak jeste da omogucite da korisnik unosi accounte koliko on zeli 
// minimum 3. Account ce imati username password i email i godine.
// Znaci sve dok korisnik ne klikne necu vise, imace mogucnost da unosi nove i nove accounte
// Na kraju kada korisnik klikne da ne zeli vise, pitate ga ciji info zeli i ako unese 2 prikazace
// mu se info drugog unetog accounta




// let sviKorisnici = []
// let zelimJosKorsnika = true;
// class Covek {
//     constructor(){
//         this.korisnickoIme = prompt("Unesite korisnicko ime")
//         this.lozinka = prompt("Unesite vasu lozinku")
//     }

//     informacijeOKorisniku(){
//         console.log(this.korisnickoIme);
//     }
// }


// let counter = 0 


// while(counter < 3){
//     sviKorisnici.push(new Covek());
//     counter++
// }

// while(zelimJosKorsnika){
//  const daNe =  prompt("da li zelis jos korisnika ?") 
//  if(daNe.toLocaleLowerCase() === 'ne'){
//     zelimJosKorsnika = false
//  }
//  if(zelimJosKorsnika){
//      sviKorisnici.push(new Covek())
//  }
// }

// const index = prompt(`Kojeg korisnika zelis od 1 do ${sviKorisnici.length}`)

// console.log(sviKorisnici[Number(index -1)].informacijeOKorisniku());









// if(!localStorage.getItem("jelKorisnikUlogovan?")){
//     localStorage.setItem("korisnickoime",prompt("unesi korisnicko ime"))
//     localStorage.setItem("sifra",prompt("unesi sifru"))
//     localStorage.setItem('jelKorisnikUlogovan?',true)
// }
// else {
//     alert(`Dobro dosao ${localStorage.getItem("korisnickoime")}`)
// }



// localStorage.setItem('ulogovaniKorsnik','silvester')
// console.log(localStorage.getItem('ulogovaniKorsnik'));
// const osoba = {
//     ime:"dzelal",
//     prezime:"dupjak",
//     godine:25
// }

// Object.entries(osoba).forEach(([key,value])=>{
//     console.log(typeof key,typeof value);
// })



// class Osoba {
//     constructor(ime,prezime,godine){
//         this.ime = ime,
//         this.prezime = prezime,
//         this.godine = godine
//     }
// }



// class Ucenik extends Osoba {
//     constructor(skola,ime,prezime,godine){
//         super(ime,prezime,godine)
//         this.skola = skola
//     }
//     informacije(){
//         console.log(this.godine,this.ime,this.prezime,this.skola);
//     }
// }

// const kemal = new Ucenik("Gimnazija np","Fahmed","Bayern",14)

// kemal.informacije();

// const arr = [1,2,3,4,5,6,7,8,9]
// const test = {imamo:"2",nemamo:2}
// const sum = arr.reduce((prevVal,currVel)=>{
//     console.log(prevVal,"prevVel");
//     return prevVal + currVel
// },10)


// console.log(sum,"sum from reducer");
// let sum2 = 0
// arr.forEach((el)=> sum2+=el)
// console.log(sum2);
// const knjige = [{ime:"knj1",brojStr:200,tip:"roman"},{ime:"knj2",brojStr:220,tip:"istorija"},{ime:"knj2",brojStr:120,tip:"roman"},{ime:"knj2",brojStr:320,tip:"roman"}]

// const sumOfroman = knjige.reduce((prevVel,el)=>{
//     if(el.tip === "roman"){
//         return prevVel + el.brojStr
//     }
//     else {
//         return prevVel;
//     }
// },0)

// console.log(sumOfroman);


// const kemal = {
//     ime:"kema",
//     prezime:"skrijelj",
//     godine:23
// }

// const {ime,...rest} = kemal;


// console.log(rest);



// const terOper = 2 === 2 ? true : false

// const jesamLijaCovek = "covek" == "zena" ? "jesteCovek" : "NijeCovek"


// console.table(terOper);

// // dodati jos jedan propery "prezime"
// const arrObj = [{ime:'ime'},{ime:"ime2"}]



// const arrOdKljuceva=[]
// const arrOdVrednosti =[]

// const test12 ={
//     ime:"test",
//     prezime:"test",
//     godine:12,
//     lokacija:"1321"
// }




// console.log("Kemal ovo ono 1");

// setTimeout(()=>{
//     console.log("Kemal ovo ono 2");
//     setTimeout(()=>{
//         console.log("Kemal ovo ono 3");
//     },0)
// },5000)

// console.log("Kemal ovo no 4" + setTimeout(()=>{
//     console.log("Keaml ovo no 5" + setTimeout(()=>{
//         console.log("Kemal ovo ono 6" + setTimeout(()=>{
//             console.log("kemal ovo no 7" + setTimeout(()=>{},0));
//         },0));
//     }));
// },3600));


// setTimeout(()=>{
// console.log("Kemal ovo no 6");
// },0)


// 1 , 6 , 5, 4 , 2 ,  3




// setTimeout(()=>{
//     console.log(1);
// },1500)


// setTimeout(()=>{
// console.log(2);
// },1499)


// console.log(3);



// const kemal = 2


// try {
//     kemal = 3
// } catch (error) {
//     // console.log(error);    
// }

// console.log("Jesi siguran ?");

// console.log("1");
// setTimeout(()=>{
// console.log("2");
// setTimeout(()=>{
// console.log("3");
// },0)
// },5000)



// const obecanje = new Promise((res,rej)=>{
//    setTimeout(()=>{
//     const result = 0 == false ? true : false
//     if(result){
//         res("Uspesno izvresena funkcija")
//     }
//     else {
//         rej("Neuspensa funcija")
//     }
//    },1000) 
// })


// obecanje.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("no me interese ja se izvrism");
// })






const podaci = [{ime:"Kemal",id:1},{ime:"Veljko",id:2},
                {ime:"Nadia",id:3},{ime:"Sergej",id:4},
                {ime:"Nerma",id:5},{ime:"Ahmed",id:6},
                {ime:"Mervan",id:7},{ime:"Faris",id:8},
                {ime:"Ahmed",id:9},{ime:"Kemal",id:1},{ime:"Veljko",id:2},
                {ime:"Nadia",id:3},{ime:"Sergej",id:4},
                {ime:"Nerma",id:5},{ime:"Ahmed",id:6},
                {ime:"Mervan",id:7},{ime:"Faris",id:8},
                {ime:"Ahmed",id:9},{ime:"Kemal",id:1},{ime:"Veljko",id:2},
                {ime:"Nadia",id:3},{ime:"Sergej",id:4},
                {ime:"Nerma",id:5},{ime:"Ahmed",id:6},
                {ime:"Mervan",id:7},{ime:"Faris",id:8},
                {ime:"Ahmed",id:9},{ime:"Kemal",id:1},{ime:"Veljko",id:2},
                {ime:"Nadia",id:3},{ime:"Sergej",id:4},
                {ime:"Nerma",id:5},{ime:"Ahmed",id:6},
                {ime:"Mervan",id:7},{ime:"Faris",id:8},
                {ime:"Ahmed",id:9},{ime:"Kemal",id:1},{ime:"Veljko",id:2},
                {ime:"Nadia",id:3},{ime:"Sergej",id:4},
                {ime:"Nerma",id:5},{ime:"Ahmed",id:6},
                {ime:"Mervan",id:7},{ime:"Faris",id:8},
                {ime:"Ahmed",id:9}]




console.log(Math.ceil(podaci.length / 2));

console.log(podaci.slice(0,2));


// Ulazimo na nek isajt i sad imam listu usera.....
// Znaci napraviti tako da nam se prikazu maksimalno 2 osobe iz podataka
// Takodje napraviti paginaciju da se od korisnika pita koji ce page okej ?


// TO JE ZA DOMACI

// 2 zadatak => da vratite niz bez duplikata i da izracunate koji se koliko ponavlja 

// 3 zadatak => da vratite niz gde ime pocinje sa "Ah"

//4 zadatak => ako je id ponavlja , setuj neki drugi id koji nije unutar tog  niza




// setInterval(()=>{
//     setTimeout(()=>{
//         console.log("eto me tako to setTimeout");
//     },2000)
//     console.log("eto me tako to");
// },1000)
const container = document.querySelector('.container')

fetch('https://62e57f72de23e26379210498.mockapi.io/v1').then(res =>  res.json()).then(data => {
    let userId = prompt(`Unesite kojeg zelite korisnika od 1 do ${data.length}`)
    fetch(`https://62e57f72de23e26379210498.mockapi.io/v1/${userId}`).then(res => res.json()).then((data)=>{
        container.innerHTML += `<div>
        <p>${data.name}</p>
        <img src=${data.avatar}/>
        </div>`
    })
})




// let counter = 0;

// let content = `<div>
//                  <p>Testiramo nase znanje</p>
//                  <button id="btn">KLIKNI ME start! ${counter}</button>
//                 </div>`


//                 container.innerHTML += content
                

// const btn = document.getElementById("btn")

// btn.addEventListener('click',()=>{
//     btn.style.background = "red"
//     counter++;
//     container.innerHTML += `<div>${counter}</div>`
// })

// const test = document.createElement('span',content).innerText = `TESTIRAMO NAS PARAGRAF`


// let div = document.createElement("div");
// container.append(div)
// let p = document.createElement("p").innerText=`200`
// div.append(p);


// console.log(container,"cot",btn);
