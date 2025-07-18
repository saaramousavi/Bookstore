import "../style/Books.css";

const books = [
  {
    title: "شازده کوچولو",
    author: "آنتوان دو سنت اگزوپری",
    desc: "سفر شاعرانه‌ای به درون کودکانه‌های انسان.",
    category: "داستانی",
    image: require("../img/shazdeh.jpg"),
    price: "45,000 تومان",
    rating: 5,
  },
  {
    title: "ملت عشق",
    author: "الیف شافاک",
    desc: "داستانی عاشقانه با چاشنی عرفان و مولانا.",
    category: "عاشقانه",
    image: require("../img/melat.jpg"),
    price: "58,000 تومان",
    rating: 4,
  },
  {
    title: "سمفونی مردگان",
    author: "عباس معروفی",
    desc: "داستانی تلخ و تکان‌دهنده از خانواده‌ای در ایران.",
    category: "اجتماعی",
    image: require("../img/samfoni.jpg"),
    price: "39,000 تومان",
    rating: 4,
  },
];

const Books = () => {
  return (
    <div className="books-container">
      <h2>📚 کتاب‌های پیشنهادی</h2>

      {/* بخش جستجو و دسته‌بندی استاتیک */}
      <div className="filters">
        <input
          type="text"
          className="search-box"
          placeholder="🔍 جستجو در میان کتاب‌ها..."
        />
        <div className="categories-filter">
          <span>📂 دسته‌بندی:</span>
          <button>همه</button>
          <button>داستانی</button>
          <button>عاشقانه</button>
          <button>اجتماعی</button>
        </div>
      </div>

      {/* لیست کتاب‌ها */}
      <div className="book-list">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.image} alt={book.title} className="book-img" />
            <h3>{book.title}</h3>
            <p className="author">✍️ {book.author}</p>
            <p className="category">📂 {book.category}</p>
            <p className="desc">{book.desc}</p>

            {/* ستاره‌ها */}
            <div className="rating">
              {"⭐".repeat(book.rating)} {"☆".repeat(5 - book.rating)}
            </div>

            <p className="price">{book.price}</p>
            <div className="buttons">
              <button className="book-btn">🛒 خرید</button>
              <button className="book-btn">❤️ علاقه‌مندی</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
