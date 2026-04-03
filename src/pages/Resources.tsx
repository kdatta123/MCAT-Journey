import { motion } from 'motion/react';
import { Star, ExternalLink } from 'lucide-react';

const resources = [
  {
    category: 'Question Banks',
    items: [
      {
        name: 'UWorld MCAT',
        rating: 5,
        pros: ['Best explanations available', 'Interface mimics the real exam', 'Incredible diagrams'],
        cons: ['Expensive', 'Can be demoralizing early on'],
        howIUsedIt: 'I did 59 questions a day, untimed at first, then timed. I read every single explanation, even for questions I got right.',
        bestFor: 'Everyone. This is the single most important third-party resource.'
      },
      {
        name: 'AAMC Section Banks',
        rating: 5,
        pros: ['Written by the test makers', 'Most representative logic', 'Excellent for Phase 3'],
        cons: ['Explanations are notoriously terrible', 'Limited number of questions'],
        howIUsedIt: 'Saved for the last month of prep. I did these timed and reviewed them meticulously.',
        bestFor: 'The final 4-6 weeks of prep to learn AAMC logic.'
      }
    ]
  },
  {
    category: 'Content Review Books',
    items: [
      {
        name: 'Kaplan 7-Book Subject Review',
        rating: 4,
        pros: ['Comprehensive', 'Great end-of-chapter summaries', 'Good diagrams'],
        cons: ['Too dense', 'CARS book is not very helpful', 'Can lead to passive reading'],
        howIUsedIt: 'I read these during Phase 1, but I skipped the CARS and Psych/Soc books. I took minimal notes and focused on understanding the big picture.',
        bestFor: 'Building a foundation if you have forgotten prerequisite material.'
      }
    ]
  },
  {
    category: 'Flashcards & Spaced Repetition',
    items: [
      {
        name: 'Anki (MilesDown / AnKing Deck)',
        rating: 5,
        pros: ['Free', 'Forces active recall', 'Pre-made decks are excellent'],
        cons: ['Steep learning curve for the software', 'Can become overwhelming if you fall behind'],
        howIUsedIt: 'I did my reviews every single morning. I used the AnKing deck and suspended cards I didn\'t need, while adding my own cards for missed UWorld questions.',
        bestFor: 'Long-term retention of discrete facts (especially Psych/Soc and Biology).'
      }
    ]
  }
];

export function Resources() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Study Resources Ranked</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            An honest review of the tools I used, how I used them, and what is actually worth your money.
          </p>
        </div>

        <div className="space-y-16">
          {resources.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{section.category}</h2>
              <div className="grid grid-cols-1 gap-8">
                {section.items.map((item) => (
                  <div key={item.name} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 flex items-center">
                          {item.name}
                        </h3>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Pros</h4>
                        <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                          {item.pros.map(pro => <li key={pro}>{pro}</li>)}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-2">Cons</h4>
                        <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                          {item.cons.map(con => <li key={con}>{con}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">How I used it:</h4>
                        <p className="text-gray-600 text-sm mt-1">{item.howIUsedIt}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Best for:</h4>
                        <p className="text-gray-600 text-sm mt-1">{item.bestFor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
