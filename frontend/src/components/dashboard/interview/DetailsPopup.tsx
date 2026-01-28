import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Loader2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

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

interface DetailsPopupProps {
  interviewers: any[];
  onNext: (data: InterviewBase) => void;
}

const DetailsPopup: React.FC<DetailsPopupProps> = ({ interviewers, onNext }) => {
  const [name, setName] = useState('');
  const [selectedInterviewer, setSelectedInterviewer] = useState('');
  const [objective, setObjective] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [numQuestions, setNumQuestions] = useState('');
  const [duration, setDuration] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateQuestions = async () => {
    if (!name || !objective || !numQuestions || !selectedInterviewer || !duration) {
      alert('Please fill all required fields');
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI question generation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const generatedQuestions: Question[] = Array.from({ length: parseInt(numQuestions) }, (_, i) => ({
      id: uuidv4(),
      question: `Sample question ${i + 1} for ${objective}`,
      follow_up_count: 1,
    }));

    const interviewData: InterviewBase = {
      name: name.trim(),
      interviewer_id: selectedInterviewer,
      objective: objective.trim(),
      question_count: parseInt(numQuestions),
      time_duration: duration,
      is_anonymous: isAnonymous,
      questions: generatedQuestions,
      description: `Interview for ${name} - ${objective}`,
    };

    setIsGenerating(false);
    onNext(interviewData);
  };

  const handleManual = () => {
    if (!name || !selectedInterviewer || !numQuestions || !duration) {
      alert('Please fill all required fields');
      return;
    }

    const interviewData: InterviewBase = {
      name: name.trim(),
      interviewer_id: selectedInterviewer,
      objective: objective.trim(),
      question_count: parseInt(numQuestions),
      time_duration: duration,
      is_anonymous: isAnonymous,
      questions: [{ id: uuidv4(), question: '', follow_up_count: 1 }],
      description: '',
    };

    onNext(interviewData);
  };

  return (
    <div className="space-y-6 p-1">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Create an Interview</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Fill in the details to create your interview
        </p>
      </div>

      <div className="space-y-4">
        {/* Interview Name */}
        <div>
          <Label htmlFor="interview-name">Interview Name *</Label>
          <Input
            id="interview-name"
            placeholder="e.g., Senior Frontend Developer"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1"
          />
        </div>

        {/* Interviewer Selection */}
        <div>
          <Label htmlFor="interviewer">Select Interviewer *</Label>
          <select
            id="interviewer"
            value={selectedInterviewer}
            onChange={(e) => setSelectedInterviewer(e.target.value)}
            className="w-full mt-1 border rounded-md px-3 py-2"
          >
            <option value="">Choose an interviewer</option>
            {interviewers.map((interviewer) => (
              <option key={interviewer.id} value={interviewer.id}>
                {interviewer.name}
              </option>
            ))}
          </select>
        </div>

        {/* Objective */}
        <div>
          <Label htmlFor="objective">Interview Objective</Label>
          <Textarea
            id="objective"
            placeholder="What skills or qualities are you evaluating?"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            rows={3}
            className="mt-1"
          />
        </div>

        {/* Number of Questions & Duration */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="num-questions">Number of Questions *</Label>
            <Input
              id="num-questions"
              type="number"
              min="1"
              max="20"
              placeholder="5"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="duration">Duration (minutes) *</Label>
            <Input
              id="duration"
              type="number"
              min="5"
              max="120"
              placeholder="30"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        {/* Anonymous Toggle */}
        <div className="flex items-center justify-between p-3 border rounded-md">
          <div>
            <Label>Anonymous Interview</Label>
            <p className="text-sm text-muted-foreground">
              Candidate identities will be hidden
            </p>
          </div>
          <Switch checked={isAnonymous} onCheckedChange={setIsAnonymous} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleManual}
          disabled={isGenerating}
        >
          Create Manually
        </Button>
        <Button
          className="flex-1"
          onClick={handleGenerateQuestions}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate with AI'
          )}
        </Button>
      </div>
    </div>
  );
};

export default DetailsPopup;
