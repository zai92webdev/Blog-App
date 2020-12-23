import { Button, Container, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import './Articles.css'

import { connect } from 'react-redux'
import { Delete, Fetch } from '.././actions/articleAction'



function Articles({ deleteArticle, title, description, id, date }) {
    const history = useHistory();

    const handler = (e) => {
        const idArticle = e.currentTarget.value;
        history.push(`/articles/article/${idArticle}`)
    }

    const handlerEdit = (e) => {
        const idArticle = e.currentTarget.value;
        history.push(`/articles/edit/${idArticle}`)
    }

    const handlerDelete = (e) => {
        const id = e.currentTarget.value;
        if (window.confirm('Are you sure want to delete'))
            deleteArticle(id);
    }

    const myDates = new Date(date);
    const myDate = myDates.getFullYear() + "/" + (myDates.getMonth() + 1) + "/" + myDates.getDate()


    return (
        <Container maxWidth="xl" className="articles">
            <Paper className="articles__card" elevation={3} >
                <Typography style={{ margin: '1rem 0' }} variant="h4">
                    {title}
                </Typography  >

                <Typography variant="subtitle1">
                    {myDate}
                </Typography>

                <Typography style={{ margin: '1rem 0' }} variant="subtitle1">
                    {description}
                </Typography>


                <Button value={id} onClick={handler} style={{ marginRight: '1rem' }} variant="contained" color="secondary">Read More</Button>

                <Button value={id} onClick={handlerEdit} style={{ marginRight: '1rem' }} variant="contained" color="primary">Edit</Button>

                <Button value={id} onClick={handlerDelete} style={{ marginRight: '1rem' }} variant="contained" color="default">Delete</Button>
            </Paper>

        </Container>
    )
}

const mapStateToProps = state => {
    return {
        articlesData: state.articles
    }
}

const mapActionToProps = {
    deleteArticle: Delete,
    fetchArticles: Fetch

}

export default connect(mapStateToProps, mapActionToProps)(Articles)
