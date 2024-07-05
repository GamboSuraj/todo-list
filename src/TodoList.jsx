import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const initialTodos = [
    { id: 1, text: "walk the dog", completed: false },
    { id: 2, text: "walk the cat", completed: false },
    { id: 3, text: "walk the fish", completed: true },
    { id: 4, text: "walk the chickens", completed: true }
];

export default function TodoList() {
    const [todos, setTodos] = useState(() => {
        // Get todos from local storage or use initialTodos
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : initialTodos;
    });

    useEffect(() => {
        // Save todos to local storage whenever todos state changes
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleToggle = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Paper sx={{ width: '100%', maxWidth: 480, p: 3 }} elevation={4}>
                <Typography variant="h4" align="center" gutterBottom>
                    Todo List
                </Typography>
                <TodoForm addTodo={addTodo} />
                <List>
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleToggle={handleToggle}
                            removeTodo={removeTodo}
                        />
                    ))}
                </List>
            </Paper>
        </Box>
    );
}
