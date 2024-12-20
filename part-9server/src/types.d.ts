export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}


// Si quisiese tener otro tipo de "interface" sin un dato especifico puedo hacer lo siguiente:

/* 
De esta forma eligo que valor va a tener mi nueva interface:
export type NonSensisitveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

De esta forma directamenta omito el valor que no quiero que tenga mi interface:
*/
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>