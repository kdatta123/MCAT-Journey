import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const subjectData = {
  'biology': {
    name: 'Biology',
    description: 'The foundation of the MCAT. Focus heavily on systems physiology and genetics.',
    topics: [
      {
        title: 'Cells & Organelles',
        highYield: true,
        summary: 'Eukaryotes have membrane-bound organelles. Prokaryotes do not. Know the function of the Golgi, ER (rough and smooth), lysosomes, and mitochondria inside and out.',
        tips: 'Draw out the secretory pathway. It comes up constantly.'
      },
      {
        title: 'Genetics & Evolution',
        highYield: true,
        summary: 'Mendelian genetics, Hardy-Weinberg equilibrium, and the different types of mutations (frameshift, missense, nonsense).',
        tips: 'Make sure you can quickly draw Punnett squares for X-linked traits.'
      }
    ]
  }
};

export function ContentReviewSubject() {
  const { id } = useParams();
  const subject = subjectData[id as keyof typeof subjectData];

  if (!subject) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Subject not found</h1>
        <p className="text-gray-600 mb-8">I haven't uploaded the study guide for this subject yet!</p>
        <Link to="/content-review" className="text-indigo-600 hover:text-indigo-700">
          ← Back to Content Review
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link to="/content-review" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to all subjects
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            {subject.name} Study Guide
          </h1>
          <p className="text-xl text-gray-600">
            {subject.description}
          </p>
        </div>

        <div className="space-y-8">
          {subject.topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{topic.title}</h2>
                {topic.highYield && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    High Yield
                  </span>
                )}
              </div>
              
              <div className="prose prose-indigo max-w-none mb-6">
                <p>{topic.summary}</p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 flex items-start">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-indigo-900">How I memorized this:</h4>
                  <p className="text-indigo-800 text-sm mt-1">{topic.tips}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
