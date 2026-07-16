export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "The entire buying process was transparent and smooth. Highly recommended for anyone looking to invest in Greater Noida.",
    },
    {
      name: "Priya Verma",
      text: "Excellent customer support and premium quality development. I'm very satisfied with my investment.",
    },
    {
      name: "Amit Singh",
      text: "Mamu Gee Developer helped us find the perfect residential plot. Professional team and trustworthy service.",
    },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center uppercase tracking-[4px] text-yellow-500 font-bold">
          Testimonials
        </p>

        <h2 className="mt-3 text-center text-5xl font-bold">
          What Our Clients Say
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
             <p className="text-gray-600 italic">
  &ldquo;{item.text}&rdquo;
</p>
              <h3 className="mt-6 font-bold text-xl">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}