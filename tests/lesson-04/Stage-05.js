//cách 1
// for ( let i = 1; i <=100; i++){
//     for ( let j =0; j <=100; j++){
//         if ((i * j) %19 ===0 ){
//             console.log (i,j);
//         }
//     }
// }

// Cách 2 

// for ( let i = 1; i <=100; i++){
//     if (i%19 ===0 ){
//         for (j =1; j<=100; j++){
//             console.log(i,j)
//         }
//     }
//     else {
//         for (j=19; j<=100; j+=19){
//             console.log (i,j);
//         }
//     }
// }

//Cách 3 
let ketQua = []; 

for (let i = 1; i <= 100; i++) {
    for (let j = i; j <= 100; j++) {
        if ((i * j) % 19 === 0) {           
            ketQua.push([i, j]);           
        }
    }
}
console.log(ketQua);