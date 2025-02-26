import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  const arrContacts = JSON.parse(contacts);

  const newContacts = arrContacts.slice(0, arrContacts.length - 1);

  writeContacts(newContacts);
};

removeLastContact();
