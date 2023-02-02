import { createSlice } from '@reduxjs/toolkit'

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
            state.topics[action.payload.id].quizIds = []
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id)
        }
    }   
});

export const selectTopics = (state) => {
    return state.topics.topics
}

const {actions, reducer} = topicsSlice;
export const {addTopic, addQuizId} = actions;
export default reducer;