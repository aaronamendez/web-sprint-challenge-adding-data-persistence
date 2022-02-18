/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('resources').insert([
		{
			resource_name: 'Earth',
			resource_description: 'Making Rocks',
		},
		{
			resource_name: 'Fire',
			resource_description: 'Avatar Stuff',
		},
		{
			resource_name: 'Avatar',
			resource_description: 'Air and water stuff',
		},
	]);
};
