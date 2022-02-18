/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('tasks').insert([
		{
			task_description: 'This is the description 1',
			task_notes: 'This is the notes',
			task_completed: false,
			project_id: 1,
		},
		{
			task_description: 'This is the description 2',
			task_notes: 'This is the notes',
			task_completed: true,
			project_id: 3,
		},
		{
			task_description: 'This is the description 3',
			task_notes: 'This is the notes',
			task_completed: true,
			project_id: 2,
		},
	]);
};
