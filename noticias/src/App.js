import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NewsList from './components/NewList'
import NewsDetail from './components/NewsDetails.js'
import { NewsProvider } from './context/NewsContext.js'
import NavigationBar from './NavigationBar.js';

function App() {
  return (
    <NewsProvider>
      <NavigationBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewsList/>}/>
          <Route path='/news/:id' element={<NewsDetail/>}/>
        </Routes>
      </BrowserRouter>
    </NewsProvider>
  );
}

export default App;
