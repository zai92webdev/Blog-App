import { Button, Container, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./NewArticles.css";

import { connect } from 'react-redux'
import { Create } from '../../actions/articleAction'

function NewArticles({ newArticle }) {
    const history = useHistory();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [markdown, setMarkdown] = useState('')
    const[loading,setLoading] =useState(false)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const article = { title, description, markdown };
        newArticle(article)
        history.push('/')   
    }


    return (
        <div className="newArticles">
            <Container maxWidth="xl">
                <Typography variant="h2">
                    New Article
            </Typography>

                <form onSubmit={handleSubmit} id="my-form" className="newArticles__form">
                    <label>Title</label>
                    <input required value={title} onChange={(e) => { setTitle(e.target.value) }} />

                    <label>Description</label>
                    <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} required rows="3" />

                    <label>Markdown</label>
                    <textarea value={markdown} onChange={(e) => { setMarkdown(e.target.value) }} required rows="7" />
                </form>


                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" style={{ margin: '1rem' }}>
                        Cancel
            </Button>
                </Link>

                <Button disabled={loading} type="submit" form="my-form" variant="contained" color="primary" >
                    Save
            </Button>


            </Container>

        </div>
    )
}


const mapStateToProps = state => {
    return {
        articlesData: state.articles
    }
}

const mapActionToProps = {
    newArticle: Create
}

export default connect(mapStateToProps, mapActionToProps)(NewArticles)
