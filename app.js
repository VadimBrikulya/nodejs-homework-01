const fs = require("fs/promises");

fs.readFile("files/file.txt", "utf-8")
    .then(data => {
        console.log(data);
        // const text = data.toString();
        // console.log(text);
    })
    .catch(error => console.log(error.message))