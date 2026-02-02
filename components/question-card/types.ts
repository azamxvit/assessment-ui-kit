// ВАЖНО: слово export обязательно!
export type SubmissionStatus = 'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'WRONG' | 'ERROR';

export interface AnswerOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  content: string;
  options: AnswerOption[];
  correctAnswerId: string;
  explanation: string;
}