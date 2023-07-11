export interface UserProps {
  name: string;
  email: string;
}

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = props;

    const { name } = props;

    if (!name) {
      throw new Error("Nome inválido");
    }
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }
}
