import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer.js'

const rootReducer = combineReducers({
    articles: articlesReducer
})

export default rootReducer