var fs=require('fs');

fs.writeFileSync('corn.txt','Corn is not good for health');

console.log(fs.readFileSync('corn.txt').toString());