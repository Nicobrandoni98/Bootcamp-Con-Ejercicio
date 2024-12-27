import { Dialog, DialogTitle, DialogContent, Divider, Alert } from '@mui/material';

import AddDiaryForm from "./AddDiaryForm";
import { DiaryFormValues } from "../../type";

interface Props {
    modalOpen: boolean;
    onClose: () => void;
    onSubmit: (values: DiaryFormValues) => void;
    error?: string;
}

const AddDiaryModal = ({ modalOpen, onClose, onSubmit, error}: Props) => (
    <Dialog fullWidth={true} open={modalOpen} onClose={() => onClose()}>
        <DialogTitle>Add a new diary</DialogTitle>
        <Divider />
        <DialogContent>
            {error && <Alert severity='error'>{error}</Alert>}
            <AddDiaryForm onSubmit={onSubmit} onCancel={onClose}/>
        </DialogContent>
    </Dialog>
)

export default AddDiaryModal;
