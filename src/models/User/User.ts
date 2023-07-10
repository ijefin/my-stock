export interface UserProps {
  name: string;
  email: string;
}

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = props;

    const { name, email } = props;

    if (!name) {
      throw new Error("Nome inválido");
    }

    if (!email.includes("@hotmail.com")) {
      throw new Error("Email Inválido!");
    }

    return;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }
}
