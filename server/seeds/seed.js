const db = require("../config/connection");
const { Tech } = require("../models");

const techData = require("./techData.json");

db.once("open", async () => {
  await db.dropDatabase();

  await Tech.insertMany(techData);

  console.log("Technologies seeded!");
  process.exit(0);
});
