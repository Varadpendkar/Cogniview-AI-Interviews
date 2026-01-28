import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  follow_up_count: number;
}

interface QuestionCardProps {
  questionNumber: number;
  questionData: Question;
  onDelete: (id: string) => void;
  onQuestionChange: (id: string, newQuestion: Question) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  questionData,
  onDelete,
  onQuestionChange,
}) => {
  const handleQuestionChange = (value: string) => {
    onQuestionChange(questionData.id, {
      ...questionData,
      question: value,
    });
  };

  const handleFollowUpChange = (value: number) => {
    onQuestionChange(questionData.id, {
      ...questionData,
      follow_up_count: value,
    });
  };

  return (
    <div className="mb-4 p-4 border rounded-lg bg-card">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-semibold">Question {questionNumber}</h4>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(questionData.id)}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      <Textarea
        placeholder="Enter your question here..."
        value={questionData.question}
        onChange={(e) => handleQuestionChange(e.target.value)}
        rows={3}
        className="mb-3"
      />
      <div className="flex items-center gap-2">
        <label className="text-sm text-muted-foreground">
          Follow-up questions:
        </label>
        <select
          value={questionData.follow_up_count}
          onChange={(e) => handleFollowUpChange(Number(e.target.value))}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
    </div>
  );
};

export default QuestionCard;
