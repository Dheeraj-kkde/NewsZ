import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: 'general'
  }
  
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

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
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df43e58beec94ff68e70c29c333f08c1&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      })
    }

    handlePrevClick = async () => {

      // console.log("Previous");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df43e58beec94ff68e70c29c333f08c1&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      let data = await fetch(url);
      let parsedData = await data.json();  
      this.setState({
        page : this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      })

    }

    handleNextClick = async () => {
      // console.log("Next");

      if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
      {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df43e58beec94ff68e70c29c333f08c1&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page : this.state.page + 1,
          articles: parsedData.articles,
          loading: false
        })
      }
    }

  render() {
    return (
      <div className='newsComponentContainer my-3 mx-5'>
        <h1 className="text-center" style={{margin: '35px'}}>NewsZ - Top Headlines</h1>
        { this.state.loading && <Spinner /> }
        <div className="row text-center">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>   
                <NewsItem  title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })} 
        </div>
        <div className="pagesContainer d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>  
      </div>   
    )
  }
}

export default News