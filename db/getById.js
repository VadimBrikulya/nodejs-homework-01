const getAll = require("./getAll");

const getById = async (id) => {
    const contact = await getAll();
    const result = contact.find(item => item.id === id);
    return result;
}
module.exports = getById;