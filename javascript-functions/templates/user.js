function User(password) {
  if (!(this instanceof User)) {
    return new User(password);
  }
  this, (password = password);
}

User("a");
