import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseInfo = await database.query(`SELECT
    current_setting('server_version') AS server_version,
    current_setting('max_connections') AS max_connections`);

  const databaseName = process.env.POSTGRES_DB;
  const activeConnections = await database.query({
    text: "SELECT count(*) FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  response.status(200).json({
    updated_at: updatedAt,
    database_info: {
      server_version: databaseInfo.rows[0].server_version,
      max_connections: Number(databaseInfo.rows[0].max_connections),
      current_connections: Number(activeConnections.rows[0].count),
    },
  });
}

export default status;
