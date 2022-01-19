

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
        case "add":
            const newContact = await contactsPath.add(data);
            console.log(newContact);
            break;
        case "updateById":
            const updateContact = await contactsPath.updateById(id, data);
            if (!updateContact) {
                throw new Error(`mazafaka id=${id} not found`);
            }
            console.log(updateContact);
            break;
        default:
      console.warn("\x1B[31m Unknown action type!");
    }
}

// invokeAction({ action: "getAll"});

// const id = "1";
// invokeAction({ action: "getById", id});

// const newData = {
    
//     name: "Dratuti",
//     email: "Dratuti@magnis.org",
//     phone: "(098) 500-3020"
// }
  
// invokeAction({ action: "add", data: newData });

const updateId = "20055ab0-98f7-452e-948f-7b90293a1887";

const updateData = {
    
    name: "Dratuti",
    email: "miskuzi@magnis.org",
    phone: "(098) 500-3020"
}

invokeAction({ action: "updateById", id:updateId, data: updateData });
  