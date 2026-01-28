import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';

const Interviewers: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [interviewerName, setInterviewerName] = useState('');
  const [interviewerDescription, setInterviewerDescription] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const interviewers = [
    {
      id: 1,
      name: 'Technical Expert',
      role: 'Senior Software Engineer',
      description: 'Specializes in system design and algorithmic problem-solving',
      avatar: '👨‍💻',
      interviews: 45,
    },
    {
      id: 2,
      name: 'HR Professional',
      role: 'People Manager',
      description: 'Focuses on behavioral and cultural fit assessments',
      avatar: '👩‍💼',
      interviews: 32,
    },
    {
      id: 3,
      name: 'Product Strategist',
      role: 'Product Manager',
      description: 'Evaluates product thinking and strategic decision-making',
      avatar: '🎯',
      interviews: 28,
    },
    {
      id: 4,
      name: 'Data Scientist',
      role: 'Analytics Lead',
      description: 'Tests data analysis and machine learning knowledge',
      avatar: '📊',
      interviews: 19,
    },
    {
      id: 5,
      name: 'UX Designer',
      role: 'Design Lead',
      description: 'Assesses design thinking and user empathy',
      avatar: '🎨',
      interviews: 24,
    },
  ];

  const handleCreateInterviewer = () => {
    console.log('Creating interviewer:', { interviewerName, interviewerDescription });
    // TODO: Add API call to create interviewer
    setIsCreateModalOpen(false);
    setInterviewerName('');
    setInterviewerDescription('');
  };

  const slideLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI Interviewers
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage and customize your AI interviewer personalities
          </p>
        </div>
        <Button className="gap-2" onClick={() => setIsCreateModalOpen(true)}>
          <Plus className="w-4 h-4" />
          Create Interviewer
        </Button>
      </div>

      {/* Interviewers Carousel */}
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg"
          onClick={slideLeft}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {interviewers.map((interviewer) => (
            <Card
              key={interviewer.id}
              className="min-w-[320px] hover:shadow-xl transition-all cursor-pointer flex-shrink-0"
              style={{ scrollSnapAlign: 'start' }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-3xl">
                    {interviewer.avatar}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{interviewer.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="w-3 h-3 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{interviewer.role}</p>
                    </div>
                  </div>
                </div>
                <CardDescription className="line-clamp-2">
                  {interviewer.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{interviewer.interviews}</p>
                    <p className="text-xs text-muted-foreground">Interviews</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg"
          onClick={slideRight}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Interviewers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-purple-600">{interviewers.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-blue-600">
              {interviewers.reduce((sum, int) => sum + int.interviews, 0)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Avg per Interviewer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600">
              {Math.round(interviewers.reduce((sum, int) => sum + int.interviews, 0) / interviewers.length)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Create Interviewer Modal */}
      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Create New Interviewer</DialogTitle>
            <DialogDescription>
              Create a new AI interviewer with custom personality and expertise.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="interviewer-name">Interviewer Name</Label>
              <Input
                id="interviewer-name"
                placeholder="e.g., Technical Expert"
                value={interviewerName}
                onChange={(e) => setInterviewerName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="interviewer-description">Description</Label>
              <Textarea
                id="interviewer-description"
                placeholder="Describe the interviewer's expertise and style..."
                value={interviewerDescription}
                onChange={(e) => setInterviewerDescription(e.target.value)}
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateInterviewer}>
              Create Interviewer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Interviewers;
