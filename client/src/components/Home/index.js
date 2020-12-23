import React, { useEffect } from 'react';
import Articles from "../Articles"
import Navbar from "../Navbar";
import AddBlog from "../AddBlog";
import { sortdData } from "../utils"

import { connect } from 'react-redux'
import { Fetch } from '../../actions/articleAction'
import { useSelector } from 'react-redux'


const Home = ({ fetchArticles }) => {
    const state = useSelector((state) => state.articles.data)

    const sortedData = sortdData(state)

    useEffect(fetchArticles, [])

    return (

        <div>
            <Navbar />
            <AddBlog />

            {
                sortedData.map(article => (
                    <Articles key={article.id} id={article.id} date={article.date} title={article.title} description={article.description} />
                ))
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articlesData: state.articles
    }
}


const mapDispatchToProps = {
    fetchArticles: Fetch
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
