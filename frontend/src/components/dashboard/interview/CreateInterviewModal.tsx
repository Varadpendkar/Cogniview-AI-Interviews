import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import DetailsPopup from './DetailsPopup';
import QuestionsPopup from './QuestionsPopup';

interface Interviewer {
  id: string;
  name: string;
  avatar: string;
}

interface Question {
  id: string;
  question: string;
  followUpCount: number;
}

interface InterviewData {
  name: string;
  interviewerId: string;
  objective: string;
  questionCount: number;
  duration: number;
  isAnonymous: boolean;
  questions: Question[];
  description: string;
}

interface CreateInterviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  interviewers: Interviewer[];
  onInterviewCreated?: () => void;
}

type Step = 'details' | 'questions';

const CreateInterviewModal: React.FC<CreateInterviewModalProps> = ({
  open,
  onOpenChange,
  interviewers,
  onInterviewCreated,
}) => {
  const [step, setStep] = useState<Step>('details');
  const [interviewData, setInterviewData] = useState<InterviewData>({
    name: '',
    interviewerId: '',
    objective: '',
    questionCount: 5,
    duration: 30,
    isAnonymous: false,
    questions: [],
    description: '',
  });

  // Reset to details step when modal closes
  useEffect(() => {
    if (!open) {
      setStep('details');
    }
  }, [open]);

  const handleNext = (data: Partial<InterviewData>) => {
    setInterviewData((prev) => ({ ...prev, ...data }));
    setStep('questions');
  };

  const handleBack = (data: Partial<InterviewData>) => {
    setInterviewData((prev) => ({ ...prev, ...data }));
    setStep('details');
  };

  const handleSave = (data: InterviewData) => {
    console.log('Saving interview:', data);
    // Here you would typically send the data to your backend
    alert(`Interview "${data.name}" created successfully!`);
    onOpenChange(false);
    if (onInterviewCreated) {
      onInterviewCreated();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>
            {step === 'details' ? 'Create New Interview' : 'Configure Questions'}
          </DialogTitle>
          <DialogDescription>
            {step === 'details'
              ? 'Set up the basic details for your interview'
              : 'Add and configure interview questions'}
          </DialogDescription>
        </DialogHeader>
        
        {step === 'details' ? (
          <DetailsPopup
            initialData={interviewData}
            interviewers={interviewers}
            onNext={handleNext}
          />
        ) : (
          <QuestionsPopup
            initialData={interviewData}
            onBack={handleBack}
            onSave={handleSave}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CreateInterviewModal;
