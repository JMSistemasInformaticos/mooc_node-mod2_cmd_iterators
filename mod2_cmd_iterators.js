// ejercicio p2p modulo 2
// 1. 
console.log(" ");
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log();
// 2. 

//let a = ["uno","-r","dos","uno","dos","tres","dos","tres","tres"];
a= process.argv.slice(2,process.argv.length);
console.log(a.sort());
let arr = a.filter(a => a !== "-r");
console.log(arr);
let conta=0;
anterior= arr[0];
arr.forEach((val, index) => {
  if (val !== anterior)
   {
  	console.log(`${anterior}: ${conta}`);
	conta=0;
	anterior=val;
	}
	conta+=1;
})
  	console.log(`${anterior}: ${conta}`);
// 3. 


// Type your code here
