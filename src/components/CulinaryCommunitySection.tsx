import { motion } from 'framer-motion';
import { Users, MessageSquare, Camera, Trophy } from 'lucide-react';

export const CulinaryCommunitySection = () => {
  const communityHighlights = [
    {
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      username: 'SpiceMaster_Sarah',
      title: 'Perfect Biryani Tips',
      likes: 2453,
      comments: 184
    },
    {
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      username: 'Chef_Michael',
      title: 'Mastering Garam Masala',
      likes: 1897,
      comments: 156
    },
    {
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      username: 'Foodie_Priya',
      title: 'Weekend Curry Special',
      likes: 2156,
      comments: 142
    }
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Community Members' },
    { icon: MessageSquare, value: '25K+', label: 'Recipe Discussions' },
    { icon: Camera, value: '100K+', label: 'Food Photos Shared' },
    { icon: Trophy, value: '1K+', label: 'Recipe Awards' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Join Our Spice Community
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with fellow spice enthusiasts, share your culinary creations, and learn from our vibrant community of home chefs and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityHighlights.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {post.title}
                  </h3>
                  <p className="text-white/80 text-sm">by {post.username}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <MessageSquare size={16} />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Trophy size={16} />
                      {post.likes}
                    </span>
                  </div>
                  <button className="text-amber-600 font-medium hover:text-amber-700">
                    View Post
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-amber-600" />
              </div>
              <div className="font-bold text-2xl text-gray-800 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors">
            <Users size={20} />
            Join Community
          </button>
        </motion.div>
      </div>
    </section>
  );
};
