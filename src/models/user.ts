export class User {
  constructor(
    public name: string,
    public username: string,
    public lastname: string,
    public email: string,
    public password: string,
    public phone: string
  ) {
  }
}

export class Auth {
  constructor(
    public username: string,
    public password: string,
  ) {
  }
}