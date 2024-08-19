import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public");
}

describe("DELETE to /api/v1/migrations", () => {
  test("should retun 200", async () => {});
});
