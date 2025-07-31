import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/CatogoryDesign.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const titleMap = {
  gates: 'Gate Designs',
  windows: 'Window Designs',
  stairs: 'Stairs Designs',
  balcony: 'Balcony Designs',
  furniture: 'Furniture Designs',
};

const DesignCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const title = titleMap[category] || t("designs");

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [orderFormImg, setOrderFormImg] = useState(null);
  const [selectedDesignName, setSelectedDesignName] = useState('');
  const [formData, setFormData] = useState({ name: '', village: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://backend-welding-1.onrender.com/api/images/${category}/`)
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, [category]);

  const handleOrderClick = (imgUrl, index) => {
    const designName = `${title.replace(t("designs"), '')} ${index + 1}`;
    setOrderFormImg(imgUrl);
    setSelectedDesignName(designName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const payload = {
      name: formData.name,
      village: formData.village,
      phone: formData.phone,
      image_url: orderFormImg,
      design_name: selectedDesignName,
    };

    try {
      await axios.post('https://backend-welding-1.onrender.com/api/submit-order/', payload);
      setFormData({ name: '', village: '', phone: '' });
      setOrderFormImg(null);
      setSelectedDesignName('');
      setShowSuccessModal(true);
    } catch (error) {
      console.error('❌ Failed to send order:', error);
      setError(t("orderFailed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="designs-section">
      <div className="designs-header">
        <motion.h2
          className="designs-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <button className="designs-back-btn" onClick={() => navigate(-1)}>
          {t("back")}
        </button>
      </div>

      {loading ? (
        <div className="spinner-container">
          <div className="dots-loader">
            <span></span><span></span><span></span>
          </div>
        </div>


      ) : (
          <div className="designs-grid">
      {images.length === 0 ? (
        <p className="no-designs-message">{t("noDesigns")}</p>
      ) : (
        images.map((img, index) => (
          <motion.div
            key={index}
            className="designs-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div
              className="designs-card-img-wrapper"
              onClick={() => setSelectedImage(img.image_url)}
            >
              <img
                src={img.image_url}
                alt={`${title} ${index + 1}`}
                className="designs-card-img"
                loading="lazy"
              />
            </div>
            <div className="designs-card-footer">
              <p>{t("design")} {index + 1}</p>
              <button
                className="designs-order-btn"
                onClick={() => handleOrderClick(img.image_url, index)}
              >
                {t("orderNow")}
              </button>
            </div>
          </motion.div>
        ))
      )}
    </div>

      )}

      {selectedImage && (
        <div className="designs-img-popup">
          <img src={selectedImage} alt="Full View" className="designs-img-large" loading="lazy" />
          <button className="designs-close-btn" onClick={() => setSelectedImage(null)}>
            {t("close")}
          </button>
        </div>
      )}

      {orderFormImg && (
  <motion.div
        className="designs-order-form"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}>
          <h3>{t("orderFor")}: {selectedDesignName}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t("yourName")}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder={t("yourVillage")}
              value={formData.village}
              onChange={(e) => setFormData({ ...formData, village: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder={t("phoneNumber")}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <div className="designs-form-buttons">
              <button type="submit" className="submit-button" disabled={submitting}>
                {submitting ? t("sending") : t("submitOrder")}
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  setOrderFormImg(null);
                  setSelectedDesignName('');
                }}
              >
                {t("cancel")}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{t("orderSuccess")}</p>
            <button onClick={() => setShowSuccessModal(false)}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignCategory;
