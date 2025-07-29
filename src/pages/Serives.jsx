import '../styles/Serives.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("service1Title"),
      image: '/services/arc-welding.jpg',
      description: t("service1Desc")
    },
    {
      title: t("service2Title"),
      image: '/services/mig-welding.jpg',
      description: t("service2Desc")
    },
    {
      title: t("service3Title"),
      image: '/services/tig-welding.jpg',
      description: t("service3Desc")
    },
    {
      title: t("service4Title"),
      image: '/services/fabrication.jpg',
      description: t("service4Desc")
    },
    {
      title: t("service5Title"),
      image: '/services/gatesandgrills.jpg',
      description: t("service5Desc")
    },
    {
      title: t("service6Title"),
      image: '/services/services.jpg',
      description: t("service6Desc")
    }
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="section-title">{t("servicesTitle")}</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={service.image} alt={service.title} className="service-img" loading='lazy'/>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
