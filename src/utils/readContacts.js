import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });

    //return data;
    console.log('вміст:', data);
  } catch (err) {
    console.error(err);
  }
};
