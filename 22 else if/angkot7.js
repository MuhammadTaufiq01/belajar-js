var jumlahAngkot = 10, angkotBeroperasi = 6, noAngkot = 1;

for (; noAngkot <=jumlahAngkot; noAngkot++){
    if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        console.log ('Angkot ' + noAngkot + ' sedang lembur');
    } else if (noAngkot <= angkotBeroperasi) {
        console.log ('Angkot ' + noAngkot + ' beroperasi dengan baik');
    } else {
        console.log ('Angkot ' + noAngkot + " tidak beroperasi");
    }
}