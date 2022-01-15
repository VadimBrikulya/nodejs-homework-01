const fs = require("fs/promises");


const fileOperation = async(filePath, action = "read", data = "") => {
    switch (action) {
        case "read":
            const text = await fs.readFile(filePath, "utf-8");
            console.log(text);
            break;
    }
}
fileOperation("files/file.txt");
// fs.readFile("files/file.txt", "utf-8")
//     .then(data => {
//         console.log(data);
//         // const text = data.toString();
//         // console.log(text);
//     })
//     .catch(error => console.log(error.message))