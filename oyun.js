var gizliNumara = 15;

var kullaniciNumara = prompt("Bir sayı tahmin et");
var tahmin =Number (kullaniciNumara);

if (tahmin === gizliNumara) {
  alert("Evet gizli numarayı buldun. Gizli numara "+ gizliNumara + " idi.");

} else if (tahmin > gizliNumara) {
  alert("Çok büyük tahmin ettin. Birazcık daha düş.");

} else {
  alert("Çok küçük tahmin ettin. Birazcık daha çık.");
}
