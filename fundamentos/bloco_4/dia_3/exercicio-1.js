let n = 5;

for (let indexLine = 0; indexLine < n; indexLine += 1){
    let asterisk = "";
    for (let indexColumn = 0; indexColumn < n; indexColumn += 1){
        asterisk += "* ";
    }
    console.log(asterisk);
}
