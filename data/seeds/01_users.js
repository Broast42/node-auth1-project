
exports.seed = async function(knex) {
  await knex("users").insert([
    {name: "Admin", password: "nonhashedseededpass"}
  ])
};
