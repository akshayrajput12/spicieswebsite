import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const featuredProducts = [
  {
    name: 'Premium Garam Masala',
    image: 'https://images.unsplash.com/photo-1596097635121-14b63b7a0c16?auto=format&q=80',
    description: 'A perfect blend of aromatic spices'
  },
  {
    name: 'Organic Turmeric',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&q=80',
    description: 'Pure and vibrant turmeric powder'
  },
  {
    name: 'Red Chili Powder',
    image: 'https://images.unsplash.com/photo-1596097636269-c0df3550d4d8?auto=format&q=80',
    description: 'Perfectly balanced heat'
  },
  {
    name: 'Cardamom Pods',
    image: 'https://images.unsplash.com/photo-1599909533144-f663ee65a326?auto=format&q=80',
    description: 'Aromatic green cardamom'
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our handpicked selection of premium spices, crafted to elevate your culinary creations
          </p>
          <Link 
            to="/products"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            View All Products
          </Link>
        </motion.div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full py-12"
        >
          {featuredProducts.map((product, index) => (
            <SwiperSlide key={index} className="w-80">
              <Link to="/products">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};