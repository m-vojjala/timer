const newArgs = process.argv.slice(2);


const timer = function(args){
for(let time of args){
  setTimeout(() => process.stdout.write('\x07'),time*500)
  
}

}
timer(newArgs)