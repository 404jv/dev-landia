import { hash } from 'bcrypt';
import { createConnection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const passwordHash = await hash('senha123', 8);

  await connection.query(`
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

  await connection.close();
}

create();
