interface AppointmentProps {
  costumer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  constructor(props: AppointmentProps) {
    this.props = props;
  }

  get costumer() {
    return this.costumer;
  }

  set costumer(value) {
    this.props.costumer = value;
  }

  get startsAt() {
    return this.startsAt;
  }

  set startsAt(value) {
    this.props.startsAt = value;
  }

  get endsAt() {
    return this.endsAt;
  }

  set endsAt(value) {
    this.props.endsAt = value;
  }
}
