import {
    Calendar, Languages, Star, Watch, X,
} from "lucide-react";

export default function MovieDetailsModal({ movie, onClose }) {
    if (!movie) return null;

    const { name, image, summary, rating, premiered, genres, status, language, runtime,
    } = movie.show;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-3 sm:px-4"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl sm:rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    onClick={onClose}
                    className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black sm:right-4 sm:top-4 sm:h-10 sm:w-10"
                >
                    <X size={20} />
                </button>


                <div className="h-56 w-full overflow-hidden sm:h-72 md:h-80 lg:h-96">
                    <img
                        src={image?.original || image?.medium}
                        alt={name}
                        className="h-full w-full object-cover object-top"
                    />
                </div>


                <div className="p-4 sm:p-6 md:p-8">


                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        {name}
                    </h2>


                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3 text-sm text-gray-600 sm:text-base">

                        {rating?.average && (
                            <span className="flex items-center gap-1.5">
                                <Star size={20} />
                                {rating.average}
                            </span>
                        )}

                        <span className="flex items-center gap-1.5">
                            <Calendar size={20} />

                            {premiered
                                ? new Date(premiered).getFullYear()
                                : "N/A"}
                        </span>

                        {language && (
                            <span className="flex items-center gap-1.5">
                                <Languages size={20} />
                                {language}
                            </span>
                        )}

                        {runtime && (
                            <span className="flex items-center gap-1.5">
                                <Watch size={20} />
                                {runtime} min
                            </span>
                        )}

                    </div>


                    <div className="mt-4 flex flex-wrap gap-2">
                        {genres?.map((genre) => (
                            <span
                                key={genre}
                                className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 sm:text-sm"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>


                    <div className="mt-6">
                        <h3 className="mb-2 text-lg font-bold sm:text-xl">
                            Overview
                        </h3>

                        <div
                            className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7"
                            dangerouslySetInnerHTML={{
                                __html:
                                    summary || "No summary available.",
                            }}
                        />
                    </div>


                    <p className="mt-5 text-sm text-gray-600 sm:text-base">
                        <span className="font-semibold">
                            Status:
                        </span>{" "}
                        {status}
                    </p>


                    <button
                        onClick={onClose}
                        className="mt-6 w-full rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700 sm:w-auto"
                    >
                        Close
                    </button>

                </div>
            </div>
        </div>
    );
}