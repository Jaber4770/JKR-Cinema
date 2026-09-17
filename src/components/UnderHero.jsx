import {
    Globe, Film, PiggyBank, MonitorSmartphone,
} from "lucide-react";

const features = [
    {
        icon: Globe,
        title: "Works Worldwide",
        description:
            "No other free streaming service delivers more content to and from more countries worldwide.",
        color: "text-pink-500",
    },
    {
        icon: Film,
        title: "Thousands of Titles",
        description:
            "Choose from movies, shows, sports and music documentaries, AMC series, Live TV and more.",
        color: "text-cyan-400",
    },
    {
        icon: PiggyBank,
        title: "Always 100% Free",
        description:
            "Welcome to instant gratification at its best. Watch now without any payment or subscription and end the search for free movie websites.",
        color: "text-fuchsia-700",
    },
    {
        icon: MonitorSmartphone,
        title: "Device-Friendly",
        description:
            "Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more.",
        color: "text-amber-500",
    },
];

export default function UnderHero() {
    return <>
        <section className="bg-white text-gray-800">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-8 py-20 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div key={feature.title}>
                            <Icon
                                size={50}
                                strokeWidth={1.5}
                                className={feature.color}
                            />

                            <h3 className="mt-4 text-xl font-semibold text-gray-900">
                                {feature.title}
                            </h3>

                            <p className="mt-4 text-[15px] leading-6 text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="h-6 bg-gradient-to-r from-fuchsia-600 to-violet-600" />
        </section>
    </>;
}