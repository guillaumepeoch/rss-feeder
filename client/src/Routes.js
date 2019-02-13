import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from './components/home/Home';
import News from './components/news/News';
 // import SavedArticle from './components/saved_articles/SavedArticles';


import Layout from './hoc/layout/Layout';

const Routes = (props) => {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={News} />
          <Route {...props} path='/News/:id' exact component={News} />
          {/* <Route {...props} path='/Saved/Articles' exact component={SavedArticle} /> */}
        </Switch>
      </Layout>
    );
}

export default Routes
