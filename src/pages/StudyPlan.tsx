import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Clock, Target } from 'lucide-react';

export function StudyPlan() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">My 3-Month Study Plan</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured, day-by-day approach to conquering the MCAT without burning out.
          </p>
        </div>

        {/* Phase Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { phase: 'Phase 1', title: 'Content Review', weeks: 'Weeks 1-4', focus: 'Building the foundation', color: 'bg-blue-50 text-blue-700 border-blue-200' },
            { phase: 'Phase 2', title: 'Practice & UWorld', weeks: 'Weeks 5-8', focus: 'Applying knowledge', color: 'bg-purple-50 text-purple-700 border-purple-200' },
            { phase: 'Phase 3', title: 'AAMC Material', weeks: 'Weeks 9-12', focus: 'Test logic & stamina', color: 'bg-green-50 text-green-700 border-green-200' },
          ].map((p) => (
            <div key={p.phase} className={`p-6 rounded-2xl border ${p.color}`}>
              <div className="text-sm font-bold uppercase tracking-wider mb-2">{p.phase}</div>
              <h3 className="text-xl font-bold mb-1">{p.title}</h3>
              <div className="flex items-center text-sm font-medium opacity-80 mb-3">
                <Calendar className="w-4 h-4 mr-1" /> {p.weeks}
              </div>
              <p className="text-sm opacity-90">{p.focus}</p>
            </div>
          ))}
        </div>

        {/* Daily Routine */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-16">
          <div className="px-6 py-8 border-b border-gray-200 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-indigo-600" />
              My Daily Routine (Full-Time Studying)
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { time: '8:00 AM - 9:30 AM', task: 'Anki Reviews (Spaced Repetition)', desc: 'Never skip this. Do it first thing while fresh.' },
              { time: '9:30 AM - 12:30 PM', task: 'Content Review / Practice Block 1', desc: 'Read 2 chapters or do 59 UWorld questions.' },
              { time: '12:30 PM - 1:30 PM', task: 'Lunch & Break', desc: 'Step away from the desk. Go for a walk.' },
              { time: '1:30 PM - 4:30 PM', task: 'Practice Block 2 & Review', desc: 'Reviewing mistakes takes longer than doing the questions.' },
              { time: '4:30 PM - 5:30 PM', task: 'CARS Practice', desc: '2-3 passages daily. Consistency is key for CARS.' },
              { time: 'Evening', task: 'Relax', desc: 'No studying after dinner to prevent burnout.' },
            ].map((item) => (
              <div key={item.time} className="p-6 sm:flex sm:items-start">
                <div className="sm:w-48 flex-shrink-0 mb-2 sm:mb-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {item.time}
                  </span>
                </div>
                <div className="sm:ml-4">
                  <h4 className="text-lg font-bold text-gray-900">{item.task}</h4>
                  <p className="mt-1 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strategies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-6 h-6 mr-2 text-indigo-600" />
            Core Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'The 1/3 Rule', desc: 'Spend 1/3 of your time doing questions, and 2/3 of your time reviewing them thoroughly.' },
              { title: 'Spaced Repetition', desc: 'Use Anki daily. Making your own cards for missed questions is high-yield.' },
              { title: 'Simulate Test Day', desc: 'Take full-length exams at 8 AM, with the exact breaks allowed on test day.' },
              { title: 'Rest Days are Mandatory', desc: 'Take one full day off per week. No Anki, no reading. Let your brain recover.' },
            ].map((strategy) => (
              <div key={strategy.title} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{strategy.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{strategy.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-indigo-50 rounded-2xl p-8 text-center border border-indigo-100">
          <h3 className="text-xl font-bold text-indigo-900 mb-2">Want the exact spreadsheet?</h3>
          <p className="text-indigo-700 mb-6">Download my customizable Excel study schedule template.</p>
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
            Download Template
          </button>
        </div>
      </motion.div>
    </div>
  );
}
