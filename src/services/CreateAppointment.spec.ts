import { describe, it, expect } from "vitest";
import { CreateAppointmentService } from "./CreateAppointmentService";
import { Appointment } from "../models/Appointment/Appointment";

describe("Create Appointment ", () => {
  const startsAt = new Date();
  const endsAt = new Date();
  endsAt.setDate(endsAt.getDate() + 1);

  it("Should create an Appointment", () => {
    const SystemUnderTest = new CreateAppointmentService();

    expect(
      SystemUnderTest.execute({
        costumer: "Jeff",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});

