import express from 'express';
import Todo from '../models/Todo.js';

const router = express.Router();

router.post('/', async(req, res)=>{
    try {
        const {text} = req.body;
        const todo = await Todo.create(text);
        res.json(todo);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.get('/', async(req, res)=>{
    try {
        const todos = await Todo.getAll();
        res.json(todos);
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const updates = req.body;
        const todo = await Todo.update(id, updates);
        if(!todo){
            return res.status(404).json({message: 'Todo not found'});
        }
        res.json(todo);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.delete('/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const todo = await Todo.delete(id);
        if(!todo){
            return res.status(404).json({message: 'Todo not found'});
        }
        res.json(todo);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

export default router;