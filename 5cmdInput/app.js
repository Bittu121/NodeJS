//1.set Input commandlne
// console.log(process.argv);
//PS C:\Users\BITTU\Desktop\node> node index.js hello
//PS C:\Users\BITTU\Desktop\node> node index.js hello Bittu\hi

// console.log(process.argv[2]);
// // PS E:\vscode\Nodejs\cmdInput> node app.js hello Bittu\hi
// // hello

//2.ile creation using cmdline input
// const fs = require("fs")
// const input = process.argv;
// fs.writeFileSync(input[2],input[3])
//cmd :- PS E:\vscode\Nodejs\cmdInput> node app.js apple.txt 'this is a fruit'

//3.add remove using cmd
const fs = require("fs");
const input = process.argv;
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log("Invalid output");
}

//cmd:- PS E:\vscode\Nodejs\cmdInput> node app.js add orange.txt 'this is a color and fruit'
//cmd :- PS E:\vscode\Nodejs\cmdInput> node app.js remove  orange1.txt