/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("fishing-items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("fishing-items").insert([
        {
          name: "Diawa Tatula",
          description: "The fastest, the smoothest, the best",
          price: 150.0,
          rating: 5,
          image:
            "https://images.unsplash.com/photo-1625982503493-0b08b284b85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZpc2hpbmclMjByZWVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
      ]);
    });
};
