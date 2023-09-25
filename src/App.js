import './App.css';
import News from './components/news/News';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navigation from "./components/navigation-bar/Navigation";
import Sidebar from './components/side-bar/Sidebar';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {

  const [progress,setProgress]=useState();
  const [click,setClick]=useState(false);

  const handleProgress=(prog)=>{
    setProgress(prog);
  }

  const handleCLick=(cli)=>{
    setClick(cli);
  }
  
  return (
    <Router>
      <Navigation />
      <Sidebar click={handleCLick} />
      <LoadingBar color='white' progress={progress} />
      <Routes>

        <Route path="/" element={<News key="general" country="in" category="general" progress={handleProgress} click={click} />}></Route>

        <Route path="/health" element={<News key="health" country="in" category="health" progress={handleProgress} click={click} />}></Route>

        <Route path="/science" element={<News key="science" country="in" category="science"progress={handleProgress} click={click} />}></Route>

        <Route path="/technology" element={<News key="technology" country="in" category="technology" progress={handleProgress} click={click} />}></Route>

        <Route path="/business" element={<News key="business" country="in" category="business" progress={handleProgress} click={click} />}></Route>

        <Route path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" progress={handleProgress} click={click} />}></Route>

        <Route path="/sports" element={<News key="sports" country="in" category="sports" progress={handleProgress} click={click} />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
