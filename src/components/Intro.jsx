import '../styles/Home.css';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      className="intro-modern"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <motion.p
        className="intro-tag highlight-box"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {t('tagline')} 
      </motion.p>
      <p className="intro-subheading">{t('subheading')}</p>
      <motion.h1
        className="intro-heading"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Trans i18nKey="heading" components={{ 1: <span className="highlight" />, 3: <span className="highlight" /> }} />
      </motion.h1>
      <motion.p
        className="intro-subtext"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        {t('subtext')}
      </motion.p>
      <motion.div
        className="intro-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <a href="#works" className="btn-glow secondary">{t('works')}</a>
        <a  href="tel:+919849499223" className="btn-glow primary">{t("callFree")}</a>
        
      </motion.div>
    </motion.section>
  );
};

export default Intro;
