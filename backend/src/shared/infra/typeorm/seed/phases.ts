import { postgresDatabaseSource } from '../index';

async function create() {
  await postgresDatabaseSource.initialize();

  // map 1
  await postgresDatabaseSource.query(`
    INSERT INTO 
      phases(id, map_id, title, type, description, max_level, "order", hexadecimal_color)
    VALUES (
      '2895a53e-b43f-43fb-8ae8-ef7bf4da1f00',
      '654b369c-8459-4c7e-be93-b74531c7f8de',
      'Fase 1',
      'practice',
      'descrição fase 1',
      3,
      0,
      '#84CD48'
    );
  `);

  await postgresDatabaseSource.query(`
    INSERT INTO 
      phases(id, map_id, title, type, description, max_level, "order", hexadecimal_color)
    VALUES (
      '585413b4-ca9f-4d22-a3a2-a8272e658425',
      '654b369c-8459-4c7e-be93-b74531c7f8de',
      'Fase 2',
      'practice',
      'descrição fase 2',
      3,
      1,
      '#EF4135'
    );
  `);

  await postgresDatabaseSource.query(`
    INSERT INTO 
      phases(id, map_id, title, type, markdown_text, description, max_level, "order", hexadecimal_color)
    VALUES (
      '647dabcc-39b9-442e-8f62-7b26b886601a',
      '654b369c-8459-4c7e-be93-b74531c7f8de',
      'Fase teórica',
      'theory',
      '# Isso é uma fase teórica',
      'descrição fase teórica',
      1,
      2,
      '#6518F4'
    );
  `);

  // map 2
  await postgresDatabaseSource.query(`
    INSERT INTO 
      phases(id, map_id, title, type, description, max_level, "order", hexadecimal_color)
    VALUES (
      '259fa2dd-3e85-4dc3-8310-ca368c657023',
      '2fad788d-e552-4232-ab72-ff4aa3ef6378',
      'Fase 3',
      'practice',
      'descrição fase 3',
      3,
      0,
      '#1F6FEB'
    );
  `);

  await postgresDatabaseSource.destroy();
}

create();
