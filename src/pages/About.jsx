import { Film, Search, Star } from "lucide-react";

export default function About() {
  return <>
    <main className="bg-white text-gray-900">
      <section className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <p className="text-yellow-400 font-semibold uppercase tracking-wider mb-4">
              About Our Platform
            </p>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Discover your next favorite movie.
            </h1>

            <p className="text-lg leading-8 text-white/90">
              We make it easier to explore movies, discover new stories, and
              find something worth watching. Browse popular titles, explore
              different genres, and keep track of movies you want to watch.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              More than just a movie database.
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              Finding a good movie shouldn't mean scrolling through endless
              lists. Our platform brings movie information together in one
              simple place so you can explore titles based on what you enjoy.
            </p>

            <p className="text-gray-600 leading-7">
              From action and science fiction to drama, comedy, animation, and
              documentaries, you can explore movies by genre, popularity,
              release date, and rating.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">
              What you can explore
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-violet-600">10K+</p>
                <p className="text-gray-500 mt-1">Movie titles</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-violet-600">20+</p>
                <p className="text-gray-500 mt-1">Genres</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-violet-600">100+</p>
                <p className="text-gray-500 mt-1">New releases</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-violet-600">24/7</p>
                <p className="text-gray-500 mt-1">Movie discovery</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Everything you need to explore movies
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover movies faster with useful information and simple
              browsing tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-5">
                <Film className="text-4xl"></Film>
              </div>

              <h3 className="text-xl font-bold mb-3">
                Explore Movies
              </h3>

              <p className="text-gray-600 leading-6">
                Browse movies by genre, popularity, release year, and audience
                ratings to find something that matches your mood.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-5">
                <Star></Star>
              </div>

              <h3 className="text-xl font-bold mb-3">
                Ratings & Reviews
              </h3>

              <p className="text-gray-600 leading-6">
                Check ratings, reviews, cast information, release dates, and
                other details before deciding what to watch.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-5">
                <Search></Search>
              </div>

              <h3 className="text-xl font-bold mb-3">
                Find Your Movie
              </h3>

              <p className="text-gray-600 leading-6">
                Search for a specific title or discover new movies through
                recommendations and popular collections.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Explore by Genre
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {[
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Horror",
            "Science Fiction",
            "Animation",
            "Documentary",
          ].map((genre) => (
            <div
              key={genre}
              className="rounded-xl border border-gray-200 p-6 text-center font-semibold hover:bg-violet-600 hover:text-white hover:border-violet-600 transition cursor-pointer"
            >
              {genre}
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white">
        <div className="max-w-6xl mx-auto px-8 py-20 text-center">

          <h2 className="text-4xl font-bold mb-5">
            Ready to discover something new?
          </h2>

          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Explore popular movies, discover hidden gems, and find your next
            movie night favorite.
          </p>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-9 py-4 rounded-full transition cursor-pointer">
            Explore Movies
          </button>

        </div>
      </section>

    </main>
  </>;
}