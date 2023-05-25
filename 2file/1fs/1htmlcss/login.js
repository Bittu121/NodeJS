//Create a file using async await
const fs = require("fs/promises");
const createFile = async() => {
    try{
        await fs.writeFile('login.html','welcome to your login page');
        console.log("File created");
    }catch(error){
        console.log(error);
    }
};
createFile();