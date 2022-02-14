// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
//   static propTypes = {}

  render() {

    let {title, description, imageUrl, newsUrl} = this.props;

    return (
      <div className='my-3'>
          <div className="card" style={{width : '15rem'}}>
            <img src={imageUrl ? imageUrl : "https://i.gadgets360cdn.com/large/reliance_jio_reuters_1608007225500.jpg" } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
           </div>
      </div>
    )
  }
}

export default NewsItem