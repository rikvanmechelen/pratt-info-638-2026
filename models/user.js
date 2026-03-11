var crypto = require('crypto');

const createSalt = () => {
  return crypto.randomBytes(16).toString('hex');
}

const encryptPassword = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256').toString('hex')
}

const users = [
  {name: 'Rik', email: 'rvanmech@pratt.edu', salt: '5a5df08f62cb334487daf4071efb0447', encryptedPassword: 'd7cb0bfa77a609572cf353151c24144c1e15aa44722dd717fdfd56d7bc7f4367'}
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