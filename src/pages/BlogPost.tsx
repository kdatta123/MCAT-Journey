import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Markdown from 'react-markdown';

// This would normally come from an API or markdown files
const posts = {
  '1': {
    title: 'Week 1: The Overwhelming Beginning',
    date: 'Jan 05, 2026',
    readTime: '5 min read',
    category: 'Weekly Log',
    content: `
Starting content review felt like drinking from a firehose. I remember sitting down on day one with my brand new Kaplan books, a fresh set of highlighters, and a naive sense of optimism.

By hour four, I was exhausted.

### The Mistake of Passive Reading

My initial strategy was to read two chapters a day and take detailed notes. I quickly realized this was a massive mistake. I was spending 4-5 hours just reading and copying information from the book to my notebook. I wasn't actually *learning* anything.

### The Pivot to Active Recall

Mid-week, I changed my approach. Instead of taking notes, I started using Anki immediately. I would read a section, try to summarize it in my head, and then do the corresponding Anki cards for that chapter. 

This was significantly harder. It forced my brain to work. But by the end of the week, I actually remembered what I had studied on Monday.

### Week 1 Stats:
- **Study Hours:** 35
- **UWorld Questions:** 0 (Focusing purely on content right now)
- **Anki Cards Reviewed:** ~800
- **Burnout Level:** Low, but the anxiety is high.

Next week, I plan to start incorporating a few UWorld questions just to get a feel for the AAMC logic, even if I haven't covered all the content yet.
    `
  }
};

export function BlogPost() {
  const { id } = useParams();
  const post = posts[id as keyof typeof posts];

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
        <Link to="/blog" className="text-indigo-600 hover:text-indigo-700">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to all posts
        </Link>

        <div className="mb-8">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-indigo max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </motion.div>
    </div>
  );
}
