const db = require('../database')

exports.add = async (genre) => {
  await db.getPool().query("insert into genres (name) values ($1);",
      [genre.name]);
}

exports.get = async (id) => {
  const { rows } = await db.getPool().query("select * from genres where id = $1", [id])
    return db.camelize(rows)[0]
}

exports.update = async (genre) => {
  await db.getPool().query("update genres set name = $1 where id = $2;",
      [genre.name, genre.id]);
}

exports.upsert = (genre) => {
  if (genre.id) {
    exports.update(genre);
  } else {
    exports.add(genre);
  }
}

exports.all = async () => {
  const { rows } = await db.getPool().query("select * from genres order by id");
  return db.camelize(rows);
};