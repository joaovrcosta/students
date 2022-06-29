export class StudentDTO {
  constructor(
    public id: string,
    public username: string,
    public email: string,
    public avatar?: string
  ) {}
}
