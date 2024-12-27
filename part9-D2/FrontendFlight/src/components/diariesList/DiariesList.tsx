import { useState } from "react";
import axios from "axios";

import diariesService from "../../services/diaries";
import { DiaryEntry, DiaryFormValues } from "../../type";
import AddDiaryModal from "../addDiaryForm";
import {
  Box,
  Table,
  TableHead,
  Typography,
  TableCell,
  TableRow,
  TableBody,
  Button
} from "@mui/material";

interface Props {
  diaries: DiaryEntry[];
  setDiary: React.Dispatch<React.SetStateAction<DiaryEntry[]>>
}

const DiariesList = ({ diaries, setDiary }: Props) => {

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined)
  }

  const submitNewDiary = async (values: DiaryFormValues) => {
    try {
      console.log("Submitting values:", values);
      const diary = await diariesService.create(values);
      setDiary(diaries.concat(diary));
      setModalOpen(false);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        if (e?.response?.data && typeof e?.response?.data === 'string') {
          const message = e.response.data.replace('Something went wrong. error: ',
          '');
          console.log(message);
          setError(message);
        } else {
          setError('Unrecognized axios error');
        }
      } else {
        console.error('Unknown error', e);
        setError('Unknown error');
      }
    }
  }

  return (
    <div>
      <Box>
        <Typography align="center" variant="h6">
          Diaries list
        </Typography>
      </Box>
      <Table style={{ marginBottom: "1em" }}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Weather</TableCell>
            <TableCell>Visibility</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(diaries).map((diary: DiaryEntry) => (
            <TableRow key={diary.id}>
              <TableCell>{diary.date}</TableCell>
              <TableCell>{diary.weather}</TableCell>
              <TableCell>{diary.visibility}</TableCell>
              <TableCell>{diary.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddDiaryModal
        modalOpen={modalOpen}
        onSubmit={submitNewDiary}
        error={error}
        onClose={closeModal}
      />
      <Button variant='contained' onClick={() => openModal()}>
        Add new diary
      </Button>
    </div>
  );
};

export default DiariesList;
