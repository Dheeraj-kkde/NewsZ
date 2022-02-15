// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
//   static propTypes = {}

  render() {

    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className="my-3 mx-3">
          <div className="card">
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-secondary" style={{left: '90%', zIndex: '1'}}>{source}</span>
            <img src={imageUrl ? imageUrl : "https://i.gadgets360cdn.com/large/reliance_jio_reuters_1608007225500.jpg" } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author ? author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
           </div>
      </div>
    )
  }
}

export default NewsItem