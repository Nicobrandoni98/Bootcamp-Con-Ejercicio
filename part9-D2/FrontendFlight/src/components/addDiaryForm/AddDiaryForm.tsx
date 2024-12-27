import { useState, SyntheticEvent } from "react";

import {
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Button,
  SelectChangeEvent,
} from "@mui/material";

import { DiaryFormValues, Weather, Visibility } from "../../type";

interface Props {
  onCancel: () => void;
  onSubmit: (values: DiaryFormValues) => void;
}

interface WeatherOption {
  value: Weather;
  label: string;
}

interface VisibilityOption {
  value: Visibility;
  label: string;
}

const weatherOptions: WeatherOption[] = Object.values(Weather).map((v) => ({
  value: v,
  label: v.toString(),
}));

const visibilityOptions: VisibilityOption[] = Object.values(Visibility).map(
  (v) => ({
    value: v,
    label: v.toString(),
  })
);

const AddDiaryForm = ({ onCancel, onSubmit }: Props) => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Ok);
  const [comment, setComment] = useState('');

  const onWeatherChange = (event: SelectChangeEvent<string>) => {
    setWeather(event.target.value as Weather);
  };
  const onVisibilityChange = (event: SelectChangeEvent<string>) => {
    setVisibility(event.target.value as Visibility);
  };

  const addDiary = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit({
      date,
      weather,
      visibility,
      comment,
    });
  };

  return (
    <div>
      <form onSubmit={addDiary}>
        <TextField
          type="date"
          fullWidth
          value={date}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={({ target }) => setDate(target.value)}
        />
        <TextField
          label="comment"
          fullWidth
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <InputLabel style={{ marginTop: 20 }}>Weather</InputLabel>
        <Select
          label="Weather"
          fullWidth
          value={weather}
          onChange={onWeatherChange}
        >
          {weatherOptions.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>

        <InputLabel style={{ marginTop: 20 }}>Visibility</InputLabel>
        <Select
          label="visibility"
          fullWidth
          value={visibility}
          onChange={onVisibilityChange}
        >
          {visibilityOptions.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>

        <Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: "left" }}
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                float: "right",
              }}
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddDiaryForm;
