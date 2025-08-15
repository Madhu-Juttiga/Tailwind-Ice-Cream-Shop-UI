import React from 'react'

const HoverGallery = () => {
  return (
    <section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Delicious Scoops You Can’t Resist
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Every flavor at Saki Ice Creams is a moment of joy — handcrafted, creamy, and irresistibly tasty.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="Strawberry Scoop" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=60"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Fresh & Fruity</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Strawberry Scoop</h1>
                  <p className="leading-relaxed">Bright strawberry scoop — sweet and refreshing.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="Chocolate Scoop" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Chocolate Heaven</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Chocolate Scoop</h1>
                  <p className="leading-relaxed">Rich classic chocolate scoop — pure indulgence.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="Vanilla Scoop" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.pinimg.com/originals/37/89/12/378912926730670ac630ba7a3a387147.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Classic Flavor</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Vanilla Scoop</h1>
                  <p className="leading-relaxed">Smooth Madagascar vanilla — timeless and creamy.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="Mint Chocolate Chip" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=60"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Refreshing Mint</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Mint Chocolate Chip</h1>
                  <p className="leading-relaxed">Fresh mint with chocolate chunks — a cooling treat.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="Blueberry Swirl" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1521305916504-4a1121188589?w=800&fit=crop&q=60"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Fruity Delight</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Blueberry Swirl</h1>
                  <p className="leading-relaxed">Tangy blueberries blended into creamy perfection.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="Caramel Scoop" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&auto=format&fit=crop&q=60"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Sweet & Nutty</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Caramel Scoop</h1>
                  <p className="leading-relaxed">Smooth caramel with a hint of toffee bits.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="Pistachio Scoop" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=60"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Nutty Indulgence</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Pistachio Scoop</h1>
                  <p className="leading-relaxed">Nutty pistachio flavor — creamy and rich.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="Cookies & Cream" className="absolute inset-0 w-full h-full object-cover object-center" src="https://plus.unsplash.com/premium_photo-1683147864503-e96f9b30db56?w=800&auto=format&fit=crop&q=60"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Crunchy Delight</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cookies & Cream</h1>
                  <p className="leading-relaxed">Creamy vanilla with crunchy cookie pieces.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </section>
  )
}

export default HoverGallery
