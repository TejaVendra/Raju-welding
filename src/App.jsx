import './App.css';
import Home from './pages/Home';
import DesignCategory from './components/DesignCategory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelectorPopup from './components/LanguageSelectorPopup';
import ScrollToTop from './components/ScrollToTop'; // 👈 import

function App() {
  const { i18n } = useTranslation();
  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    } else {
      setShowSelector(true);
    }
  }, [i18n]);

  const handleLanguageSelect = (lang) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
    setShowSelector(false);
  };

  if (showSelector) {
    return <LanguageSelectorPopup onSelect={handleLanguageSelect} />;
  }

  return (
    <Router>
        <ScrollToTop /> {/* 👈 place it inside Router but outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs/:category" element={<DesignCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
