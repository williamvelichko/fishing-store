const db = require("./../data/db-config");

async function getItems() {
  const result = await db("fishing-items");
  return result;
}
async function getItemById(item_id) {
  const result = await db("fishing-items").where("item_id", item_id).first();
  return result;
}

module.exports = {
  getItems,
  getItemById,
};
