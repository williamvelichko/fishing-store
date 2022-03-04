exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable();
      users.string("password", 200).notNullable();
      users.timestamps(false, true);
    })
    .createTable("fishing-items", (tbl) => {
      tbl.increments("item_id");
      tbl.string("name", 200).notNullable();
      tbl.string("description", 200).notNullable();
      tbl.decimal("price").notNullable();
      tbl.integer("rating").notNullable();
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("fishing-items");
};
