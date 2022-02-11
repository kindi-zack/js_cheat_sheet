// DEKLARASI

// secara umum bentuk object adalah :
let obj = {
  key1: 'value',
  key2: 20,
  key3: true,
  key4: [1, 2, 3, 4],
  key5: {
    foo: 'bar'
  }
}

// deklarasi object kosong
let obj1 = {}

// deklarasi + assignment
let obj_mahasiswa = {
  name: 'Fiqi',
  jurusan: 'IT'
}

// PENGISIAN

// pengisian 1 buah object dengan 1 atau beberapa buah key langsung
let obj_student = {
  nama: 'Amanda',
}

// menambahkan 1 buah key, tidak peduli dengan urutan
// ada 3 cara
// 1. langsung menggunakan '.' dan langsung menambahkan nama key yang akan kita masukkan
obj_student.alamat = 'Jakarta'

// 2. menggunakan string nama key yang akan dimasukkan menggunakan kurung kotak
obj_student['batch'] = 7

// 3. menggunakan sebuah variable yang berisi string nama key yang kan kita masukkan ke object, pemanggilan variable tersebut TANPA menggunakan kutip, alias bukan dipanggil sebagai string, dan menggunakan kurung kotak
let key = 'nama_batch'
obj_student[key] = 'Glassgow'

console.log(obj_student)

console.log('---------------')

// CARA BACA

// melakukan pemanggilan isi dari object, bisa dengan 3 cara pula, mengikuti cara yang sama dengan pengisiannya di atas
console.log(obj_student.nama) // cara 1
console.log(obj_student['nama']) // cara 2

// cara 3
key = 'nama'
console.log(obj_student[key])
// end of cara 3

console.log('---------------')

// CARA ITERASI / AKSES 1 PER 1 SECARA INCREMENTAL

// cara mudah, yaitu dengan for in
for (const key in obj_student) {
  console.log(`${key} => ${obj_student[key]}`)
}

console.log('---------------')

// cara ribet, yaitu bikin dulu semua key nya jadi sebuah array of keys, kemudian di loop untuk bisa baca dengan cara array, dan gunakan element masing2 array untuk jadi 
let keys = Object.keys(obj_student)
console.log(keys)

for (let i = 0; i < keys.length; i++) {
  let key = keys[i]
  console.log(`${key} => ${obj_student[key]}`)
}

console.log('---------------')