import '../styles/Home.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: '🛡️',
      title: t('stat1Title'),
      description: t('stat1Desc'),
    },
    {
      icon: '⚡',
      title: t('stat2Title'),
      description: t('stat2Desc'),
    },
    {
      icon: '🏆',
      title: t('stat3Title'),
      description: t('stat3Desc'),
    },
  ];

  return (
    <section className="stats-section" id="stats">
      {stats.map((stat, index) => (
        <motion.div
          className="stat-card"
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-icon">{stat.icon}</div>
          <h3 className="stat-title">{stat.title}</h3>
          <p className="stat-description">{stat.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Stats;
