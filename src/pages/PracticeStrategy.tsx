import { motion } from 'motion/react';
import { Target, AlertTriangle, CheckSquare, Clock } from 'lucide-react';

export function PracticeStrategy() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-lg prose-indigo mx-auto"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Practice & Question Strategy</h1>
        <p className="lead text-xl text-gray-600 mb-12">
          Doing questions is only half the battle. Reviewing them correctly is where the score increases happen.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-6 flex items-center">
            <Target className="w-6 h-6 mr-2 text-indigo-600" />
            How I Approached Science Passages
          </h2>
          <ol className="space-y-4 text-gray-700">
            <li><strong>Read the title/source first:</strong> Get a quick idea of what the passage is about (e.g., "Journal of Virology").</li>
            <li><strong>Skim the passage (2-3 mins max):</strong> Don't try to understand every detail. Highlight keywords, acronyms, and the main hypothesis.</li>
            <li><strong>Analyze the figures:</strong> Look at the axes, the legend, and the general trend. Do NOT spend time understanding the exact data points until a question asks for it.</li>
            <li><strong>Attack the questions:</strong> Go back to the passage only when necessary. Many questions are pseudo-discrete and don't require the passage.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">The "Blind Review" Method</h2>
        <p className="text-gray-700 mb-6">
          This is the single most important strategy I used for full-length exams. It takes time, but it works.
        </p>
        
        <div className="space-y-6 mb-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold">1</div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-900">Take the Exam</h4>
              <p className="text-gray-600">Take the test under strict timed conditions. Flag questions you are unsure about.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold">2</div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-900">The Blind Review</h4>
              <p className="text-gray-600">Before looking at the answers or your score, go back through the exam untimed. Re-do every flagged question. Change your answer if you want to. Note your "blind" answer.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold">3</div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-900">Score & Analyze</h4>
              <p className="text-gray-600">Now check the answers. If you got it wrong timed, but right untimed, it's a timing/anxiety issue. If you got it wrong both times, it's a content gap.</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl p-8 border border-red-100 mb-12">
          <h2 className="text-2xl font-bold text-red-900 mt-0 mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-2" />
            Common Mistakes to Avoid
          </h2>
          <ul className="space-y-3 text-red-800">
            <li><strong>Doing questions without reviewing them:</strong> Doing 100 questions and not reviewing them is worse than doing 20 questions and reviewing them deeply.</li>
            <li><strong>Reading the explanation and saying "Oh, I knew that":</strong> If you got it wrong, you didn't know it well enough. Make an Anki card.</li>
            <li><strong>Ignoring the questions you got right:</strong> You might have guessed correctly for the wrong reasons. Review everything.</li>
          </ul>
        </div>

      </motion.div>
    </div>
  );
}
