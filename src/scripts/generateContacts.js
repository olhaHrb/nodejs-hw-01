import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

readContacts();

const generateContacts = async (number) => {
  const newContacts = faker.helpers.multiple(createFakeContact, {
    count: number,
  });

  writeContacts(newContacts);
};

generateContacts(2);
