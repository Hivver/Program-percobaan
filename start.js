const nama = prompt("Masukkan namamu: ");
const umur = parseInt(prompt("Berapa usiamu: "));
let kurang = 21 - umur;
if (umur < 21) {
  console.log("Maaf Budi, umur kamu kurang " + kurang + " tahun lagi");
}
if (umur >= 21) {
  let uang = parseInt(prompt("Masukkan jumlah uang: "));
  if (uang < 500_000) {
    console.log(
      "Maaf Andi, uang kamu cuma " +
        uang / 1000 +
        " ribu, datang lagi lain kali"
    );
  } else {
    console.log("Selamat datang Sultan");
  }
}
