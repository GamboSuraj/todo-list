import { useState } from 'react';
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <TextField
                id="outlined-basic"
                label="New Todo"
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                sx={{ mr: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
        </Box>
    );
}
