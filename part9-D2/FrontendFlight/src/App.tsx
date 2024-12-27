import { useState, useEffect } from "react";
import axios from "axios";

import { apiBaseUrl } from "./constants";
import { DiaryEntry } from "./type";

import diariesServices from "./services/diaries";
import DiariesList from './components/diariesList/DiariesList';

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    axios.get<void>(`${apiBaseUrl}/diaries`);

    const fetchDiariesList = async () => {
      const diary = await diariesServices.getAll();
      setDiaries(diary);
    };
    void fetchDiariesList();
  }, []);

  return (
    <div>
        <DiariesList diaries={diaries} setDiary={setDiaries}/>
    </div>
);
};

export default App;
