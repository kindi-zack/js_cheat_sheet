// DEKLARASI

// deklarasi string kosong
let str = ''

// deklarasi + assignment
let hari = 'Minggu'


// PENGISIAN

// pengisian 1 buah string utuh
let nama = 'Martin'

// pengisian per karakter, secara appending ( pengisian di akhir )
nama = nama + ' Kanginan'

console.log(nama)

console.log('---------------')

// CARA BACA

// 1. satu per satu
console.log(nama[0]) // baca karakter ke 1
console.log(nama[1]) // baca karakter ke 2

// 2. menggunakan variable penunjuk index
let index = 0
console.log(nama[index]) // baca karakter ke 1
index = 1
console.log(nama[index]) // baca karakter ke 2

console.log('---------------')

// CARA ITERASI / AKSES 1 PER 1 SECARA INCREMENTAL
// memanfaatkan for loop, dimana variabel loopingnya kita pakai untuk menunjukkan index string
for (let i = 0; i < nama.length; i++) {
  console.log(nama[i])
}

console.log('---------------')