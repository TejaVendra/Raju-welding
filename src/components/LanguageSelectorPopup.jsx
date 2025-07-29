import '../styles/LanguageSelector.css';

const LanguageSelectorPopup = ({ onSelect }) => {
  return (
    <div className="language-popup">
      <div className="popup-box">
        <h2 className="popup-title">🌐 Choose Your Language</h2>
        <div className="language-options">
          <button className="lang-btn" onClick={() => onSelect('en')}>🇬🇧 English</button>
          <button className="lang-btn" onClick={() => onSelect('te')}>🇮🇳 తెలుగు</button>
          <button className="lang-btn" onClick={() => onSelect('hi')}>🇮🇳 हिन्दी</button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectorPopup;
