// Soal Evaluasi Essay JavaScript

// 1. Tipe Data
// Jelaskan perbedaan antara tipe data number, string, dan boolean dalam JavaScript. Berikan contoh untuk masing-masing tipe data tersebut.

//JAWABAN :
//tipeData:

//number == tipe data yang merujuk pada penggunaan angka
//ex: 
console.log(typeof(10))
console.log(10);
if(true) {
console.log(' ^ini number')
};

//string == tipe data yang merujuk pada penggunaan tanda kutip pada sebuah command
//ex:
console.log(typeof('helloworld'))
console.log("hello world");
if(true) {
    console.log(' ^ini string')
};

//boolean == tipe data yang merujuk pada penggunaan true dan false
//ex:
console.log(typeof(true))
console.log(true);
if(true) {
    console.log(' ^ini boolean')
};

// 2. Variabel
// Apa itu variabel dalam JavaScript? Jelaskan perbedaan antara var, let, dan const beserta contoh penggunaan masing-masing.

//VARIABLE adalah sebuah wadah yang kosong, yang dapat diisi oleh air dll, yaitu NILAI
//ex:
var a = 1
console.log(a + ' <- ini var a');

let b = 2
console.log(b + ' <- ini let b');

if(true) {console.log('yang saya tahu LET || VAR itu sama')};
//kalau 'const' saya belum belajar


// 3. Operator Aritmatika
// Buatlah kode JavaScript yang melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian dari dua angka yang ditentukan dalam variabel. Jelaskan hasil dari setiap operasi.


//jadi operator aritmatika itu adalah operasi yang bekerja untuk memproses bilangan dan nilai yang berhubungan dengan matematika seperti (KUKABATAKU)

var fazl = 10;
var arrafi = 200;
console.log(fazl + arrafi)
if(true) {
    console.log('^ini pertambahan')
};

console.log(fazl - arrafi)
if(true) { 
    console.log('^ini pengurangan')
};

console.log(fazl * arrafi)
if(true) {
    console.log('^ ini perkalian')
};

console.log(fazl / arrafi)
if (true) {
    console.log('^ini pembagian')
};



// 4. Operator Penugasan
// Apa yang dimaksud dengan operator penugasan dalam JavaScript? Berikan contoh kode yang menggunakan operator penugasan untuk mengupdate nilai variabel.

//operator yang berguna untuk mengupdate variable yang sudah ada
//commandnya : (+= , -= , *= , /=)
//ex:
var ayam = 2;
ayam += 2;
ayam += 2;
ayam += 2;
console.log(ayam);

var kodok = 5;
kodok *= ayam;
console.log(kodok);

if(true) {
    console.log(' ^ ini operator penugasan')
};

// 5.Operator Logika
// Jelaskan bagaimana operator logika bekerja dalam JavaScript. Berikan contoh penggunaan operator logika AND, OR, dan NOT dalam pernyataan.

//sebuah operasi yang berasal dari logika pemrograman
//commandnya:(|| , && , !)

//( || ) = atau 
//selagi masih ada kondisi yang bernilai true maka dia bernilai true
//ex:
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);
if(true) {
    console.log('ini operasi ||')
};

//( && ) = dan
//selagi ada nilai false pada program maka dia bernilai false
//ex:
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);
if(true) {
    console.log(' ^ini operasi &&')
};

//( ! ) = antonim
//mengantonimkan atau memutar balik nilai dari aslinya
//ex
console.log(!true);
console.log(!false);
var kue = 1;
var cake = 1;
console.log(kue != cake);
if(true) {
    console.log(' ^ini operasi !')
};

// 6.Pengkondisian (if, else if, else)
// Tulis kode JavaScript menggunakan struktur pengkondisian if, else if, dan else untuk mengecek apakah sebuah angka adalah genap atau ganjil. Jelaskan alur logika yang digunakan.

//operasi untuk membuat sebuah kemungkinan dari beberapa kondisi dan semua value yang dimasukkan berpa string
//ex:
let bilangan = prompt('masukkan angka');
i = bilangan
if(i % 2 === 0) {
   alert('bilangan yang anda masukkan GENAP')
   }else if(i % 2 === 1) {
    alert('bilangan yang anda msukkan GANJIL')
   }else {
    alert('yang anda masukkan bukanlah angka')
   };

// 7.Pengkondisian (switch)
// Buatlah contoh penggunaan pernyataan switch untuk menentukan nama hari berdasarkan nomor hari (1-7). Misalnya, 1 adalah "Senin", 2 adalah "Selasa", dan seterusnya.

//operasi yang mirip seperti if dan else hanya berbeda penulisan

let namaHari = prompt('masukkan angka untuk menentukan hari');
switch (namaHari) {
 case('1'):
    alert('senin')
    break;
 case('2'):
    alert('selasa')
    break;
 case('3'):
    alert('rabu')
    break;
 case('4'):
    alert('kamis')
    break;
 case('5'):
    alert('jumat')
    break; 
 case('6'):
    alert('sabtu')
    break;
 case('7'):
    alert('minggu')
    break;  
 default:
    alert('yang anda masukkan bukan hari')
    break;
}

// 8.Perulangan (for)
// Tulis kode JavaScript menggunakan perulangan for untuk mencetak angka dari 1 sampai 10 ke konsol. Jelaskan bagaimana perulangan tersebut bekerja

//ex:
let terminal = 1
let bus = 10
for (terminal; terminal <= bus  ; terminal++) {
    console.log('bus lengkap')
    };
//jadi disini,saya membuat variable terminal = 1 dan bus = 10, dan disitu '<=' artinya, selagi terminal lebih sediit dari bus maka terminal akan bertambah hingga 10x


// 9.Operator Perbandingan
// Jelaskan perbedaan antara operator perbandingan == dan === dalam JavaScript. Berikan contoh situasi di mana masing-masing operator dapat memberikan hasil yang berbeda.

//== adalah operator yang hanya menghasilkan nilai berdasakan angka atau variable

//=== operator yang membedakan hinggga ke jenis dan tipeData ynag dimasukkan 

//ex:
console.log(10 == '10')
console.log(10 === '10')

// 10.Kombinasi Tipe Data dan Operator
// Buatlah kode JavaScript yang menggabungkan string dan angka, kemudian jelaskan hasilnya. Apa yang terjadi ketika Anda mencoba menggabungkan tipe data yang berbeda?

console.log(10 + 10)
console.log(10 + '10')
console.log('10' + '10')

//jadi perbedaan nya adalah apa bila angka bertemu angka maka dia tidak akan dimasukkan kedalam operasi ARITMATIIKA, karena perbedaan antara (string) dengan (number)


