import { Appointment } from "../models/Appointment/Appointment";

interface AppointmentRequest {
  costumer: string;
  startsAt: Date;
  endsAt: Date;
}

type AppointmentResponse = Appointment;

export class CreateAppointmentService {
  async execute({
    costumer,
    startsAt,
    endsAt,
  }: AppointmentRequest): Promise<AppointmentResponse> {
    startsAt = new Date();
    endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 1);

    const app = new Appointment({
      costumer,
      startsAt,
      endsAt,
    });

    return app;
  }
}
