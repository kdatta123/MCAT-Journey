import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Calendar, PenTool, Brain } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/workspace/1920/1080?blur=4')] bg-cover bg-center opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              How I Studied for the MCAT: <br className="hidden md:block" />
              <span className="text-indigo-600">A Complete Guide</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              My personal journey, high-yield study strategies, and structured content review—all in one place to help you crush the MCAT.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/study-plan"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                View My Study Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Read Weekly Logs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Study Plan', icon: Calendar, desc: 'My 3-month schedule', path: '/study-plan' },
              { title: 'Content Review', icon: BookOpen, desc: 'High-yield summaries', path: '/content-review' },
              { title: 'Practice', icon: PenTool, desc: 'Question strategies', path: '/practice' },
              { title: 'Resources', icon: Brain, desc: 'Best tools ranked', path: '/resources' },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={card.path}
                    className="block group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all"
                  >
                    <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-500">{card.desc}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured Posts</h2>
              <p className="mt-2 text-gray-600">The most important lessons from my prep.</p>
            </div>
            <Link to="/blog" className="hidden sm:flex items-center text-indigo-600 font-medium hover:text-indigo-700">
              View all posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'My 3-Month Study Plan Breakdown',
                category: 'Strategy',
                date: 'Jan 15, 2026',
                image: 'https://picsum.photos/seed/calendar/600/400',
              },
              {
                title: 'Mistakes I Made Early On',
                category: 'Reflection',
                date: 'Feb 02, 2026',
                image: 'https://picsum.photos/seed/mistakes/600/400',
              },
              {
                title: 'Best Resources Ranked (What Actually Worked)',
                category: 'Resources',
                date: 'Feb 20, 2026',
                image: 'https://picsum.photos/seed/books/600/400',
              }
            ].map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.image} alt={post.title} referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {post.category}
                    </p>
                    <Link to="/blog" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors">{post.title}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get My Weekly Study Tips</h2>
          <p className="text-indigo-100 mb-8 text-lg">Join other pre-meds getting high-yield strategies delivered straight to their inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
