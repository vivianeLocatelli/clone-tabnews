beforeAll(async () => {
  response = await fetch("http://localhost:3000/api/v1/status");
  responseJson = await response.json();
});

describe("GET to /api/v1/status", () => {
  test("should retun 200", () => {
    expect(response.status).toBe(200);
  });
  test("should contain updated date", () => {
    expect(responseJson.updated_at).toBeDefined();

    const parseUpdatedAt = new Date(responseJson.updated_at).toISOString();
    expect(responseJson.updated_at).toEqual(parseUpdatedAt);
  });
  test("database should return valid values", () => {
    expect(responseJson.database_info).toBeDefined();
    expect(responseJson.database_info.server_version).toMatch(/16.0/);
    expect(responseJson.database_info.max_connections).toBe(100);
    expect(responseJson.database_info.current_connections).toEqual(1);
  });
});
