import "../style/About.css";
import aboutImage from "../img/pexels-hujason-22717409.jpg";
const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>درباره ما</h2>
        <p>
          ما در <strong>کتابخانه من</strong> با هدف توسعه فرهنگ کتاب‌خوانی،
          بستری فراهم کرده‌ایم تا همه بتوانند به منابع ارزشمند فارسی و لاتین به
          صورت دیجیتال و رایگان دسترسی داشته باشند. با تیمی جوان، پرانرژی و عاشق
          کتاب، هر روز در تلاشیم تا تجربه‌ای متفاوت از کتاب‌خواندن را برایتان
          رقم بزنیم.
        </p>

        <div className="features">
          <div className="feature-card">
            <span className="icon">📚</span>
            <p>دسترسی به بیش از ۵۰۰۰ کتاب</p>
          </div>
          <div className="feature-card">
            <span className="icon">⚡</span>
            <p>سرعت بالا و طراحی کاربرپسند</p>
          </div>
          <div className="feature-card">
            <span className="icon">💬</span>
            <p>پشتیبانی و جامعه فعال</p>
          </div>
        </div>
      </div>

      <div className="about-image">
        <img src={aboutImage} alt="کتابخانه دیجیتال" />
      </div>
    </section>
  );
};
export default About;
