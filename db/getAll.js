const fs = require("fs/promises");
const filePath = require("./filePath");

const getAll = async()=> {
    const data = await fs.readFile(filePath);
    const contact = JSON.parse(data);
    return contact;
}
module.exports = getAll;