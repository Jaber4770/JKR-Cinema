// import React from 'react'

import Hero from "../components/Hero";
import Partner from "../components/Partner";
import StreamingSection from "../components/StreamingSection";
import UnderHero from "../components/UnderHero";
import WatchFreeSection from "../components/WatchFreeSection";

export default function Home() {
    return <>
        <Hero></Hero>
        <UnderHero></UnderHero>
        <StreamingSection></StreamingSection>
        <WatchFreeSection></WatchFreeSection>
        <Partner></Partner>
    </>
}
