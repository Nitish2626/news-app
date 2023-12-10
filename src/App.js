import News from './components/news/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/navigation-bar/Navigation";
import Sidebar from './components/side-bar/Sidebar';
import { useState} from 'react';
import Search from './components/search bar/Search';
import Country from './components/select country/Country';

function App() {

  const [search, setSearch] = useState("");
  const [showCountry, setShowCountry] = useState(true);
  const [countryCode, setCountryCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSearch = (s) => {
    setSearch(s);
  }

  const hideCountry = (h) => {
    setShowCountry(h);
  }

  const setCode = (c) => {
    setCountryCode(c);
  }

  const selectCountry = (c) => {
    setSelectedCountry(c);
  }

  return (
    <div id="app">

      {showCountry ? <Country hide={hideCountry} code={setCode} country={selectCountry} /> :

        <Router>

          <Navigation show={hideCountry} func={setShowSidebar} />

          <Search search={handleSearch} value={search} selected={selectedCountry} />

          <Sidebar show={showSidebar} />

          <Routes>

            <Route path="/" element={<News key="general" country={countryCode} category="general" search={search} />}></Route>

            <Route path="/health" element={<News key="health" country={countryCode} category="health" search={search} />}></Route>

            <Route path="/science" element={<News key="science" country={countryCode} category="science" search={search} />}></Route>

            <Route path="/technology" element={<News key="technology" country={countryCode} category="technology" search={search} />}></Route>

            <Route path="/business" element={<News key="business" country={countryCode} category="business" search={search} />}></Route>

            <Route path="/entertainment" element={<News key="entertainment" country={countryCode} category="entertainment" search={search}/>}></Route>

            <Route path="/sports" element={<News key="sports" country={countryCode} category="sports" search={search} />}></Route>

          </Routes>

        </Router>
        
      }

    </div>
  );
}

export default App;
