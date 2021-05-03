import React from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './newsWebsite.css'
import Apple from '../../components/NewsArticles/apple'
import TechCrunch from '../../components/NewsArticles/techCrunch'
import TheUS from '../../components/NewsArticles/theUS'
import WallStreetJournal from '../../components/NewsArticles/wallStreetJournal'

const NewsWebsite = () => {       
     let current = new Date();
     let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
     let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      return (
          <div>
               <p style={{color: '#fa923f', textAlign: 'right', margin: '0'}}>Last updated: {cDate+ ' ' + cTime}</p>
               <header>                         
                    <h1 className='Heading'>The Times</h1>                         
                    <nav className='Navi'>
                         <ul>
                              <li><NavLink to='/apple'>Apple</NavLink></li>
                              <li><NavLink to='/the-US'>US Top Stories</NavLink></li>
                              <li><NavLink to='/techcrunch'>TechCrunch</NavLink></li>
                              <li><NavLink to='/wall-street-journal'>Wall Street Journal</NavLink></li>
                         </ul>
                    </nav>
               </header>
               <Switch>
                    <Route path='/apple' component={Apple}/>
                    <Route path='/the-US' component={TheUS}/>
                    <Route path='/techcrunch' component={TechCrunch}/>
                    <Route path='/wall-street-journal' component={WallStreetJournal}/>
                    <Redirect from = '/' to='/apple'/>
               </Switch>

               <footer className='WebFooter'>
               Copyright © 2021 Bennett, Coleman & Co. Ltd. All rights reserved. For reprint rights: Times Syndication Service
               </footer>
          </div>
     )
}
export default NewsWebsite

