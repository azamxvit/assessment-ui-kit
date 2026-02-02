"use client";

import React from 'react';
import QuestionCard from '@/components/question-card/QuestionCard';

const MOCK_QUESTION = {
  id: "q1",
  content: "<p>What will be the output of <code>console.log(0.1 + 0.2 === 0.3)</code> in JavaScript?</p>",
  options: [
    { id: "a", text: "true" },
    { id: "b", text: "false" },
    { id: "c", text: "undefined" },
    { id: "d", text: "NaN" }
  ],
  correctAnswerId: "b",
  explanation: "<p>In JavaScript, floating point numbers are encoded according to IEEE 754. <code>0.1 + 0.2</code> adds up to <code>0.30000000000000004</code>.</p>"
};

export default function ExamPage() {
  const handleNext = () => {
    alert("Logic to load the next question would go here!");
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-black transition-colors duration-300 w-full">
      <QuestionCard 
        key={MOCK_QUESTION.id}
        question={MOCK_QUESTION} 
        onNext={handleNext}
        isDemo={false} 
      />
      </main>
  );
}