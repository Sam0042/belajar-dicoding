//membuat object dalam bentuk OOP
const Mobil = {
    //properties
    merek: "Supra",
    warna: "Merah",
    kecepatanMaksimal: "240km/h",
    nomorRangka: "2203",
    //methods
    drive: ()=>{
        console.log("driving");
    },
    reverse: ()=>{
        console.log("reversing");
    },
    turn: ()=>{
        console.log("turning");
    },
    //bisa nyimpen array jga bjir
    arr1: ["Honda","Toyota","BMW"]
}

console.log(Mobil.merek)
console.log(Mobil.warna)
Mobil.drive()
console.log(Mobil.arr1[2],Mobil.arr1[0])

//object blueprint
function Motor(brand,warna,maxspeed,nomorRangka){
    this.brand = brand;
    this.warna = warna;
    this.maxspeed = maxspeed;
    this.nomorRangka = nomorRangka;
}
//prototype adalah internal proprty dri const funct
Motor.prototype.drive = function(){
    console.log(`${this.brand} ${this.warna} is driving`)
}

Motor.prototype.reverse = function(){
    console.log(`${this.brand} ${this.warna} is reversing`)
}
//membuat obj motor dgn constructor function Motor (BLUEPRINT).
const motor1 = new Motor("Supra eks","Ijo","100km/h","ab-1")
const motor2 = new Motor("Honda bit","Item","110km/h","ab-2")
console.log(motor1)
console.log(motor2)
motor1.drive()
motor2.reverse()
motor2.drive()

//constructor funct menggunakan class
class Hero{
    constructor(nama,type,dmg,role){
        this.nama = nama;
        this.type = type;
        this.dmg = dmg;
        this.role = role;
    }
    //methods
    hit(){
        console.log(`This ${this.nama} is hitting with ${this.dmg} damages with ${this.type} items`)
    }
}

const balmond = new Hero("Balmond","Fighter",1000,"Jungler")
const claude = new Hero("Claude","Marksman",1500,"Gold laner")
const harith = new Hero("Harith","Mage",3400,"Mid laner")

balmond.hit()
claude.hit()
harith.hit()

class Rumah{
    constructor(warna,luas,tinggi,alamat,kodePos){
        this.warna = warna;
        this.tinggi = tinggi;
        this.luas = luas;
        this.alamat = alamat;
        this.kodePos =`${Math.floor(Math.random()*1000 +1)}`;//value mendifiniskn value properti secara langsung
    }

    penjelasan(){
        console.log(`Rumah berwarna ${this.warna} yang terletak di ${this.alamat} mempunyai tinggi ${this.tinggi} dan luas ${this.luas}.`);
    }
    bakar(){
        console.log(`Rumah ${this.warna} di ${this.alamat} menglami kebakaran`)
    }
}
const rumah01 = new Rumah("Abu-abu","5 Meter","1 Hektar","Perumahan Mamba 2");
rumah01.warna = "Merah"
rumah01.penjelasan()
rumah01.bakar()
console.log(rumah01)

//Getter Setter
class Mahasiswa{
    #kodeUniv = null;

    constructor(nama,nim,jurusan){
        this.nama=nama;
        this.nim=nim;
        this.jurusan=jurusan;
        this.#kodeUniv= this.#tetapkanKodeUniv();
    }
    get dataMahasiswa(){
        return `${this.nama}-${this.nim}-${this.jurusan}`;
    }
    set dataMahasiswa(dataMahasiswa){
        const [nama,nim,jurusan]=dataMahasiswa.split(" ");
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
    }   
    get kodeUniv(){
        return this._kodeUniv;
    }
    set kodeUniv(namaUniv){
        console.log("tidak boleh mengubah kode univ")
    } 
    //methods
    #tetapkanKodeUniv(){
        return `NF-${Math.floor(Math.random()*10000)}`;
    }
}
const mahasiswa01 = new Mahasiswa("Hisyam Mubarak","0110220068","Teknik Informatika");
console.log(mahasiswa01.nama)//get

mahasiswa01.nama = "Faqih Rizqi";//set
console.log(mahasiswa01)//get
mahasiswa01.jurusan = "Sistem Informasi";//set
console.log(mahasiswa01.jurusan)//get

//cuman bisa get, set sudah diblok
mahasiswa01.kodeUniv = "NF-12837"
console.log(mahasiswa01.kodeUniv)


//PEWARISAN
//superclass
class MailService { 
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  }
//subclass
class WhatsAppService extends MailService{
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
          this.sendMessage(message, receiver);
        }
      }
}
//subclass
class EmailService extends MailService{
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
          this.sendMessage(message, receiver);
        }, delay);
      }
}

//subclass
class TelegramService extends MailService{
    //overriding constructor
    constructor(sender,isBussiness){
        //JANGAN LUPA MEMANGGIL PROP SUPER
        super(sender);

        this.isBussiness = isBussiness;
    }
    //overriding method
    sendMessage(message,receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`)
    }
}

const whatsapp = new WhatsAppService("+6282122443675");
//const = constructor
const email = new EmailService("hisyammubarak90@gmail.com")
console.log(whatsapp.sendBroadcastMessage("WOY KONTOL!",["+62108237","+62912832"]))
console.log(email.sendDelayedMessage("p mabar","udinpengkol99@gmail.com",3000))
//test overriding method
const telegram = new TelegramService("hisyam190",true);
telegram.sendMessage("Selamat Pagi","ojankipli12")

//mengecek prototype
console.log(whatsapp instanceof EmailService)
console.log(email instanceof MailService)

//OBJECT COMPOSITIONING
class Dev{
    constructor(nama){
        this.nama = nama;
    }
    //method
    pushKeGithub(){
        console.log(`${this.nama} melakukan push ke github...`)
    }
}

function bisaMembuatUI(dev){
    return{
        membuatUI: () => {
            console.log(`${dev.nama} sedang membuat UI...`)
        }
    }
}

function bisaMembuatAPI(dev){
    return{
        membuatAPI: ()=>{
            console.log(`${dev.nama} sedang membuat API...`)
        }
    }
}

function bisaMendeployAplikasi(dev){
    return{
        deployAplikasi: ()=>{
            console.log(`${dev.nama} sedang mendeploy aplikasi...`)
        }
    }
}
//xx-
function membuatFrontEndDev(nama){
    const developer = new Dev(nama);
    return Object.assign(developer,bisaMembuatUI(developer))
}
function membuatBackEndDev(nama){
    const developer = new Dev(nama);
    return Object.assign(developer,bisaMembuatAPI(developer))
}
function membuatDevOps(nama){
    const developer = new Dev(nama);
    return Object.assign(developer,bisaMendeployAplikasi(developer))
}
function membuatFullStackDev(nama){
    const developer = new Dev(nama);
    return Object.assign(developer,bisaMembuatUI(developer),bisaMembuatAPI(dev),bisaMendeployAplikasi(dev))
}

const frontEndDev = membuatFrontEndDev("Hisyam");
frontEndDev.pushKeGithub();
frontEndDev.membuatUI();
console.log(`apakah ${frontEndDev.nama} seorang developer?`,frontEndDev instanceof Dev)

//BUILT-IN CLASS
//class Date
const date = new Date;
const timeInJakarta = date.toLocaleString("id-ID",{
    timeZone:"Asia/Jakarta",
});

const timeInTokyo = date.toLocaleString("ja-JP",{
    timeZone: "Asia/Tokyo",
});

const timeInMakassar = date.toLocaleString("id-ID",{
    timeZone: "Asia/Makassar"
});

console.log(timeInJakarta)
console.log(timeInTokyo)
console.log(timeInMakassar)

//kuis coding
class Animal{
    constructor(name,age,isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal{
    eat(){
        return `${this.name} sedang makan!`
    }
}

class Eagle extends Animal{
    fly(){
        return `${this.name} sedang terbang!`
    }
}