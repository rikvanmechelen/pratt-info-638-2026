const db = require('../database')
var crypto = require('crypto');

const createSalt = () => {
  return crypto.randomBytes(16).toString('hex');
}

const encryptPassword = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256').toString('hex')
}

exports.add = async (user) => {
  const salt = createSalt();
  let encryptedPassword = encryptPassword(user.password, salt);
  await db.getPool().query("insert into users (name, email, salt, password) values ($1, $2, $3, $4);",
        [user.name, user.email, salt, encryptedPassword]);
};

exports.getByEmail = async (email) => {
  const { rows } = await db.getPool().query("select * from users where email = $1", [email])
  return db.camelize(rows)[0]
}

exports.login = async (login) => {
  let user = await exports.getByEmail(login.email);
  if (!user) {
    return null;
  }
  const encryptedPassword = encryptPassword(login.password, user.salt);
  if (encryptedPassword === user.password) {
    return user;
  } else {
    return null;
  }
}