/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { StudyPlan } from './pages/StudyPlan';
import { ContentReview } from './pages/ContentReview';
import { ContentReviewSubject } from './pages/ContentReviewSubject';
import { Resources } from './pages/Resources';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { PracticeStrategy } from './pages/PracticeStrategy';
import { Mindset } from './pages/Mindset';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="study-plan" element={<StudyPlan />} />
          <Route path="content-review" element={<ContentReview />} />
          <Route path="content-review/:id" element={<ContentReviewSubject />} />
          <Route path="resources" element={<Resources />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="practice" element={<PracticeStrategy />} />
          <Route path="mindset" element={<Mindset />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
