const faqs = [
  {
    question: "Is this movie platform free to use?",
    answer:
      "Yes. You can browse movies, explore genres, check ratings, and discover new titles without paying for an account.",
  },
  {
    question: "How can I find a movie to watch?",
    answer:
      "You can search by movie title or browse popular movies, genres, ratings, and release years to find something you'll enjoy.",
  },
  {
    question: "Can I search for movies by genre?",
    answer:
      "Absolutely. Explore categories such as Action, Comedy, Drama, Horror, Science Fiction, Animation, and Documentary.",
  },
  {
    question: "Where does the movie information come from?",
    answer:
      "Movie details such as titles, posters, ratings, release dates, genres, cast, and descriptions are provided through our movie data sources.",
  },
  {
    question: "Can I create a watchlist?",
    answer:
      "Yes. Create an account to save movies you're interested in and easily come back to them later.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-8">

        <div className="text-center mb-12">
          <p className="text-violet-600 font-semibold uppercase tracking-wider mb-3">
            FAQ
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to know about exploring movies on our platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 cursor-pointer"
            >
              <summary className="flex items-center justify-between font-semibold text-lg text-gray-900 list-none">
                {faq.question}

                <span className="text-2xl text-violet-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}