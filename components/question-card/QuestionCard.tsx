"use client";
import React, { useState } from 'react';
import { Question, SubmissionStatus } from './types';
import { CardHeader, AnswerForm, AnswerOption, ExplanationSection, ActionController } from './QuestionCardUI';

interface QuestionCardProps {
  question: Question;
  onNext: () => void;
  isDemo?: boolean;
}

export default function QuestionCard({ question, onNext, isDemo = false }: QuestionCardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [status, setStatus] = useState<SubmissionStatus>('IDLE');

  const isInteractionDisabled = status === 'SUBMITTING' || status === 'SUCCESS' || status === 'WRONG';
  
  const handleCheck = async () => {
    if (!selectedId || status === 'SUBMITTING') return;
    setStatus('SUBMITTING');
    

    await new Promise(r => setTimeout(r, 600));
    const isCorrect = selectedId === question.correctAnswerId;
    setStatus(isCorrect ? 'SUCCESS' : 'WRONG');
  };

  return (
    <article className="w-full max-w-2xl mx-auto bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm border border-border transition-colors duration-300">
      
      <CardHeader content={question.content} />

      <div className="card-content">
        <AnswerForm disabled={isInteractionDisabled}>
          {question.options.map((opt) => (
            <AnswerOption
              key={opt.id}
              text={opt.text}
              isSelected={selectedId === opt.id}
              status={status}
              onClick={() => !isInteractionDisabled && setSelectedId(opt.id)}
            />
          ))}
        </AnswerForm>
      </div>

      {(status === 'SUCCESS' || status === 'WRONG') && (
        <ExplanationSection content={question.explanation} isDemo={isDemo} />
      )}

      <ActionController status={status} onCheck={handleCheck} onNext={onNext} />
    </article>
  );
}