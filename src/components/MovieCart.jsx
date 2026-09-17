export default function MovieCard({ movie, onSeeDetails }) {
  const { name, premiered, rating, image, genres, status } = movie.show;

  const releaseYear = premiered
    ? new Date(premiered).getFullYear()
    : "N/A";

  return (
    <div className="w-72 overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Poster */}
      <div className="relative h-96 overflow-hidden bg-gray-200">
        <img
          src={image?.medium}
          alt={name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
          {status}
        </span>
      </div>

      {/* Information */}
      <div className="p-5">

        <h2 className="truncate text-xl font-bold text-gray-900">
          {name}
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-gray-600">
            📅 {releaseYear}
          </span>

          <span className="font-semibold text-yellow-500">
            ⭐ {rating?.average ?? "N/A"}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {genres?.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700"
            >
              {genre}
            </span>
          ))}
        </div>

        <button
          onClick={() => onSeeDetails(movie)}
          className="mt-5 w-full rounded-lg bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-700"
        >
          See Details
        </button>

      </div>
    </div>
  );
}