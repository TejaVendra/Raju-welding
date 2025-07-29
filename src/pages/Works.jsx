import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Works.css';
import { useTranslation } from 'react-i18next';

const workImages = [
    'w1.jpeg',
    'w2.jpg',
    'w3.jpg',
    'w4.jpeg',
    'w5.jpeg',
  // Add more images here later
];

const OurWorks = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { t } = useTranslation();

  return (
    <section className="works-section" id='works'>
      <h2 className="works-title">{t("worksTitle")}</h2>
      <p className="works-description">{t("worksDescription")}</p>

      <div className="works-gallery">
        {workImages.map((img, index) => (
          <motion.div
            key={index}
            className="works-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={`/works/${img}`}
              alt={`Work ${index + 1}`}
              className="works-img"
              loading="lazy"
              onClick={() => setSelectedImg(`/works/${img}`)}
            />
          </motion.div>
        ))}
      </div>

      {selectedImg && (
        <div className="works-popup" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Full View" className="works-popup-img" />
          <button className="works-close-btn" onClick={() => setSelectedImg(null)}>
            {t("worksClose")}
          </button>
        </div>
      )}
    </section>
  );
};

export default OurWorks;
