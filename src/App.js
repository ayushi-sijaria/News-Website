import { BrowserRouter } from 'react-router-dom'
import './App.css';
import NewsWebsite from './containers/NewsWebsite/newsWebsite'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NewsWebsite/>
      </div>
    </BrowserRouter>
  );
}

export default App;
