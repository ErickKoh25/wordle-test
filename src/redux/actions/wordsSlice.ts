import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getDictionaryOfWords } from "@/app/commons/helpers"

interface InitialState {
    words: Array<String>;
    firstLoad: boolean;
    currentWord: String;
    attempts: Array<String>
    currentAttempt: number;
    played: number;
    won: number;
};

const initialState: InitialState = {
    firstLoad: true,
    words: getDictionaryOfWords(),
    currentWord: '',
    attempts: new Array(6).fill(0),
    currentAttempt: 0,
    played: 0,
    won: 0,
}
export const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        setDisabledFirstLoad: (state, action: PayloadAction<boolean>) => {
            state.firstLoad = action.payload;
        },
        setCurrentWord: (state) => {
            state.currentWord = state.words[Math.floor(Math.random() * state.words.length)].toUpperCase();
        },
        setCurrentAttempt: (state, action: PayloadAction<number>) => {
            state.currentAttempt = action.payload
        },
        updateAttempts: (state, action: PayloadAction<String>) => {
            state.attempts = [...state.attempts.map((attempt, i) => { return i === state.currentAttempt ? action.payload : attempt })]
        },
        incrementWon: (state) => {
            state.won = state.won + 1;
        },
        incrementPlayed: (state) => {
            state.played = state.played + 1;
        },
        removeWord: (state, action: PayloadAction<String>) => {
            state.words = state.words.filter(word => word != action.payload);
        },
        reset: (state) => {
            state.attempts = new Array(6).fill(0);
            state.currentAttempt = 0;
            state.currentWord = state.words[Math.floor(Math.random() * state.words.length)].toUpperCase();
        }
    }
});

export const { removeWord, reset, setDisabledFirstLoad, setCurrentWord, setCurrentAttempt, updateAttempts, incrementWon, incrementPlayed} = wordsSlice.actions

export default wordsSlice.reducer;