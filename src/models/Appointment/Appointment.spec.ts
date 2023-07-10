import { describe, expect, it, test } from "vitest";
import { Appointment } from "./Appointment";

test("Create an appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() + 3);

  const appointment = new Appointment({
    costumer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).instanceOf(Appointment);
  expect(appointment.costumer).toEqual("John Doe");
});

test("End date cannot be less than start date", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() + 1);

  new Appointment({
    costumer: "John Doe",
    startsAt,
    endsAt,
  });
});
