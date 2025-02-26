import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContacts = faker.helpers.multiple(createFakeContact, {
    count: 1,
  });
  const allContacts = JSON.parse(contacts).concat(newContacts);
  writeContacts(allContacts);
};

addOneContact();
