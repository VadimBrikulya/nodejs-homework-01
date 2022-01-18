

const contactsPath = require("./db");


const invokeAction = async ({ action, id, data }) => {
    switch (action) {
        case "getAll":
            const contact = await contactsPath.getAll();
            console.log(contact);
            break;
        case "getById":
            const contacts = await contactsPath.getById(id);
            if (!contacts) {
                throw new Error(`mazafaka id=${id} not found`);
            }
            console.log(contacts);
            break;
        default:
      console.warn("\x1B[31m Unknown action type!");
    }
}
const id = "1";
invokeAction({ action: "getById", id});
