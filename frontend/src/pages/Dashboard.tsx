import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, TrendingUp, Clock, ArrowRight, Plus } from 'lucide-react';
import InterviewCard from '@/components/dashboard/interview/InterviewCard';
import CreateInterviewModal from '@/components/dashboard/interview/CreateInterviewModal';

const Dashboard: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Mock data for interviewers
  const mockInterviewers = [
    { id: '1', name: 'Technical Expert', avatar: '👨‍💻' },
    { id: '2', name: 'HR Professional', avatar: '👩‍💼' },
    { id: '3', name: 'Product Strategist', avatar: '🎯' },
  ];

  // Mock data for interviews
  const mockInterviews = [
    {
      id: '1',
      name: 'Senior Frontend Developer',
      interviewerId: '1',
      url: 'senior-frontend-dev',
      readableSlug: 'senior-frontend-dev',
      responseCount: 12,
      interviewerImage: '👨‍💻',
    },
    {
      id: '2',
      name: 'Product Manager Interview',
      interviewerId: '3',
      url: 'product-manager',
      readableSlug: 'product-manager',
      responseCount: 8,
      interviewerImage: '🎯',
    },
    {
      id: '3',
      name: 'Data Scientist Position',
      interviewerId: '1',
      url: 'data-scientist',
      readableSlug: 'data-scientist',
      responseCount: 5,
      interviewerImage: '👨‍💻',
    },
  ];

  const handleInterviewCreated = () => {
    // TODO: Refresh interviews list
    console.log('Interview created successfully');
  };

  const stats = [
    { label: 'Total Interviews', value: '24', icon: Calendar, trend: '+12%' },
    { label: 'Active Interviewers', value: '8', icon: Users, trend: '+3' },
    { label: 'Completion Rate', value: '87%', icon: TrendingUp, trend: '+5%' },
    { label: 'Avg. Duration', value: '42m', icon: Clock, trend: '-2m' },
  ];

  const recentInterviews = [
    { id: 1, name: 'Senior Frontend Developer', status: 'Completed', date: '2 hours ago' },
    { id: 2, name: 'Product Manager', status: 'In Progress', date: '5 hours ago' },
    { id: 3, name: 'Data Analyst', status: 'Scheduled', date: 'Tomorrow' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome Back!
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your AI interviews and track candidate performance
          </p>
        </div>
        <Button className="gap-2" onClick={() => setIsCreateModalOpen(true)}>
          <Plus className="w-4 h-4" />
          New Interview
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 mt-1">
                  {stat.trend} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/dashboard/interviewers" className="block group">
          <Card className="hover:shadow-xl transition-all hover:border-purple-500">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="group-hover:text-purple-600 transition-colors">
                Manage Interviewers
              </CardTitle>
              <CardDescription>
                Create and customize AI interviewer personalities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="gap-2 p-0">
                View All Interviewers
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Card 
          className="hover:shadow-xl transition-all hover:border-blue-500 cursor-pointer group"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="group-hover:text-blue-600 transition-colors">
              Interview Sessions
            </CardTitle>
            <CardDescription>
              Schedule and manage interview sessions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" className="gap-2 p-0">
              Create New Interview
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all hover:border-green-500 cursor-pointer group">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="group-hover:text-green-600 transition-colors">
              Analytics & Insights
            </CardTitle>
            <CardDescription>
              Track performance and view detailed analytics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" className="gap-2 p-0">
              View Analytics
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Your Interviews Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Your Interviews</CardTitle>
              <CardDescription>Manage and track all your interview sessions</CardDescription>
            </div>
            <Button onClick={() => setIsCreateModalOpen(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Create Interview
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {mockInterviews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No interviews yet. Create your first one!</p>
              <Button onClick={() => setIsCreateModalOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Interview
              </Button>
            </div>
          ) : (
            <div className="flex gap-4 overflow-x-auto pb-4">
              {mockInterviews.map((interview) => (
                <InterviewCard
                  key={interview.id}
                  id={interview.id}
                  name={interview.name}
                  interviewerId={interview.interviewerId}
                  url={interview.url}
                  readableSlug={interview.readableSlug}
                  responseCount={interview.responseCount}
                  interviewerImage={interview.interviewerImage}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Interviews</CardTitle>
          <CardDescription>Your latest interview sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInterviews.map((interview) => (
              <div
                key={interview.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer"
              >
                <div>
                  <p className="font-semibold">{interview.name}</p>
                  <p className="text-sm text-muted-foreground">{interview.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      interview.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : interview.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {interview.status}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Create Interview Modal */}
      <CreateInterviewModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        interviewers={mockInterviewers}
        onInterviewCreated={handleInterviewCreated}
      />
    </div>
  );
};

export default Dashboard;
