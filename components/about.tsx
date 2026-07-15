export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <p className="text-yellow-500 font-bold uppercase tracking-[4px]">
            About Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Building Dreams Into Reality
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Mamu Gee Developer Pvt. Ltd. is a trusted real estate developer
            committed to delivering premium residential and commercial
            properties. Our mission is to provide quality construction,
            modern architecture, and affordable luxury for every family.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From luxury flats to spacious villas, every project is built
            with superior quality, transparency, and long-term value.
          </p>
        </div>

        <div>
          <img
            src="/hero.jpeg"
            alt="Building"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}