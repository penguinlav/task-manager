import { schema } from 'normalizr';

export const user = new schema.Entity('users');
export const project = new schema.Entity('projects');
export const task = new schema.Entity('tasks', {
    assign_to: user,
    author: user,
    project,
});
