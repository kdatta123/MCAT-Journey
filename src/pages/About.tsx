import { motion } from 'motion/react';

export function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-lg prose-indigo mx-auto"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">About Me</h1>
        
        <img 
          src="https://picsum.photos/seed/student/800/400" 
          alt="Studying" 
          className="w-full h-64 object-cover rounded-2xl mb-8"
          referrerPolicy="no-referrer"
        />

        <p className="lead text-xl text-gray-600 mb-8">
          Hi, I'm a pre-med student who recently conquered the MCAT. I built this site to share everything I learned along the way.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">My Pre-Med Journey</h2>
        <p className="text-gray-700 mb-6">
          Like many of you, my journey to medical school hasn't been a straight line. I started as a biology major, struggled through organic chemistry, and spent countless nights wondering if I was cut out for this. The MCAT was the biggest hurdle I faced.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why I Took the MCAT (And Why I Made This Blog)</h2>
        <p className="text-gray-700 mb-6">
          When I started studying, I was overwhelmed by the sheer volume of information. There were too many resources, too many conflicting opinions on Reddit, and not enough clear, actionable advice. I started documenting my process—what worked, what didn't, and how I structured my days.
        </p>
        <p className="text-gray-700 mb-6">
          This blog is the resource I wish I had on day one.
        </p>

        <div className="bg-indigo-50 rounded-2xl p-8 my-10 border border-indigo-100">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">My Stats & Timeline</h3>
          <ul className="space-y-3 text-indigo-800">
            <li><strong>Study Duration:</strong> 3 Months (Full-time)</li>
            <li><strong>Diagnostic Score:</strong> 495</li>
            <li><strong>Final Score:</strong> 518 (130/128/130/130)</li>
            <li><strong>Primary Resources:</strong> UWorld, AAMC Materials, Anki</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">My Philosophy on Studying</h2>
        <p className="text-gray-700 mb-6">
          I believe in <strong>active recall</strong> and <strong>spaced repetition</strong> over passive reading. I believe that doing practice problems early and often is more important than knowing every single detail in the review books. Most importantly, I believe that mindset and avoiding burnout are just as critical as knowing the Krebs cycle.
        </p>

        <p className="text-gray-700 mt-8 font-medium">
          Whether you're just starting your prep or you're a month away from test day, I hope you find something here that helps you reach your goal score.
        </p>
      </motion.div>
    </div>
  );
}
