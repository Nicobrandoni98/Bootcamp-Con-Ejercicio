import axios from 'axios';
import { DiaryEntry, DiaryFormValues } from '../type';

import { apiBaseUrl } from '../constants';

const baseUrl = "http://localhost:3000/api/diaries";

const getAll = async () => {
    const {data} = await axios.get<DiaryEntry[]>(
        `${apiBaseUrl}/diaries`,
    );
    return data;
};

const create = async (newDiary: DiaryFormValues): Promise<DiaryEntry> => {
    const response = await axios.post(baseUrl, newDiary);
    return response.data;
  };

export default {
    getAll,
    create
};