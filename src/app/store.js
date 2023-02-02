import { configureStore } from "@reduxjs/toolkit";
import { default as topicsReducers } from "../features/topics/topicsSlice"
import {default as quizzesReducers} from "../features/quizzes/quizzesSlice"
import {default as cardsReducers} from '../features/cards/cardsSlice'
import { debounce } from "../components/debounce";
import { loadState, saveState } from "../components/localStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    topics: topicsReducers,
    quizzes: quizzesReducers,
    cards: cardsReducers
  },
  preloadedState: persistedState
});

store.subscribe(
	debounce(() => {
		saveState({
			topics: store.getState().topics,
			quizzes: store.getState().quizzes,
			cards: store.getState().cards,
		});
	}, 1000)
);