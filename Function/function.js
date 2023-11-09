//FUNCTION
function hitung(a,b){
    return a*b;
} 
console.log(hitung(2,5))

function nilai(a){
    if (a>=90){
        return "A";
    }
    else if(a>=80){
        return "B";
    }
    else if(a>=70){
        return "C";
    }
    else{
        return "D";
    } 
}
const kumpNilai = `${nilai(75)} ${nilai(20)}`
console.log(kumpNilai)

function hari(time){
    if(time>=18){
        return "Malam";
    }
    else if (time>=15){
        return "Sore";
    }
    else if (time>=11){
        return "Siang";
    }
    else if(time>=1){
        return "Pagi";
    }
    else{
        return "Tidak diketahui";
    }
}
let jam = hari(7)
console.log(jam)

const intro = function(ente){
    return `Selamat Datang ${ente}!`
}
console.log(intro("Saipul Junup"))
console.log(intro("Udin Pengkol"))
//function parameter obj
const animals = {
    nama: "Kucing",
    warna:"Oren",
    hobi:"Nyolong ikan",
}
//destructing obj di parameter yagesyak
function apalah({nama,hobi}){
    console.log(`${nama} ini mempunyai hobi ${hobi}.`)
}
apalah(animals)
const{nama,warna}=animals;
console.log(nama,warna)
//dest aray diparam
const arr1 = [1,2,3,4];
function nomer([n1,n2,n3,n4]){
    return `${n1},${n2},${n4}`
}
console.log(nomer(arr1))
//apakek
const rumah = function(a,b="amnjay"){
    console.log(`${a} ${b}`)
}
rumah("bleki")
//rest spread
const jumlakan = function(...nilais){
    let hasil= 0;
    for(let nilai of nilais){
        hasil+=nilai;
    }
    return hasil;
}
console.log(jumlakan(1,2,2,3,2,1,1,7,7))
//ARROW FUNCTION
const arrfunc = (param1,param2)=>{
    console.log(`${param1} + ${param2} = `,param1+param2);
}
console.log(arrfunc(5,3))
//
const salam = ()=>{
    console.log("Assalamualaikum!")
}
salam()
const panggilNama = namo =>{console.log(`Halo ${namo}!`)}
panggilNama("Japing Surabi")
const multipli = (a,b)=>{console.log(a*b)}
multipli(5,4)
//closure
function hitang(){
    const nama = "sempak";
    //innter funct
    function hutung(){
        console.log(nama)
    }
    hutung()
}
hitang()
//tanpa closur
 let angka = 0
 const nambah = ()=>{
    return ++angka
 }
 console.log(nambah())
 console.log(nambah())
 angka = 30;
 console.log(nambah())
 //dgn closur
const add = ()=>{
    let angka = 0
    return ()=>{
        return ++angka;
    }
}
const haha = add()
console.log(haha())
console.log(haha())