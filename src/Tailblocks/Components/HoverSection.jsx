import React from "react";

const iceCreamData = [
  {
    id: 1,
    title: "Strawberry Bliss",
    desc: "Bright strawberry scoop — sweet and refreshing.",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Chocolate Dream",
    desc: "Rich classic chocolate scoop — pure indulgence.",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Vanilla Classic",
    desc: "Smooth Madagascar vanilla — timeless and creamy.",
    img: "https://i.pinimg.com/originals/37/89/12/378912926730670ac630ba7a3a387147.jpg",
  },
  {
    id: 4,
    title: "Mint Choco Chip",
    desc: "Fresh mint with chocolate chunks — a cooling treat.",
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Blueberry Swirl",
    desc: "Tangy blueberries blended into creamy perfection.",
    img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=800&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Caramel Crunch",
    desc: "Smooth caramel with a hint of toffee bits.",
    img: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    title: "Pistachio Paradise",
    desc: "Nutty pistachio flavor — creamy and rich.",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    title: "Cookies & Cream",
    desc: "Creamy vanilla with crunchy cookie pieces.",
    img: "https://plus.unsplash.com/premium_photo-1683147864503-e96f9b30db56?w=800&auto=format&fit=crop&q=60",
  },
];

export default function IceCreamGallery() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-3xl font-bold title-font mb-4 text-blue-500">
            Delicious Scoops You Can’t Resist
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Every flavor at Saki Ice Creams is a moment of joy — handcrafted, creamy, and irresistibly tasty.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {iceCreamData.map((item) => (
            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="relative h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.img}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h2 className="text-white text-lg font-bold">{item.title}</h2>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
