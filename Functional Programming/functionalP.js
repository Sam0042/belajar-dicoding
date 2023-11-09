console.log("FUNCTIONAL PROGRAMMING")

const arr1 = ["a","b","c"];
const arr2 = [];

//cara imperatif
for(let i=0;i<arr1.length;i++){
    arr2.push(`${arr1[i]}`)
}
console.log(arr2)

//cara deklaratif
const arr3 = arr1.map((index)=>`${index}!!`);
console.log(arr3)

//pure function
const hitungJariJari = (jariJari)=>{
    return 3.14*(jariJari*jariJari);
}
console.log(hitungJariJari(2))
console.log(hitungJariJari(2))

//percobaan pure funct yg benar (1)
const user = {
    namaDepan : "Muhammad",
    namaBelakang : "Smblu",
};

const perbaikiNamaBelakang = (namaBelakangBaru,user)=>{
    return {
        ...user,//titik tiga = spread sintaks
        namaBelakang: namaBelakangBaru,
    }
}
console.log(user)
console.log(perbaikiNamaBelakang("Sumbul",user))
console.log(perbaikiNamaBelakang("Sambalado",user))

//contoh pure funct (2)
const countDown = (start)=>{
    console.log(start);
    if(start>0) countDown(start-1);
}
countDown(5)