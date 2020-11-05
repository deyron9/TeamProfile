const fs = require('fs');
const util = require('util');

const writeFilePromise = util.promisify(fs.writeFile);

const generateFileName = function(){
    return `${(new Date).getTime()}.html`; 
}

const base = async function(username, color){
       const htmlString = `
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>${username}</title>
       </head>
       <body>
           <h1>Hello, my name is ${username}. My favorite color is ${color} </h1>
       </body>
       </html>
       `;

       await writeFilePromise(generateFileName, htmlString);
}

module.exports = {
    base
}