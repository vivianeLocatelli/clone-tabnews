import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public");
}

describe("DELETE to /api/v1/migrations", () => {
  test("should retun 405 with error message", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "DELETE",
    });
    const responseJson = await response.json();

    expect(response.status).toBe(405);
    expect(responseJson.error).toBe('Method "DELETE" not allowed');
  });
});
