import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Beaker, Dna, Zap, BrainCircuit, Activity } from 'lucide-react';

const subjects = [
  {
    id: 'biology',
    name: 'Biology',
    icon: Dna,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    topics: ['Cells & Organelles', 'Genetics & Evolution', 'Physiology Systems', 'Microbiology']
  },
  {
    id: 'biochemistry',
    name: 'Biochemistry',
    icon: Activity,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    topics: ['Amino Acids & Proteins', 'Enzymes & Kinetics', 'Metabolism (Glycolysis, Krebs)', 'DNA/RNA']
  },
  {
    id: 'chemistry',
    name: 'General Chemistry',
    icon: Beaker,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    topics: ['Atomic Structure', 'Thermodynamics', 'Acids & Bases', 'Electrochemistry']
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    topics: ['Mechanics & Kinematics', 'Fluids', 'Electricity & Magnetism', 'Optics & Waves']
  },
  {
    id: 'psych-soc',
    name: 'Psychology & Sociology',
    icon: BrainCircuit,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    topics: ['Learning & Memory', 'Theories of Personality', 'Social Structures', 'Psychological Disorders']
  }
];

export function ContentReview() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Content Review</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            High-yield summaries, key concepts, and memorization tips for every MCAT subject.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, i) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className={`p-6 ${subject.bgColor} border-b border-gray-100 flex items-center`}>
                  <Icon className={`w-8 h-8 ${subject.color} mr-3`} />
                  <h2 className="text-xl font-bold text-gray-900">{subject.name}</h2>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">High-Yield Topics</h3>
                  <ul className="space-y-3 mb-6 flex-1">
                    {subject.topics.map(topic => (
                      <li key={topic} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/content-review/${subject.id}`}
                    className="mt-auto block w-full text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    View Study Guides
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
