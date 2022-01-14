import { createConnection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

async function create() {
  const connection = await createConnection();

  await connection.query(`
    INSERT INTO 
      phases(id, map_id, title, type, max_level, "order")
    VALUES (
      '585413b4-ca9f-4d22-a3a2-a8272e658425',
      '2fad788d-e552-4232-ab72-ff4aa3ef6378',
      'Fase 2',
      'practice',
      3,
      2
    );
  `);

  await connection.query(`
    INSERT INTO 
      phases(id, map_id, title, type, max_level, "order")
    VALUES (
      '259fa2dd-3e85-4dc3-8310-ca368c657023',
      '2fad788d-e552-4232-ab72-ff4aa3ef6378',
      'Fase 3',
      'practice',
      3,
      3
    );
  `);

  await connection.query(`
    INSERT INTO 
      phases(id, map_id, title, type, max_level, "order")
    VALUES (
      '2895a53e-b43f-43fb-8ae8-ef7bf4da1f00',
      '2fad788d-e552-4232-ab72-ff4aa3ef6378',
      'Fase 1',
      'practice',
      3,
      1
    );
  `);

  await connection.close();
}

create();
