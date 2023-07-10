interface AppointmentProps {
  costumer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  constructor(props: AppointmentProps) {
    const { startsAt, endsAt } = props;

    if (endsAt <= startsAt) {
      throw new Error("Tá rolando não!");
    }

    this.props = props;
  }

  get costumer() {
    return this.props.costumer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }
}
