function User(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}
