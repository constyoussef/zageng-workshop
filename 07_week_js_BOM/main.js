function createBookInDocment(books) {
  books.forEach((book) => {
    const article = `
    <article class="book-container">
      <img
        src=${book.image}
        alt="Book Cover"
        class="image-header"
      />

      <div class="content">
        <span class="genre-tag">Ad</span>
        <h1 class="title">King; and as for.</h1>
        <div class="author">by <strong>${book.author}</strong></div>

        <div class="description">
          ${book.description}
        </div>

        <div class="footer-meta">
          <div class="meta-item">
            <b>Published</b>
            September 15, 1999
          </div>
          <div class="meta-item">
            <b>Publisher</b>
            Atque Ipsum
          </div>
          <div class="meta-item">
            <b>ISBN</b>
            9788578754501
          </div>
          <div class="meta-item">
            <b>Catalog ID</b>
            #1
          </div>
        </div>
      </div>
    </article>
  `;

    document.body.innerHTML += article;
  });
}

const books = fetch("https://fakerapi.it/api/v2/books");

books
  .then((data) => data.json())
  .then((res) => {
    console.log(res.data[0]);
    createBookInDocment(res.data);
  });
