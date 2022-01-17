

const contactsPath = require("./db");


const invokeAction = async ({ action, id, data }) => {
    switch (action) {
        case "getAll":
            const contact = await contactsPath.getAll();
            console.log(contact);
            break;
    }
}

invokeAction({ action: "getAll" });
