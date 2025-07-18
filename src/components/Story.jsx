import { useState } from "react";
import "../style/Story.css";
import audioBanner from "../img/PIC4.png"; // تصویر بنر

const audioBooksData = [
  {
    id: 1,
    title: "ملت عشق",
    author: "الیف شافاک",
    duration: "8 ساعت و 30 دقیقه",
    audioSrc: "/audios/melat.mp3",
  },
  {
    id: 2,
    title: "اثر مرکب",
    author: "دارن هاردی",
    duration: "5 ساعت و 15 دقیقه",
    audioSrc: "/audios/asar-mokarreb.mp3",
  },
  {
    id: 3,
    title: "انسان در جستجوی معنا",
    author: "ویکتور فرانکل",
    duration: "6 ساعت و 40 دقیقه",
    audioSrc: "/audios/ensan-dar-jostojoo.mp3",
  },
];

const Story = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [playingId, setPlayingId] = useState(null);

  const filteredBooks = audioBooksData.filter(
    (book) =>
      book.title.includes(searchTerm) || book.author.includes(searchTerm)
  );

  const handlePlay = (id) => {
    if (playingId === id) {
      setPlayingId(null); // توقف اگر در حال پخش بود
    } else {
      setPlayingId(id);
    }
  };

  return (
    <div className="audio-container">
      <div className="audio-banner">
        <img src={audioBanner} alt="کتاب صوتی" className="audio-image" />
        <div className="audio-banner-text">
          <h1>🎧 کتاب‌های صوتی کتابخانه من</h1>
          <p>تجربه‌ای متفاوت از مطالعه؛ فقط گوش بده!</p>
          <button className="audio-btn">🎙 مرور کتاب‌های صوتی</button>
        </div>
      </div>

      <section className="audio-features">
        <div className="feature">
          <span>🔊</span>
          <h3>مطالعه بدون چشم</h3>
          <p>کتاب‌ها را در حال رانندگی، ورزش یا استراحت بشنوید.</p>
        </div>
        <div className="feature">
          <span>🎙</span>
          <h3>گویندگان حرفه‌ای</h3>
          <p>با صدای جذاب و روایت دلچسب لذت کتاب را چند برابر کنید.</p>
        </div>
        <div className="feature">
          <span>⏳</span>
          <h3>صرفه‌جویی در زمان</h3>
          <p>کتاب‌ها را بدون توقف و در مسیر روزانه گوش کنید.</p>
        </div>
      </section>

      <section className="search-section">
        <input
          type="text"
          placeholder="🔍 جستجو در کتاب‌های صوتی..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </section>

      <section className="audio-list">
        {filteredBooks.length === 0 ? (
          <p className="no-results">کتابی یافت نشد.</p>
        ) : (
          filteredBooks.map((book) => (
            <div key={book.id} className="audio-card">
              <div className="audio-info">
                <h3>{book.title}</h3>
                <p>نویسنده: {book.author}</p>
                <p>مدت زمان: {book.duration}</p>
              </div>

              <div className="audio-controls">
                <button
                  className={`play-btn ${
                    playingId === book.id ? "playing" : ""
                  }`}
                  onClick={() => handlePlay(book.id)}
                >
                  {playingId === book.id ? "⏸ توقف" : "▶️ پخش"}
                </button>
                <button className="fav-btn" title="افزودن به علاقه‌مندی">
                  ❤️
                </button>
                <button className="download-btn" title="دانلود کتاب صوتی">
                  ⬇️
                </button>
              </div>

              {/* پلیر ساده (می‌تونی به پلیر حرفه‌ای تغییر بدی) */}
              {playingId === book.id && (
                <audio
                  src={book.audioSrc}
                  controls
                  autoPlay
                  onEnded={() => setPlayingId(null)}
                  className="audio-player"
                />
              )}
            </div>
          ))
        )}
      </section>

      <section className="reviews-section">
        <h2>نظرات کاربران</h2>
        <div className="review">
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <p>صدای گوینده خیلی خوب بود، واقعاً لذت بردم.</p>
          <span>- سارا</span>
        </div>
        <div className="review">
          <p>⭐️⭐️⭐️⭐️</p>
          <p>کیفیت فایل‌ها عالی و دانلود راحت بود.</p>
          <span>- محمد</span>
        </div>
      </section>
    </div>
  );
};

export default Story;
