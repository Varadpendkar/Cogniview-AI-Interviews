# Cogniview AI Interviews - Frontend Setup Guide

## 📋 Project Overview

Cogniview AI Interviews is a modern React-based interview management platform that allows you to create, manage, and conduct AI-powered interviews. This frontend application provides a comprehensive interface for managing interviewers, creating interviews, and tracking candidate responses.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **Axios** - HTTP client (for future API integration)

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm/yarn
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   cd "/Volumes/Sandisk 128/AIInter-main/Cogniview AI Interviews/frontend"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open your browser at `http://localhost:5173`
   - If port 5173 is busy, Vite will automatically use the next available port

## 🗂️ Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/                          # Reusable UI components
│   │   │   ├── button.tsx               # Button component
│   │   │   ├── card.tsx                 # Card component
│   │   │   ├── dialog.tsx               # Modal dialog
│   │   │   ├── input.tsx                # Input field
│   │   │   ├── label.tsx                # Form label
│   │   │   ├── scroll-area.tsx          # Custom scrollable area
│   │   │   ├── select.tsx               # Select dropdown
│   │   │   ├── skeleton.tsx             # Loading skeleton
│   │   │   ├── switch.tsx               # Toggle switch
│   │   │   ├── table.tsx                # Table component
│   │   │   ├── tabs.tsx                 # Tabs component
│   │   │   ├── textarea.tsx             # Textarea field
│   │   │   └── ...                      # Other UI components
│   │   │
│   │   └── dashboard/
│   │       └── interview/               # Interview-related components
│   │           ├── InterviewCard.tsx    # Interview display card
│   │           ├── QuestionCard.tsx     # Question editor card
│   │           ├── DetailsPopup.tsx     # Step 1: Interview details form
│   │           ├── QuestionsPopup.tsx   # Step 2: Questions editor
│   │           └── CreateInterviewModal.tsx  # Multi-step interview creation
│   │
│   ├── pages/
│   │   ├── Dashboard.tsx                # Main dashboard page
│   │   └── Interviewers.tsx             # Interviewers management page
│   │
│   ├── lib/
│   │   └── utils.ts                     # Utility functions (cn, etc.)
│   │
│   ├── App.tsx                          # Main app component with routing
│   ├── main.tsx                         # App entry point
│   └── index.css                        # Global styles
│
├── public/                              # Static assets
├── components.json                      # shadcn/ui configuration
├── tailwind.config.js                   # Tailwind CSS configuration
├── tsconfig.json                        # TypeScript configuration
├── vite.config.ts                       # Vite configuration
└── package.json                         # Dependencies and scripts
```

## 🎯 Key Features Implemented

### ✅ Interview Management
- **Create Interview** - Multi-step modal with:
  - Step 1: Interview details (name, interviewer, objective, settings)
  - Step 2: Questions configuration (add, edit, delete questions)
  - AI-powered question generation (simulated)
  - Manual question creation
  - Follow-up questions support (0-3 per question)
  
- **Interview Cards** - Display interviews with:
  - Interviewer avatar
  - Interview name
  - Response count
  - Copy link functionality
  - View details navigation

### ✅ Dashboard
- Statistics cards (Total Interviews, Active Candidates, Success Rate, Avg Duration)
- Quick action cards (Create Interview, Manage Interviewers, View Analytics)
- Interview cards grid with horizontal scroll
- Recent interviews list with status badges

### ✅ UI Components
- **Tabs** - Navigation between sections
- **Table** - Data display with sorting
- **ScrollArea** - Custom scrollable containers
- **Skeleton** - Loading states
- **Switch** - Toggle controls
- **Dialog** - Modal windows
- **Card** - Content containers
- **Button** - Action buttons
- **Form Controls** - Input, Select, Textarea, Label

## 🛠️ Development Workflow

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Adding New Components

1. **Using shadcn/ui CLI** (recommended for UI components):
   ```bash
   npx shadcn-ui@latest add [component-name]
   ```

2. **Manual component creation**:
   - Create file in `src/components/` or appropriate subdirectory
   - Use TypeScript for type safety
   - Follow existing component patterns
   - Export as default or named export

### Code Style Guidelines

- Use **TypeScript** for all components
- Follow **React functional components** pattern
- Use **Tailwind CSS** for styling
- Leverage **shadcn/ui** components for consistency
- Keep components **small and focused**
- Use **absolute imports** with `@/` prefix

## 🔧 Configuration

### Path Aliases

The project uses TypeScript path mapping for cleaner imports:

```typescript
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

Configuration in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Tailwind Configuration

Custom theme extensions in `tailwind.config.js`:
- Custom colors for consistent branding
- Custom border radius values
- CSS variables for dynamic theming

## 📚 Component Documentation

### CreateInterviewModal

Multi-step modal for creating new interviews.

**Props:**
- `open: boolean` - Controls modal visibility
- `onOpenChange: (open: boolean) => void` - Callback for state changes
- `interviewers: Interviewer[]` - List of available interviewers
- `onInterviewCreated?: () => void` - Success callback

**Usage:**
```tsx
<CreateInterviewModal
  open={isModalOpen}
  onOpenChange={setIsModalOpen}
  interviewers={mockInterviewers}
  onInterviewCreated={handleRefresh}
/>
```

### InterviewCard

Displays individual interview information.

**Props:**
- `interview: Interview` - Interview data object
- `interviewerImage?: string` - Avatar/emoji for interviewer

**Features:**
- Copy interview link to clipboard
- Navigate to interview details
- Shows response count
- Hover effects

### DetailsPopup

First step of interview creation - collects basic details.

**Fields:**
- Interview Name
- Interviewer Selection
- Objective/Description
- Number of Questions (1-20)
- Duration (5-120 minutes)
- Anonymous Mode Toggle

**Actions:**
- Create Manually - Sets 1 empty question
- Generate with AI - Simulates AI generation with loading state

### QuestionsPopup

Second step of interview creation - configure questions.

**Features:**
- Scrollable question list
- Add new questions (up to configured limit)
- Delete questions
- Edit question text
- Set follow-up count (0-3)
- Interview description
- Back to previous step
- Validation before save

## 🚦 Current State

### ✅ Completed
- Core interview creation flow
- Dashboard with statistics
- Interview cards display
- Multi-step modal system
- UI component library (tabs, table, scroll-area, skeleton, switch)
- Responsive layout
- Toast notifications
- Form validation

### 🔄 In Progress
- Interviewers page (basic structure exists)

### 📋 Todo
- File upload component (PDF/resume support)
- Edit interview functionality
- Interview details page
- Response viewing (QuestionAnswerCard)
- Share interview popup
- Data table with filtering/sorting
- Call/Session interface
- Analytics page
- Backend API integration
- Authentication system

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is busy, Vite automatically selects the next available port. Check the terminal output for the correct URL.

### Module Not Found Errors

1. Ensure all dependencies are installed:
   ```bash
   npm install
   ```

2. Check that path aliases are configured in `tsconfig.json`

3. Restart the dev server:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

### TypeScript Errors

1. Check `tsconfig.json` is properly configured
2. Ensure all imported components exist
3. Run type checking:
   ```bash
   npx tsc --noEmit
   ```

### Styling Issues

1. Verify Tailwind is configured in `tailwind.config.js`
2. Check `index.css` imports Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## 📖 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Router](https://reactrouter.com/)

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Ensure no TypeScript errors
5. Commit with descriptive messages
6. Create a pull request

## 📄 License

[Add your license information here]

## 💡 Tips

- Use the browser DevTools for debugging
- Check browser console for errors
- Use React DevTools extension for component inspection
- Leverage Vite's HMR for rapid development
- Keep components small and reusable
- Use TypeScript types for better IDE support

---

**Last Updated:** January 28, 2026
**Version:** 1.0.0
**Status:** Active Development
