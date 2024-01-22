import databade from "../../../../infra/database.js";

async function status(request, response) {
  const result = await databade.query("SELECT 1 + 1 as SUM;");
  console.log(result.rows);
  response.status(200).json({ status: "200" });
}

export default status;
