export default function MovieDetailsModal({ movie, onClose }) {
  if (!movie) return null;

  const {
    name,
    image,
    summary,
    rating,
    premiered,
    genres,
    status,
    language,
    runtime,
  } = movie.show;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white hover:bg-black"
        >
          ×
        </button>

        {/* Backdrop / Poster */}
        <div className="h-72 w-full overflow-hidden">
          <img
            src={image?.original || image?.medium}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            {name}
          </h2>

          {/* Movie Info */}
          <div className="mt-4 flex flex-wrap gap-4 text-gray-600">

            <span>
              ⭐ {rating?.average ?? "N/A"}
            </span>

            <span>
              📅{" "}
              {premiered
                ? new Date(premiered).getFullYear()
                : "N/A"}
            </span>

            {language && (
              <span>
                🌐 {language}
              </span>
            )}

            {runtime && (
              <span>
                ⏱️ {runtime} min
              </span>
            )}

          </div>

          {/* Genres */}
          <div className="mt-4 flex flex-wrap gap-2">
            {genres?.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6">
            <h3 className="mb-2 text-xl font-bold">
              Overview
            </h3>

            <div
              className="leading-7 text-gray-600"
              dangerouslySetInnerHTML={{
                __html: summary || "No summary available.",
              }}
            />
          </div>

          {/* Status */}
          <p className="mt-5 text-gray-600">
            <span className="font-semibold">Status:</span>{" "}
            {status}
          </p>

          {/* Close */}
          <button
            onClick={onClose}
            className="mt-7 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}