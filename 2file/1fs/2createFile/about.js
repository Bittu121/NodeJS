//create a file
// const fs = require("fs/promises");
// const createFile = async(fileToCreate,content) =>{
//     try{
//         await fs.writeFile(fileToCreate, content);
//         console.log("File created");
//     }catch(error){
//         console.log(error);
//     }
// };
// createFile('aboutUs.docx', "AboutUs");

const fs = require("fs/promises");
const createFile = async(fileToCreate,content) =>{
    try{
        await fs.writeFile(fileToCreate, content);
        console.log("File created");
    }catch(error){
        console.log(error);
    }
};
createFile('contactUs.pdf', "This is my first pdf file created");