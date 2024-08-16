import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public");
}

describe("GET to /api/v1/migrations", () => {
  test("should retun 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations");
    const responseJson = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(responseJson)).toBe(true);
    expect(responseJson.length).toBeGreaterThan(0);
  });
});
