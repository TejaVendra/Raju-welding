import '../styles/Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section" id='contact'>
      <h2 className="contact-title">📍 {t("visitTitle")}</h2>

      <div className="contact-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.058467820246!2d81.56582490160596!3d16.60299901020472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd08e6a1e04d%3A0xc6b080e00cfd62f7!2sRaju%20welding%20shop!5e0!3m2!1sen!2sin!4v1752648011290!5m2!1sen!2sin" 
          allowFullScreen=""
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="contact-actions">
        <a href="tel:+919849499223" className="contact-button call-button">📞 {t("callUs")} (98494 99223)</a>
        <a href="tel:+917702554582" className="contact-button call-button">📞 {t("callUs")} (77025 54582)</a>
        <a href="https://wa.me/919849499223" className="contact-button whatsapp-button">💬 {t("whatsappUs")}</a>
      </div>

      <div className="shop-info">
        <img src="/shop_image.jpg" alt="Raju Welding Shop" className="shop-photo" loading='lazy'/>
        <p><strong>{t("address")}:</strong> Mogallu bus stand opposite , JH38+7CC, Mogallu, Andhra Pradesh 534209</p>
        <p><strong>{t("timings")}:</strong> 9 AM – 7 PM ({t("allDays")})</p>
      </div>
    </section>
  );
};

export default Contact;
