

const contactsPath = require("./db");


const invokeAction = async ({ action, id, data }) => {
    switch (action) {
        case "getAll":
            const contact = await contactsPath.getAll();
            console.log(contact);
            break;
        case "getById":
            const contacts = await contactsPath.getById(id);
            console.log(contacts);
            break;
        default:
      console.warn('\x1B[31m Unknown action type!');
    }
}
const id = "6";
invokeAction({ action: "getById", id});
