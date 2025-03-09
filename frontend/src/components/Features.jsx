const FeatureCard = ({ heading, description }) => {
    return (<>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{heading}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    </>)
}
const Features = () => {

    const featuresArr = [
        { heading: "🔄 Live Preview", description: "See your Markdown rendered instantly as you type." },
        { heading: "Fast Download", description: "Download your file instantly with a blink." },
        { heading: "⚡ Fast & Lightweight", description: "Built with Vite, React, and optimized for speed." },
    ]

    return (<>
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
            {featuresArr.map((item) => {
                return <FeatureCard key={item.heading} heading={item.heading} description={item.description} />
            })}
        </section>
    </>)
}

export default Features;