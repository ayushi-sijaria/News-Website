Welcome to THE TIMES website !!!

To execute the project:
1. Open git bash.
2. Run command : <git clone https://github.com/ayushi-sijaria/NewsWebsite.git>
3. Navigate into project folder using and run <npm install>.
4. Run command <npm start>.

A new tab will open in your browser <http://localhost:3000> which will run the application in your machine.

The UI is developed with the help of ReactJS.
Only functional component and hooks are used for implementation.
No class based component is used.

News api source used: https://newsapi.org

>>The website allows you to navigate to different categories and read related news articles.
>>Till the time response is fetched from source, user will see a spinner and after that articles will be arranged in there respective cards. 
>>User can click on 'Read more' link to navigate to detailed news article page. This is implemented using Routing feature.
>>When the application starts at <http://localhost:3000>, user will be redirected to <http://localhost:3000/apple>. This is achived using Redirect feature.
>>If there is any error while fetching response, and error modal will appear.
>>If image is not loaded properly, alternate text will be displayed.
>>If any attribute has null value then that field will will appear as 'Not available' for that news article card. 
>>Card will be highlighted on hovering on hovering.
>>Links will be highlighted on hovering on hovering.
>>'Read more' option will be highlighted on hovering.
>>We have used an HOC 'Auxiliary' as a wrapper component.
>>In header last updated date-time will be displayed(it will shoe the date-time of last refresh os the page)
>>A footer is set for the website.

NOTE: 
To check the ErrorModal case, make some random change in api of any of the HTTP request.

>>Please contact me if facing any issues in loading the application.