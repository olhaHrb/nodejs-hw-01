import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = faker.helpers.multiple(createFakeContact, {
    count: number,
  });
  const allContacts = JSON.parse(contacts).concat(newContacts);
  writeContacts(allContacts);
};

generateContacts(3);
