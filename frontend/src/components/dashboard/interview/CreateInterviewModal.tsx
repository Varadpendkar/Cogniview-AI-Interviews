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
  const [interviewData, setInterviewData] = useState<InterviewBase>({
    name: '',
    interviewer_id: '',
    objective: '',
    question_count: 5,
    time_duration: '30',
    is_anonymous: false,
    questions: [],
    description: '',
  });

  // Reset to details step when modal closes
  useEffect(() => {
    if (!open) {
      setStep('details');
    }
  }, [open]);

  const handleNext = (data: InterviewBase) => {
    setInterviewData(data);
    setStep('questions');
  };

  const handleBack = () => {
    setStep('details');
  };

  const handleSave = (data: InterviewBase) => {
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
            interviewers={interviewers}
            onNext={handleNext}
          />
        ) : (
          <QuestionsPopup
            interviewData={interviewData}
            onBack={handleBack}
            onSave={handleSave}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CreateInterviewModal;
