// DEKLARASI

// secara umum bentuk array adalah :
let arr = [ 'elment1', 'elment2' ]

// catatan: element dalam array bisa jadi type data dasar : number, string, boolean,,, ATAU tipe data bentukan : array atau object

// deklarasi array kosong
let arr1 = []

// deklarasi + assignment
let arr_number = [100]


// PENGISIAN

// pengisian 1 buah array utuh
let arr_nilai = [100, 80, 70, 40]

// pengisian per element, secara appending ( pengisian di akhir )
arr_nilai.push(50)

console.log(arr_nilai)

console.log('---------------')

// CARA BACA

// 1. satu per satu
console.log(arr_nilai[0]) // baca element ke 1
console.log(arr_nilai[1]) // baca element ke 2

// 2. menggunakan variable penunjuk index
let index = 0
console.log(arr_nilai[index]) // baca element ke 1
index = 1
console.log(arr_nilai[index]) // baca element ke 2

console.log('---------------')

// CARA ITERASI / AKSES 1 PER 1 SECARA INCREMENTAL
// memanfaatkan for loop, dimana variabel loopingnya kita pakai untuk menunjukkan index array
for (let i = 0; i < arr_nilai.length; i++) {
  console.log(arr_nilai[i])
}

console.log('---------------')