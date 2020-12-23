import React from 'react'
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function AddBlog() {
    return (
        <div className="app__section">
            <Typography variant="h1">
                Blog Articles
            </Typography>

            <Link to="/articles/new" style={{ textDecoration: 'none' }} >
                <Button variant="contained" color="primary"> New Article</Button>
            </Link>

        </div>

    )
}

export default AddBlog
