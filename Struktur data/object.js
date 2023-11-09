//OBJECT
const user = {
    "nama" : "hisyam",
    "nim" : "0110220068",
    "umur" : 22,
    "angkatan" : "2020",
};

// 


user["umur"]=23;
user.angkatan = "2021"
delete user.angkatan;
delete user.umur;
//console.log(user)

//ARRAY
const fruits = ["Manggo","Apple"]
const animals = ["Dog",null,"Cat",21,true,2.5]
//push
animals.push("Chiken","Frog",false,203)
//pop
animals.pop()
//shift unshift
animals.shift() 
animals.unshift("Monkey")
//delete
delete animals[2]
//splice hapus
animals.splice(2,1,)
//splice nambah
animals.splice(0,1,"Gorilla")
//spread
const campuran = [...animals,...fruits]
console.log(campuran)
//gabungkan dua objek dgn spread
const obj1 ={
    namaDepan:"Saipul Junup",
    umur:900,
}
const obj2 = {
    namaBelakang:"Udin Gas Alam",
    nyawa:3000,
}
const objcampur ={...obj1,...obj2}
console.log(objcampur)

//looping array
// for(i=0;i<animals.length;i++){
//     console.log(animals[i])
// }


//DESTRUCTING OBJ DAN ARRAY
//mengekstrak isi dari obj/arr ke var baru
const supra = {
    warna:"ijo",
    tipe:"1x20z",
    tahun:"2010",
}
const {warna,tipe,tahun} = supra;
console.log(warna,tipe,tahun)
//destructing asigmen
const jokowi ={
    etnik:"jawir",
    hobi:"nipu",
    badan:"loyo",
}
let etnik = "niga";
let hobi = "menabung";
({etnik,hobi}=jokowi)
console.log(etnik,hobi)
//default values
const spombop = {
    kolor:"kuning",
    bentuk:"persegi panjang",
    hobi:"menangkap ubun-ubun",
    teman:"petrig"
}
const{kolor,bentuk,yipyap="tuankrep"}=spombop;
console.log(kolor,yipyap)
//Assigning to Different Local Variable Names
const petrigsetar = {
    otak:"dongo",
    pisig:"gembrot"
}
const{otak:utak,pisig:fisik}=petrigsetar;
console.log(utak,fisik)

//DESTRUCTING ARR
const arr1 = ["Ayam","Ikan","Sapi","Angsa"];
const [a1,a2,a3,a4] = arr1;
console.log(a3,a4,a1,a2)
const[,,a22] = arr1
console.log(a22)
//array swap
let a = 1;
let b = 2;

[a,b]=[b,a]
console.log(`a = ${a}\nb = ${b}`)
//MAP
const bakwan = new Map([
    ["warnaz",true],
    [3,"gurih"],
])
bakwan.set("hewan","Monyet")
console.log(bakwan)
console.log(bakwan.get("hewan"))
//set
const set1 = new Set([1,2,2,1])
set1.add(1)
set1.add(5)
set1.delete(2)
console.log(set1)

