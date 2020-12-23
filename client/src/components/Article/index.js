import { Button, Container, Typography, Card, CardContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import "./Article.css"

function Article() {
    const history = useHistory();
    const [article, setArticle] = useState('')
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://blog-mern-backend.herokuapp.com/articles/${id}`)
                .then(res => res.json())
                .then(data => {
                    setArticle(data);
                })
        }
        fetchData();
    }, [id])

    const myDates = new Date(article.updatedAt);
    const myDate = myDates.getFullYear() + "/" + (myDates.getMonth() + 1) + "/" + myDates.getDate()


    const handlerEdit = (e) => {
        const idArticle = e.currentTarget.value;

        history.push(`/articles/edit/${idArticle}`)
    }

    return (
        <div className="article">
            <Container maxWidth="lg">
                <Typography style={{ marginBottom: '1rem' }} variant="h1">
                    {article.title}
                </Typography>

                <Typography variant="subtitle1">
                    {myDate}
                </Typography>

                <Button onClick={() => history.push("/")} style={{ margin: '1rem 1rem 1rem 0' }} variant="contained">All Articles</Button>
                <Button value={id} onClick={handlerEdit} style={{ margin: '1rem 1rem 1rem 0' }} variant="contained">Edit</Button>

                <Card>
                    <CardContent>
                        <Typography>
                            {article.markdown}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

        </div>
    )
}

export default Article
