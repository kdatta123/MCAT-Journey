import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Week 1: The Overwhelming Beginning',
    excerpt: 'Starting content review felt like drinking from a firehose. Here is how I organized my first week and the mistakes I made trying to read too much.',
    date: 'Jan 05, 2026',
    readTime: '5 min read',
    category: 'Weekly Log',
    tags: ['Content Review', 'Planning']
  },
  {
    id: 2,
    title: 'Why I Stopped Taking Detailed Notes',
    excerpt: 'I spent 4 hours taking notes on one biology chapter before realizing it was a massive waste of time. Here is what I do instead.',
    date: 'Jan 15, 2026',
    readTime: '4 min read',
    category: 'Strategy',
    tags: ['Efficiency', 'Active Recall']
  },
  {
    id: 3,
    title: 'My First Full-Length Exam (And Why I Cried)',
    excerpt: 'Taking my first AAMC practice exam was a humbling experience. Breaking down my score, my timing issues, and how I plan to improve.',
    date: 'Feb 10, 2026',
    readTime: '7 min read',
    category: 'Practice Exams',
    tags: ['AAMC', 'Score Reveal']
  },
  {
    id: 4,
    title: 'Breaking Through the 505 Plateau',
    excerpt: 'After being stuck at 505 for three weeks, I changed my review strategy. Here is the exact spreadsheet method I used to jump to 510.',
    date: 'Mar 02, 2026',
    readTime: '6 min read',
    category: 'Strategy',
    tags: ['Plateau', 'Review Method']
  }
];

export function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Study Journal</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Chronological logs, reflections, and lessons learned throughout my prep.
            </p>
          </div>
          
          {/* Simple filter/search placeholder */}
          <div className="mt-6 md:mt-0">
            <input 
              type="text" 
              placeholder="Search posts..." 
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-indigo-50 text-indigo-700">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <Link to={`/blog/${post.id}`} className="block group">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
              
              <div className="flex items-center gap-2 mt-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
