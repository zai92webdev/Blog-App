import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewArticles from './components/NewArticles';
import Home from './components/Home';
import Article from './components/Article';
import EditArticle from "./components/EditArticle"

import { Provider } from 'react-redux'
import store from './store';


function App() {

  const NotFoundPage = () => {
    return <h1>not found page</h1>
  }

  return (
    <Provider store={store}>
      <div className="App">

        <Router>
          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/articles/new">
              <NewArticles />
            </Route>

            <Route path="/articles/create">
              <NewArticles />
            </Route>

            <Route path="/articles/article/:id">
              <Article />
            </Route>

            <Route path="/articles/edit/:id">
              <EditArticle />
            </Route>

            <Route path="*" component={NotFoundPage} />

          </Switch>
        </Router>


      </div>

    </Provider>


  );
}

export default App;
