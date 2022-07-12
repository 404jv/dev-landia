import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import { postgresDatabaseSource } from '../index';

async function create() {
  await postgresDatabaseSource.initialize();

  const id = uuidV4();
  const passwordHash = await hash('admin', 8);

  await postgresDatabaseSource.query(`
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

  await postgresDatabaseSource.destroy();
}

create();
