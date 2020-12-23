import { FETCH_ARTICLES, NEW_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from './types'


export const Fetch = () => dispatch => {

    fetch("https://blog-mern-backend.herokuapp.com/articles/")
        .then(res => res.json())
        .then(data => {
            const articles = data.map(data => ({ id: data._id, date: data.updatedAt, title: data.title, description: data.description, markdown: data.markdown }))
            dispatch({
                type: FETCH_ARTICLES,
                payload: articles
            })
        })
}


export const Create = (article) => dispatch => {
    fetch('https://blog-mern-backend.herokuapp.com/articles/save',
        {
            method: 'post',
            body: JSON.stringify(article),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: NEW_ARTICLE,
                payload: article
            })
        })
}

export const Delete = (id) => dispatch => {

    fetch(`https://blog-mern-backend.herokuapp.com/articles/${id}`,
        { method: 'delete' })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: DELETE_ARTICLE,
                payload: id
            })
        })
}


export const Update = (id, article) => dispatch => {
    fetch(`https://blog-mern-backend.herokuapp.com/articles/edit/${id}`,
        {
            method: 'put',
            body: JSON.stringify(article),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: UPDATE_ARTICLE,
                payload: article
            })
        });
}


