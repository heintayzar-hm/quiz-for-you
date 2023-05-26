export interface Question {
      id: string;
      question: string;
      choices: Choice[];
      correct_answer: string;
}

export interface Choice {
      id: string;
      value: string;
}

export interface QuizState {
    questions: Question[];
    loading: boolean;
    error: string | null;
}
