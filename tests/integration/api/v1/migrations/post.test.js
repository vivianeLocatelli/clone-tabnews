import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public");
}

describe("POST to /api/v1/migrations", () => {
  test("should retun 201", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "POST",
    });

    const responseJson = await response.json();

    expect(response.status).toBe(201);
    expect(Array.isArray(responseJson)).toBe(true);
    expect(responseJson.length).toBeGreaterThan(0);
  });
  test("should retun 200", async () => {
    const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "POST",
    });

    const responseJson2 = await response2.json();

    expect(response2.status).toBe(200);
    expect(Array.isArray(responseJson2)).toBe(true);
    expect(responseJson2.length).toBe(0);
  });
});
