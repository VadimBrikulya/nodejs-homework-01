const getAll = require("./getAll");

const getById = async (id) => {
    const contact = await getAll();
    const result = contact.find(item => item.id === id);
    if (!result) {
        return null;
    }
    return result;
}
module.exports = getById;