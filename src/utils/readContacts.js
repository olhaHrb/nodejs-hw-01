import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = () => {
  fs.readFile(PATH_DB, { encoding: 'utf8' })
    .then((data) => {
      //const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });

      console.log(data);
      //return data;
    })
    .catch((err) => {
      console.error(err);
    });
};
