const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case "list":
			const allContacts = await contacts.listContacts();
			console.log(allContacts);
			break;
		case "get":
			const contact = await contacts.getContactById(id);
			console.log(contact);
			break;
		case "remove":
			const deletedContact = await contacts.removeContact(id);
			console.log(deletedContact);
			break;
		case "add":
			const newContact = await contacts.addContact({ name, email, phone });
			console.log(newContact);
			break;
		default:
			console.warn("\x1B[31m Unknown action type!");
	}
}


