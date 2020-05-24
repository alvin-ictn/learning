const upperizedNames = ["Dimas", "Widy", "Buchori"]
    .map(function(name) {
        return name.toUpperCase();
});
 
console.log(...upperizedNames);
 
/* output:
DIMAS WIDY BUCHORI
*/

const upperizedNames = ["Dimas", "Widy", "Buchori"]
    .map(name => name.toUpperCase());
 
console.log(...upperizedNames);
 
/* output:
DIMAS WIDY BUCHORI
*/

/* 
Pada kasus fungsi yang dituliskan dalam satu baris dengan arrow function kita dapat menghapus kata function, tanda kurung, tanda kurawal, kata return, dan semicolon (;). Kita hanya perlu menambahkan tanda panah (=>) di antara parameter dan kode fungsinya.
*/