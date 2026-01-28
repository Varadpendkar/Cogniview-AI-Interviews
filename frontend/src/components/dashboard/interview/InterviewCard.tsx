import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, CopyCheck, ArrowUpRight } from 'lucide-react';

interface InterviewCardProps {
  id: string;
  name: string;
  interviewerId: string;
  url: string;
  readableSlug: string;
  responseCount?: number;
  interviewerImage?: string;
}

const InterviewCard: React.FC<InterviewCardProps> = ({
  id,
  name,
  readableSlug,
  responseCount = 0,
  interviewerImage = '👨‍💻',
}) => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const base_url = window.location.origin;
  const fullUrl = `${base_url}/interviews/${readableSlug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleViewDetails = () => {
    navigate(`/interviews/${id}`);
  };

  return (
    <Card className="w-56 flex-none hover:shadow-xl transition-all duration-200 cursor-pointer group">
      <CardContent className="p-5">
        {/* Header with Interviewer Avatar */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-2xl">
            {interviewerImage}
          </div>
          <div className="text-sm text-muted-foreground">
            {responseCount} {responseCount === 1 ? 'response' : 'responses'}
          </div>
        </div>

        {/* Interview Name */}
        <CardTitle className="text-lg mb-4 line-clamp-2 min-h-[3.5rem]">
          {name}
        </CardTitle>

        {/* Actions */}
        <div className="space-y-2">
          {/* Copy URL Button */}
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
          >
            {copied ? (
              <>
                <CopyCheck className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Link
              </>
            )}
          </Button>

          {/* View Details Button */}
          <Button
            className="w-full justify-start gap-2"
            onClick={handleViewDetails}
          >
            <ArrowUpRight className="w-4 h-4" />
            View Details
          </Button>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
      </CardContent>
    </Card>
  );
};

export default InterviewCard;
