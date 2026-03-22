var crypto = require('crypto');

const createSalt = () => {
  return crypto.randomBytes(16).toString('hex');
}

const encryptPassword = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256').toString('hex')
}

const users = [
  {
    name: 'Rik',
    email: 'rvanmech@pratt.edu',
    salt: '8c9149733079e27a9a1b0b42d5886585',
    encryptedPassword: '553cea73b9b45a9657fb2fa8ad2dbbecd022d7cd1b6a1a9b633d2f8243347e3d'
  }
]

exports.all = users;

exports.add = (user) => {
  const salt = createSalt();
  const newUser = {
    name: user.name,
    email: user.email,
    salt: salt,
    encryptedPassword: encryptPassword(user.password, salt)
  }
  console.log(newUser);
  users.push(newUser);
};

exports.getByEmail = (email) => {
  return users.find((user) => user.email === email);
}

exports.login = (login) => {
  let user = exports.getByEmail(login.email);
  if (!user) {
    return null;
  }
  const encryptedPassword = encryptPassword(login.password, user.salt);
  if (encryptedPassword === user.encryptedPassword) {
    return user;
  } else {
    return null;
  }
}