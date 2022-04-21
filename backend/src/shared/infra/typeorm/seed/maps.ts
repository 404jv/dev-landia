import { createConnection } from 'typeorm';

async function create() {
  const connection = await createConnection();

  await connection.query(`
    INSERT INTO 
      maps(id, title, description, "order")
    VALUES (
      '2fad788d-e552-4232-ab72-ff4aa3ef6378',
      'mapa 2',
      'mapa dois',
      2
    );
  `);

  await connection.query(`
    INSERT INTO 
      maps(id, title, description, "order")
    VALUES (
      '654b369c-8459-4c7e-be93-b74531c7f8de',
      'mapa 1',
      'mapa um',
      1
    );
  `);

  await connection.close();
}

create();
