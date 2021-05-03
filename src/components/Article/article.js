import React from 'react'
import './article.css'

const Article = props => (
     
     <article className='Article' >
          <img src = {props.source} alt = "Can't be loaded"></img>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <a href={props.url}>Read more</a>            
          <footer>
          <hr/>
          <p style={{color: 'red', textAlign: 'left', margin: '0'}}>Published At: {props.publishedAt}</p>  
          <p style={{color: 'red', textAlign: 'left', margin: '0'}}>By: {props.author}</p>
          </footer>
     </article>
    
     
)

export default Article

