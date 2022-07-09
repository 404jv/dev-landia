import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import { postgresDatabaseSource } from '..';

async function create() {
  await postgresDatabaseSource.initialize();

  const id = uuidV4();
  const passwordHash = await hash('senha123', 8);

  await postgresDatabaseSource.query(`
    INSERT INTO 
      users(id, name, username, email, is_admin, password, biography)
    VALUES (
      '${id}',
      'user test',
      'user_test',
      'user@test.com',
      false,
      '${passwordHash}',
      'user'
    );
  `);

  await postgresDatabaseSource.destroy();
}

create();
