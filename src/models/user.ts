export class User {
  constructor(
    public name: string,
    public username: string,
    public lastName: string,
    public email: string,
    public password: string,
    public phone: string,

    public id?: number,
    public authorities?: authorities[],

    public enabled?: boolean

  ) {
  }
}

interface authorities {
    authority: string;
}

export class Auth {
  constructor(
    public username: string,
    public password: string,
  ) {
  }
}