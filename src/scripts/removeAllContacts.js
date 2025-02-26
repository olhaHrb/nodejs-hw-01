import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const removeContacts = [];
  writeContacts(removeContacts);
};

removeAllContacts();
