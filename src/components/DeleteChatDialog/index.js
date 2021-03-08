import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@material-ui/core";
import {useCallback} from "react";

const DeleteChatDialog = ({visible, onClose, onSubmit, value}) => {

    const handleSubmit = useCallback(() => {
        onSubmit(value);
    }, [onSubmit, value]);

    return (
        <Dialog open={visible}>
            <DialogTitle id="form-deleteDialog-title">Удалить чат?</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Нет
                </Button>
                <Button onClick={onSubmit} color="primary">
                    Да
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteChatDialog