import { Button, Container, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import "./EditArticle.css"

import { connect } from 'react-redux'
import { Update } from '../../actions/articleAction'


function EditArticle({ updateArticle }) {
    const history = useHistory();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [markdown, setMarkdown] = useState('')
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://blog-mern-backend.herokuapp.com/articles/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title);
                    setDescription(data.description)
                    setMarkdown(data.markdown)
                })
        }
        fetchData();
    }, [id])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const article = { title, description, markdown }

        updateArticle(id, article)

        history.push(`/articles/article/${id}`)
    }


    return (
        <div className="editArticle">
            <Container maxWidth="xl">
                <Typography variant="h2">
                    Edit Article
            </Typography>

                <form onSubmit={handleSubmit} id="my-form" className="editArticle__form" >
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


                <Button type="submit" form="my-form" variant="contained" color="primary" >
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
    updateArticle: Update
}


export default connect(mapStateToProps, mapActionToProps)(EditArticle)
