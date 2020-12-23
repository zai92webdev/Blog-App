import { FETCH_ARTICLES, NEW_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from '../actions/types'

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_ARTICLES:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }


        case NEW_ARTICLE:
            return {
                ...state,
                data: [...state.data, action.payload]
            }

        case DELETE_ARTICLE:
            return {
                ...state,
                data: state.data.filter(bug => bug.id !== action.payload)
            }

        case UPDATE_ARTICLE:
            return {
                ...state,
                updated: action.payload
            }



        default:
            return state;
    }
}