import React from 'react'

const Feedback = () => {
  return (
    <section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img 
                  alt="testimonial" 
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                  src="https://images.unsplash.com/photo-1622049605334-72e1e4432346?auto=format&fit=crop&w=200&h=200&q=80"
                />
                <p className="leading-relaxed">
                  “Best ice cream in town! The flavors are rich, creamy, and taste just like childhood. My kids loved the chocolate fudge.”
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">SNEHA REDDY</h2>
                <p className="text-gray-500">Customer</p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img 
                  alt="testimonial" 
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                  src="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?auto=format&fit=crop&w=200&h=200&q=80"
                />
                <p className="leading-relaxed">
                  “Absolutely loved the mango sorbet! So fresh and perfect for summer. Staff is super friendly too.”
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">RAHUL VERMA</h2>
                <p className="text-gray-500">Food Blogger</p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img 
                  alt="testimonial" 
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                  src="https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?auto=format&fit=crop&w=200&h=200&q=80"
                />
                <p className="leading-relaxed">
                  “I’m a regular here! Their waffle cones are to die for, and the strawberry cheesecake ice cream is my personal favorite.”
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">PRIYA SHARMA</h2>
                <p className="text-gray-500">Entrepreneur</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </section>
  )
}

export default Feedback
