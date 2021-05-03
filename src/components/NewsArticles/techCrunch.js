import React, { useState, useEffect } from 'react'
import './newsArticles.css'
import Article from '../Article/article'
import axios from '../../axios'
import Spinner from '../UI/Spinner/Spinner'
import ErrorModal from '../UI/ErrorModal/ErrorModal'
const TechNewsArticles = () =>
 {
      const [news, setNews] = useState([])
      const [isLoading, setIsLoading] = useState(false)
      const [error, setError] = useState('')
      useEffect(() =>{
          setIsLoading(true)
          axios.get('/top-headlines?sources=techcrunch&apiKey=9f912effda464f639b6b0ba2079d6ba3')
                    .then(response => {
                         const newsResponse = response.data.articles.slice(0,8);
                         console.log(newsResponse);
                         setNews(newsResponse)
                         console.log(news)
                         setIsLoading(false)
                    })
                    .catch(error => {
                         setError('Something went wrong! Try after sometime.')
                    })
      }, [] );

      const clearError = () =>{
           setError(null)
           setIsLoading(false)
      }
      
      const newsArticles = news.map((n) => {
          return <Article 
                    key = {n.title?n.title:'Not available'}
                    title = {n.title?n.title:'Not available'} 
                    description ={n.description?n.description:'Not available'} 
                    source = {n.urlToImage?n.urlToImage:'Not available' }
                    publishedAt = {n.publishedAt?n.publishedAt:'Not available'}
                    author = {n.author?n.author:'Not available'}
                    url = {n.url?n.url:'Not available'}
          />
     })

          return (
               <section className='Category'>
                    {isLoading && <Spinner/>}
                    {error && <ErrorModal onClose = {clearError}>{error}</ErrorModal>}
                         {newsArticles}
               </section>
          )
     }


export default TechNewsArticles