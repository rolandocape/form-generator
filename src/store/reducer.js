import { set } from 'lodash';
import { ANSWER_QUESTION, UPDATE_PROGRESS, RESTART, LOAD_DATA } from './actionTypes';

const initialState = {
    pageIndex: 0,
    pages: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                pages: action.payload
            }
        case ANSWER_QUESTION:
            const { answer, pageIndex, sectionIndex, questionIndex } = action.payload;
            const { pages } = state;
            const page = pages[pageIndex];
            set(page, ['Sections', `${sectionIndex}`, 'Questions', `${questionIndex}`, 'answer'], answer);

            const newPage = {
                ...page,
            }
            pages[pageIndex] = newPage;
            return {
                ...state,
                pages
            }
        case UPDATE_PROGRESS:
            return {
                ...state,
                pageIndex: action.payload
            }
        case RESTART:
            return initialState;
        default:
            return state;
    }
}

export default reducer;