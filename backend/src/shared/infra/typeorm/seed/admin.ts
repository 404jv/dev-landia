import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const passwordHash = await hash('admin', 8);

  await connection.query(`
    INSERT INTO 
      users(id, name, username, email, is_admin, password, biography)
    VALUES (
      '${id}',
      'adminSys',
      'adminSys',
      'admin@devlandia.com.br',
      true,
      '${passwordHash}',
      'admin'
    );
  `);

  await connection.close();
}

create()
  .then(() => console.log('User admin created!'))
  .catch((err) => console.log(err));
