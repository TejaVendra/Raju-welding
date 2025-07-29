import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <div className="lang-buttons">
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('te')}>తెలుగు</button>
      <button onClick={() => i18n.changeLanguage('hi')}>हिन्दी</button>
    </div>
  );
};

export default LanguageSelector;
