import React, { Component } from 'react';

import axios from 'axios';

import styles from './article.module.css';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      display:false,
      description:props.newsItem.description[0] || props.newsItem.description,
      url:props.newsItem.link[0] || props.newsItem.url,
      pubdate:props.newsItem.pubDate[0] || props.newsItem.pubdate,
      title:props.newsItem.title[0] || props.newsItem.title,
      html:'',
      lovable: true
    };
  }

  save(){
    let objectToSave = {...this.state};
    delete objectToSave.html;
    delete objectToSave.display;
    axios.post('/article', objectToSave).
    then((res)=>{
      this.setState({lovable:false})
    }).
    catch(function(err){
      console.log('Article Not Saved!');
      console.error(err);
    });
  }
  
  loadArticle = () => {
    this.setState({
      display:true
    });
  }
  
  render(){
    if (this.state.display){
      return(
        <div>
          <iframe src={this.state.url} name="targetframe" scrolling="yes" frameborder="1" className={styles.browser}>
          </iframe>
          <div 
            className={styles.savebutton}
            onClick={()=>this.save()}  
          >Love</div>
        </div>
      );
    } else {
      return(
        <div 
          className={styles.small} 
        >
          <div onClick={()=>this.loadArticle()}>
            <h5>{this.state.title}</h5>
            <p>{this.state.description}</p>
          </div>
          { this.state.lovable ? (
            <div 
              className={styles.savebutton}
              onClick={()=>this.save()}  
            >Love</div>
          ) : null }
        </div>
      );
    }
  }
}

export default Article;
