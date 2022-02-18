/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('projects').insert([
		{
			project_name: 'Mcdonalds',
			project_description: 'Burgers to make and sell',
			project_completed: false,
		},
		{
			project_name: 'Fitness',
			project_description: 'Exercise with class',
			project_completed: true,
		},
		{
			project_name: 'Rock Climbing',
			project_description: 'Teaching people to climb',
			project_completed: false,
		},
	]);
};
