import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const selectQuizzes = (state) => {
    return state.quizzes.quizzes
}

export const thunkActionCreator = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId(payload))
    }
}

const { actions, reducer } = quizzesSlice;
export const {addQuiz} = actions;
export default reducer;