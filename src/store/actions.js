import { ANSWER_QUESTION, UPDATE_PROGRESS, LOAD_DATA, RESTART } from './actionTypes';

export const answerQuestion = (answer, pageIndex, sectionIndex, questionIndex) => ({
    type: ANSWER_QUESTION,
    payload: { answer, pageIndex, sectionIndex, questionIndex}
})

export const updatePage = (pageIndex) => ({
    type: UPDATE_PROGRESS,
    payload: pageIndex
})

export const loadDataAction = (data) => ({
    type: LOAD_DATA,
    payload: data
})

export const restart = () => ({ type: RESTART });