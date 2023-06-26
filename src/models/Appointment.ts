export class Appointment {
  private costumer: string;
  private startsAt: Date;
  private endsAt: Date;

  constructor(costumer: string, startsAt: Date, endsAt: Date) {
    this.costumer = costumer;
    this.startsAt = startsAt;
    this.endsAt = endsAt;
  }
}
