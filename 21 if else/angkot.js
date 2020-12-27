var jumlahAngkot = 10, angkotBeroperasi = 6, noAngkot = 1;

for (noAngkot; noAngkot <=jumlahAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
        console.log ('Angkot ' + noAngkot + ' beroperasi dengan baik');
    } else {
        console.log ('Angkot ' + noAngkot + " tidak beroperasi");
    }
}