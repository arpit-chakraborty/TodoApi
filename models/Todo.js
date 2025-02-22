import pool from '../db/db.js';

const Todo = {
    async getAll(){
        const result = await pool.query('SELECT * FROM todos');
        return result.rows;
    },

    async create(text){
        const query = 'INSERT INTO todos (text) VALUES ($1) RETURNING *';
        const value = [text];
        const {rows} = await pool.query(query, value);
        return rows[0];
    },

    async update(id, modification){
        const {text, completed} = modification;
        const query = 'UPDATE todos SET text = $1, completed = $2 WHERE id = $3 RETURNING *';
        const value = [text, completed, id];
        const {rows} = await pool.query(query, value);
        return rows[0];
    },

    async delete(id){
        const query = 'DELETE FROM todos WHERE id = $1 RETURNING *';
        const {rows} = await pool.query(query, [id]);
        return rows[0];
    },
};

export default Todo;