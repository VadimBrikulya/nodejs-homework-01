const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "contact.json")

const getAll = async()=> {
    const data = await fs.readFile(filePath);
    const contact = JSON.parse(data);
    return contact;
}
module.exports = getAll;