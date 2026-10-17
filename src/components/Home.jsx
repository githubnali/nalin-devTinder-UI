import React from "react";
import { motion } from "framer-motion";
import { Code2, Users, Rocket } from "lucide-react";
import { FaCode } from "react-icons/fa";
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

    const welcomeText = useTypewriterOnce("DevBuddy");

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
            <section className="relative overflow-hidden bg-base-100 px-6 pt-14 pb-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                    {/* Left: copy */}
                    <div className="text-center md:text-left">
                        <span className="badge badge-lg badge-outline border-primary/30 text-primary gap-2 mb-6">
                            🤖 A Developer Community
                        </span>

                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
                            👋 Welcome to{" "}
                            <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {welcomeText || "DevBuddy"}
                            </span>{" "}
                            <FaCode className="inline text-secondary" />
                        </h1>

                        <p className="text-lg text-neutral/70 mb-6 max-w-md mx-auto md:mx-0">
                            Learn, <strong>connect</strong>, <strong>collaborate</strong> and
                            grow together with developers from around the world.
                        </p>

                        {/* Rotating quotes */}
                        <div className="h-10 mb-8 relative w-full max-w-md mx-auto md:mx-0">
                            {quotes.map((q, i) => (
                            <div
                                key={i}
                                className={`absolute inset-0 flex items-center justify-center md:justify-start px-1 text-base italic text-neutral/60 transition-all duration-500
                                ${i === qIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                                aria-hidden={i !== qIndex}
                            >
                                “{q}”
                            </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                            <Link
                                to="/auth?mode=signup"
                                className="btn bg-gradient-to-r from-primary to-accent border-0 text-white rounded-full px-6"
                            >
                                🚀 Join the Community
                            </Link>
                            <a
                                href="#resources"
                                className="btn btn-outline border-primary/30 text-primary rounded-full px-6"
                            >
                                📘 Explore Resources
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {tags.slice(0, 6).map((t) => (
                                <span
                                    key={t}
                                    className="badge badge-outline badge-md text-primary border-primary/40"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: illustration */}
                    <motion.div
                        className="relative mx-auto w-full max-w-md hidden sm:block rounded-3xl bg-gradient-to-br from-primary/10 via-base-100 to-accent/10 border border-base-300 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/hero-illustration.png"
                            alt="DevBuddy robot mascot coding at a desk, surrounded by badges for learning, sharing ideas, and building projects"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="resources" className="py-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-14">
                Why Join <span className="text-accent">DevBuddy?</span>
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
                    <p className="text-sm sm:text-base text-neutral/70 leading-relaxed mb-4">
                    Explore resources, tutorials, and coding discussions to sharpen
                    your skills.
                    </p>
                    <a href="#resources" className="text-primary font-semibold text-sm hover:underline">
                        Explore Resources →
                    </a>
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
                    <p className="text-sm sm:text-base text-neutral/70 leading-relaxed mb-4">
                    Meet fellow developers, share ideas, and build long-lasting
                    connections.
                    </p>
                    <a href="#community" className="text-secondary font-semibold text-sm hover:underline">
                        Join the Community →
                    </a>
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
                    <p className="text-sm sm:text-base text-neutral/70 leading-relaxed mb-4">
                    Work together on open-source projects and bring innovative ideas
                    to life.
                    </p>
                    <a href="#projects" className="text-accent font-semibold text-sm hover:underline">
                        Find Projects →
                    </a>
                </motion.div>
                </div>
            </div>
            </section>

            {/* Metrics Section - Redesigned */}
            <section id="projects" className="py-20 bg-base-200">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-16">
                Built by Developers, <span className="text-secondary">for Developers</span>
                </h2>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-10 text-center">
                {/* Stat 1 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-base-100 shadow-lg"
                >
                    <div className="text-4xl font-bold text-primary">50+</div>
                    <p className="mt-2 text-neutral/70 font-medium">Successful Matches</p>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-base-100 shadow-lg"
                >
                    <div className="text-4xl font-bold text-secondary">30+</div>
                    <p className="mt-2 text-neutral/70 font-medium">Active Developers</p>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-base-100 shadow-lg"
                >
                    <div className="text-4xl font-bold text-accent">15+</div>
                    <p className="mt-2 text-neutral/70 font-medium">Projects Launched</p>
                </motion.div>
                </div>
            </div>
            </section>

            {/* Call to Action */}
            <section id="community" className="py-24 bg-gradient-to-r from-primary to-secondary text-center text-white relative overflow-hidden">
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



