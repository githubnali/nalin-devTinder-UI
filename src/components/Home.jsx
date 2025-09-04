import React from "react";
import { motion } from "framer-motion";
import { Code2, Users, Rocket, MessageSquare } from "lucide-react";
import { FaUsers, FaCode, FaProjectDiagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {

    const user = useSelector((store) => store.user);

    const isLoggedIn = !!user;
    
    /* -------- Simple typewriter hook (types once, then stops) -------- */
    function useTypewriterOnce(text, { typeSpeed = 80 } = {}) {
    const [subIndex, setSubIndex] = useState(0);

    useEffect(() => {
        if (subIndex < text.length) {
        const t = setTimeout(() => setSubIndex((s) => s + 1), typeSpeed);
        return () => clearTimeout(t);
        }
    }, [subIndex, text, typeSpeed]);

    return text.slice(0, subIndex);
    }

    const welcomeText = useTypewriterOnce("👋 Welcome to DevBuddy");

    const quotes = [
    "Alone we can do so little; together we can do so much.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Collaboration is multiplication.",
    "The best way to predict the future is to create it.",
    "Developers don’t grow alone—they grow in circles.",
    ];

    const [qIndex, setQIndex] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setQIndex((i) => (i + 1) % quotes.length), 3000);
        return () => clearInterval(id);
    }, [quotes.length]);

    const tags = [
        "#FrontendDevelopers",
        "#BackendDevelopers",
        "#Fullstack",
        "#OpenSource",
        "#DevCommunity",
        "#JavaScript",
        "#React",
        "#NodeJS",
        "#Collaboration",
        "#DesignSystems",
    ];
    return (
        <main className="bg-base-100 text-neutral">
            {/* Hero Section */}
            <section className="min-h-auto flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-base-100">
                {/* Heading with typewriter + icons */}
                <div className="flex items-center gap-3 text-4xl md:text-6xl font-extrabold mb-4">
                    {/* <FaUsers className="text-accent shrink-0" /> */}
                    <h1 className="leading-tight">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {welcomeText || "DevCircle"}
                    </span>
                    </h1>
                    <FaCode className="text-secondary shrink-0" />
                </div>

                {/* Rotating quotes */}
                <div className="h-12 mb-10 relative w-full max-w-3xl mx-auto">
                    {quotes.map((q, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 flex items-center justify-center px-4 text-base md:text-lg italic text-neutral/70 transition-all duration-500
                        ${i === qIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        aria-hidden={i !== qIndex}
                    >
                        “{q}”
                    </div>
                    ))}
                </div>

                {/* Hashtags Marquee */}
                <div className="w-full max-w-4xl mx-auto overflow-hidden py-4 shadow-md">
                <div className="relative whitespace-nowrap">
                    <div className="inline-flex gap-3 animate-marquee [animation-duration:18s] px-3">
                    {tags.map((t, i) => (
                        <span
                        key={`a-${i}`}
                        className="badge badge-outline badge-lg text-primary border-primary"
                        >
                        {t}
                        </span>
                    ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div
                    className="inline-flex gap-3 animate-marquee [animation-duration:18s] px-3"
                    aria-hidden="true"
                    >
                    {tags.map((t, i) => (
                        <span
                        key={`b-${i}`}
                        className="badge badge-outline badge-lg text-primary border-primary"
                        >
                        {t}
                        </span>
                    ))}
                    </div>
                </div>
                </div>

                <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation-name: marquee;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
                `}</style>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-14">
                Why Join <span className="text-accent">DevCircle?</span>
                </h2>

                {/* Features Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <motion.div
                    className="card bg-base-100 border border-primary/20 shadow-lg hover:shadow-xl p-6 sm:p-8 text-center rounded-2xl transition-all"
                    whileHover={{ y: -6, scale: 1.03 }}
                >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-primary/10">
                    <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">
                    Learn & Grow
                    </h3>
                    <p className="text-sm sm:text-base text-neutral/70 leading-relaxed">
                    Explore resources, tutorials, and coding discussions to sharpen
                    your skills.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    className="card bg-base-100 border border-secondary/20 shadow-lg hover:shadow-xl p-6 sm:p-8 text-center rounded-2xl transition-all"
                    whileHover={{ y: -6, scale: 1.03 }}
                >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-secondary/10">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-secondary">
                    Connect
                    </h3>
                    <p className="text-sm sm:text-base text-neutral/70 leading-relaxed">
                    Meet fellow developers, share ideas, and build long-lasting
                    connections.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    className="card bg-base-100 border border-accent/20 shadow-lg hover:shadow-xl p-6 sm:p-8 text-center rounded-2xl transition-all"
                    whileHover={{ y: -6, scale: 1.03 }}
                >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-accent/10">
                    <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-accent">
                    Collaborate
                    </h3>
                    <p className="text-sm sm:text-base text-neutral/70 leading-relaxed">
                    Work together on open-source projects and bring innovative ideas
                    to life.
                    </p>
                </motion.div>
                </div>
            </div>
            </section>

            {/* Metrics Section - Redesigned */}
            <section className="py-20 bg-base-200">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-16">
                Our Growing <span className="text-secondary">Community</span>
                </h2>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-10 text-center">
                {/* Stat 1 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-base-100 shadow-lg"
                >
                    <div className="text-4xl font-bold text-primary">0</div>
                    <p className="mt-2 text-neutral/70 font-medium">Successful Matches</p>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-base-100 shadow-lg"
                >
                    <div className="text-4xl font-bold text-secondary">0</div>
                    <p className="mt-2 text-neutral/70 font-medium">Active Developers</p>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-base-100 shadow-lg"
                >
                    <div className="text-4xl font-bold text-accent">0</div>
                    <p className="mt-2 text-neutral/70 font-medium">Projects Launched</p>
                </motion.div>
                </div>
            </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-gradient-to-r from-primary to-secondary text-center text-white relative overflow-hidden">
            {/* Decorative blur circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {!isLoggedIn ? (
                <>
                    {/* Guest / Not Logged In */}
                    <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    >
                    Ready to <span className="text-accent">Start</span> Your Journey?
                    </motion.h2>

                    <motion.p
                    className="text-lg md:text-xl text-neutral-100/90 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    >
                    Join today and become part of a thriving developer network that’s
                    building the future together.
                    </motion.p>

                    <Link to="/auth?mode=signup">
                    <motion.button
                        className="btn bg-accent border-0 px-10 py-3 text-lg rounded-full shadow-lg hover:shadow-accent/50 transition"
                        whileHover={{ scale: 1.07 }}
                    >
                        🚀 Sign Up Now
                    </motion.button>
                    </Link>
                </>
                ) : (
                <>
                    {/* Logged In User */}
                    <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    >
                    Welcome back,{" "}
                    <span className="text-accent">{user?.name || "Developer"}</span> 👋
                    </motion.h2>

                    <motion.p
                    className="text-lg text-neutral-100/90 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    >
                    Ready to continue your journey? Explore your connections, join
                    discussions, or find new collaborators.
                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/feed">
                        <motion.button
                        className="btn bg-accent border-0 px-8 py-3 rounded-full shadow-md hover:shadow-accent/40 transition"
                        whileHover={{ scale: 1.05 }}
                        >
                        🔍 Find Matchings
                        </motion.button>
                    </Link>

                    <Link to="/connections">
                        <motion.button
                        className="btn bg-primary border-0 px-8 py-3 rounded-full shadow-md hover:shadow-primary/40 transition"
                        whileHover={{ scale: 1.05 }}
                        >
                        🤝 My Connections
                        </motion.button>
                    </Link>

                    <Link to="/requests">
                        <motion.button
                        className="btn bg-secondary border-0 px-8 py-3 rounded-full shadow-md hover:shadow-secondary/40 transition"
                        whileHover={{ scale: 1.05 }}
                        >
                        📩 Requests
                        </motion.button>
                    </Link>
                    </div>
                </>
                )}
            </div>
            </section>

        </main>
    );
};

export default Home;



