/* eslint-disable global-require */
import { Audio } from "expo-av";

export async function playSound(songName: string): Promise<void> {
  const songsPath = {
    correctSong: require("../assets/correctSong.mp3"),
    wrongSong: require("../assets/wrongSong.mp3"),
    finishedGame: require("../assets/finishedGame.mp3"),
  };

  const { sound } = await Audio.Sound.createAsync(songsPath[songName]);
  await sound.playAsync();
}
