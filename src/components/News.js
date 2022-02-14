// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
//   static propTypes = {}

    constructor(){
        super();
        // console.log("hello i am a constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
      // console.log("componentDidMount run after render");
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=df43e58beec94ff68e70c29c333f08c1&page=1&pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults
      })
    }

    handlePrevClick = async () => {
        console.log("Previous");

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=df43e58beec94ff68e70c29c333f08c1&page=${this.state.page -1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
  
      this.setState({
        page : this.state.page - 1,
        articles: parsedData.articles
      })

    }

    handleNextClick = async () => {
      console.log("Next");

      if(this.state.page +1 > Math.ceil(this.state.totalResults/20))
      {

      }else{

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=df43e58beec94ff68e70c29c333f08c1&page=${this.state.page +1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);

      this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles
      })
      }
    }

  render() {
    return (
      <div className='newsComponentContainer my-3 mx-5'>
        <h1>NewsZ - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>   
                <NewsItem  title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })} 
        </div>
        <div className="pagesContainer d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>  
      </div>   
    )
  }
}

export default News