import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  return JSON.parse(contacts).length;
};

console.log(await countContacts());
