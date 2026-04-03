import { motion } from 'motion/react';
import { Heart, Battery, Brain, Coffee } from 'lucide-react';

export function Mindset() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Burnout, Motivation & Mindset</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The MCAT is a marathon, not a sprint. Taking care of your brain is just as important as filling it with facts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <Battery className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Recognizing Burnout</h3>
            <p className="text-gray-600 mb-4">
              Burnout doesn't always look like exhaustion. For me, it looked like apathy. I would stare at a UWorld passage and just not care about the answer. Other signs include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Scores dropping on practice tests</li>
              <li>Dreading waking up to study</li>
              <li>Mind wandering constantly during passages</li>
              <li>Irritability with friends and family</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <Heart className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">How I Recovered</h3>
            <p className="text-gray-600 mb-4">
              When I hit a wall in month two, I had to force myself to step back. Here is what actually helped:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Taking 2 full days off (no Anki, no guilt)</li>
              <li>Changing my study environment (coffee shops instead of my desk)</li>
              <li>Exercising for 30 mins daily, non-negotiable</li>
              <li>Talking to someone who was NOT pre-med</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 mb-16">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
            <Brain className="w-6 h-6 mr-2" />
            Dealing with Score Plateaus
          </h2>
          <div className="prose prose-indigo text-indigo-900">
            <p>
              Everyone hits a plateau. Mine was at 505. I stayed there for three weeks and thought I was broken.
            </p>
            <p>
              A plateau usually means your current strategy has taken you as far as it can. To break it, you have to change how you study. For me, that meant stopping content review entirely and focusing 100% on AAMC logic and deep review of my mistakes.
            </p>
            <p className="font-bold">
              Remember: Your practice scores are not your self-worth. They are just data points telling you what to fix next.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Coffee className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Take a break. You've got this.</h3>
        </div>

      </motion.div>
    </div>
  );
}
