import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact';
import { writeContacts } from '../utils/writeContacts';

const generateContacts = async (number) => {
  const contacts = faker.helpers.multiple(createFakeContact, {
    count: number,
  });
  writeContacts(contacts);
};

generateContacts(5);
