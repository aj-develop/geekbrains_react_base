import React, {useState, useCallback} from "react";
import {
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@material-ui/core";

const AddChatDialog = ({visible, onClose, onSubmit}) => {

    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handleSubmit = useCallback(() => {
        onSubmit(value);
    }, [onSubmit, value]);

    return (
        <Dialog open={visible}>
            <DialogTitle id="form-dialog-title">Добавить чат</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Имя"
                    type="text"
                    fullWidth
                    value={value}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddChatDialog