import { motion } from "framer-motion";
import '../styles/Designs.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const categories = [
  {
    titleKey: 'gateDesigns',
    folder: 'gates',
    cover: 'gate.jpeg',
  },
  {
    titleKey: 'windowDesigns',
    folder: 'windows',
    cover: 'window.jpeg',
  },
  {
    titleKey: 'stairsDesigns',
    folder: 'stairs',
    cover: 'stairs.jpeg',
  },
  {
    titleKey: 'balconyDesigns',
    folder: 'balcony',
    cover: 'balcony.jpeg',
  },
  {
    titleKey: 'furnitureDesigns',
    folder: 'furniture',
    cover: 'furniture.jpeg',
  },
];

const Designs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="designs-section" id="designs">
      <h2 className="section-title">{t("designsTitle")}</h2>
      <div className="design-grid">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="design-card"
            onClick={() => navigate(`/designs/${cat.folder}`)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={`/designs/gates/${cat.cover}`}
              alt={t(cat.titleKey)}
              className="design-cover-img"
              loading="lazy"
            />
            <h3 className="design-card-title">{t(cat.titleKey)}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Designs;
