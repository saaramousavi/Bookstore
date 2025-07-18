import { Link } from "react-router-dom";
import "./App.css";
import heroImage from './img/PIC2(1).jpg';

const App = () => {
  return (
    <div className="App">
      <header className="hero-section">
        <img src={heroImage} alt="کتابخانه دیجیتال" className="hero-image" />
        <div className="hero-text">
          {/* <h1>کتابخانه من</h1>
          <p>مرجعی کامل برای دوستداران کتاب‌های فارسی و خارجی</p> */}
        </div>
      </header>

      <nav className="nav-bar">
        <Link className="nav-link" to="/books">
          📚 کتاب‌های چاپی
        </Link>
        <Link className="nav-link" to="/story">
          🎧 کتاب‌های صوتی
        </Link>
        <Link className="nav-link" to="/about">
          🧾 درباره ما
        </Link>
      </nav>

      <main>
        <section className="intro-section">
          <h2>چرا کتاب خوان ؟</h2>
          <p>
            ما در کتاب خوان بستری امن، آسان و کاملاً فارسی فراهم کرده‌ایم تا
            کاربران بتوانند به‌سادگی و با آرامش خاطر به هزاران کتاب دیجیتال،
            صوتی و متنی دسترسی داشته باشند. هدف ما این است که مطالعه را برای
            همه، در هر زمان و هر مکان، ساده‌تر، لذت‌بخش‌تر و در دسترس‌تر کنیم.
            با "کتاب خوان " دنیایی از دانش و سرگرمی همیشه همراه شماست.
          </p>
        </section>

        <section className="features-section">
          <Feature
            icon="🔍"
            title="جستجوی پیشرفته"
            desc="با امکانات فیلتر و دسته‌بندی، کتاب دلخواه‌تان را سریع‌تر پیدا کنید."
          />
          <Feature
            icon="💡"
            title="دسته‌بندی موضوعی"
            desc="ادبیات، روان‌شناسی، کودک، زبان، تاریخی و بیشتر..."
          />
          <Feature
            icon="📥"
            title="دانلود آسان"
            desc="کتاب‌ها را با فرمت PDF یا EPUB به‌راحتی دریافت کنید."
          />
        </section>

        <section className="categories-section">
          <h2>دسته‌بندی‌های محبوب</h2>
          <ul>
            <li>📖 رمان و داستان</li>
            <li>🧠 روانشناسی</li>
            <li>👶 کودک و نوجوان</li>
            <li>🌐 زبان‌های خارجی</li>
            <li>📜 تاریخی</li>
          </ul>
        </section>

        <section className="latest-books-section">
          <h2>آخرین کتاب‌های اضافه‌شده</h2>
          <div className="book-cards">
            <BookCard title="اثر مرکب" author="دارن هاردی" />
            <BookCard title="انسان در جستجوی معنا" author="ویکتور فرانکل" />
            <BookCard title="ملت عشق" author="الیف شافاک" />
          </div>
        </section>

        <section className="contact-section">
          <h2>تماس با ما</h2>
          <p>📧 ایمیل: info@ketabkhaneh.ir</p>
          <p>📞 تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 کتابخانه من | تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="feature-card">
    <span className="feature-icon">{icon}</span>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

const BookCard = ({ title, author }) => (
  <div className="book-card">
    <h4>{title}</h4>
    <p>{author}</p>
  </div>
);

export default App;
