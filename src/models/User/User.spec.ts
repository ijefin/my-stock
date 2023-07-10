import { expect, test } from "vitest";
import { User } from "./User";

test("Create a user", () => {
  const user = new User({
    name: "Jeff",
    email: "jeffersonmecmiler@hotmail.com",
  });

  expect(user).instanceOf(User);
  expect(user.email).contains("@hotmail.com");
});

test("Email should have a @hotmail.com", () => {
  new User({
    name: "Jeff",
    email: "jeffersonmecmiler@hotmail.com",
  });
});
