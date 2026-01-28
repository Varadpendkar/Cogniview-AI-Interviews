import React, { useState, useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, ChevronLeft } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import QuestionCard from './QuestionCard';

interface Question {
  id: string;
  question: string;
  follow_up_count: number;
}

interface InterviewBase {
  name: string;
  interviewer_id: string;
  objective: string;
  question_count: number;
  time_duration: string;
  is_anonymous: boolean;
  questions: Question[];
  description: string;
}

interface QuestionsPopupProps {
  interviewData: InterviewBase;
  onBack: () => void;
  onSave: (data: InterviewBase) => void;
}

const QuestionsPopup: React.FC<QuestionsPopupProps> = ({
  interviewData,
  onBack,
  onSave,
}) => {
  const [questions, setQuestions] = useState<Question[]>(interviewData.questions);
  const [description, setDescription] = useState(interviewData.description);
  const [isSaving, setIsSaving] = useState(false);
  const endOfListRef = useRef<HTMLDivElement>(null);
  const prevQuestionLengthRef = useRef(questions.length);

  const handleInputChange = (id: string, newQuestion: Question) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, ...newQuestion } : question
      )
    );
  };

  const handleDeleteQuestion = (id: string) => {
    if (questions.length === 1) {
      setQuestions(
        questions.map((question) => ({
          ...question,
          question: '',
          follow_up_count: 1,
        }))
      );
      return;
    }
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const handleAddQuestion = () => {
    if (questions.length < interviewData.question_count) {
      setQuestions([
        ...questions,
        { id: uuidv4(), question: '', follow_up_count: 1 },
      ]);
    }
  };

  const handleSave = async () => {
    // Validate that all questions have content
    const emptyQuestions = questions.filter(q => !q.question.trim());
    if (emptyQuestions.length > 0) {
      alert('Please fill in all questions before saving');
      return;
    }

    setIsSaving(true);
    
    const updatedData: InterviewBase = {
      ...interviewData,
      questions,
      description,
    };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSave(updatedData);
    setIsSaving(false);
  };

  useEffect(() => {
    if (questions.length > prevQuestionLengthRef.current) {
      endOfListRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    prevQuestionLengthRef.current = questions.length;
  }, [questions.length]);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="relative flex justify-center items-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0"
          onClick={onBack}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-semibold">Create Interview</h2>
      </div>

      <p className="text-sm text-muted-foreground text-center px-4">
        We will be using these questions during the interviews. Please make sure they are ok.
      </p>

      {/* Description */}
      <div>
        <Label htmlFor="description">Interview Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief description of this interview..."
          rows={2}
          className="mt-1"
        />
      </div>

      {/* Questions List */}
      <ScrollArea className="h-[320px] pr-4">
        <div className="space-y-3">
          {questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              questionNumber={index + 1}
              questionData={question}
              onDelete={handleDeleteQuestion}
              onQuestionChange={handleInputChange}
            />
          ))}
          <div ref={endOfListRef} />
        </div>
      </ScrollArea>

      {/* Add Question Button */}
      {questions.length < interviewData.question_count && (
        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            onClick={handleAddQuestion}
            className="gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Question ({questions.length}/{interviewData.question_count})
          </Button>
        </div>
      )}

      {/* Save Button */}
      <div className="pt-4">
        <Button
          className="w-full"
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? 'Creating Interview...' : 'Create Interview'}
        </Button>
      </div>
    </div>
  );
};

export default QuestionsPopup;
