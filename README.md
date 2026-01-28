# Cogniview AI Interviews

A modern React-based interview management platform for creating, managing, and conducting AI-powered interviews.

## 🚀 Live Demo

[View Live Demo](https://your-deployment-url.vercel.app)

## 📋 Features

- ✅ **Interview Management** - Create and manage technical interviews
- ✅ **Multi-step Interview Creation** - Intuitive wizard for setting up interviews
- ✅ **AI Question Generation** - Generate interview questions using AI
- ✅ **Interviewer Management** - Manage AI interviewer personalities
- ✅ **Dashboard Analytics** - Track interview metrics and performance
- ✅ **Responsive Design** - Works seamlessly on all devices

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Routing:** React Router v6
- **State Management:** React Context + Hooks
- **Icons:** Lucide React
- **Notifications:** Sonner

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone git@github.com:Varadpendkar/Cogniview-AI-Interviews.git
   cd Cogniview-AI-Interviews/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub** (already done)
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `Cogniview-AI-Interviews`

3. **Configure Project Settings**
   ```
   Framework Preset: Vite
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Deploy**
   - Click "Deploy"
   - Your app will be live in ~2 minutes!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy: Y
   - Which scope: [Your account]
   - Link to existing project: N
   - Project name: cogniview-ai-interviews
   - In which directory is your code located: ./
   - Want to override settings: N

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   └── dashboard/             # Dashboard-specific components
│   ├── pages/                     # Page components
│   ├── lib/                       # Utility functions
│   ├── contexts/                  # React contexts
│   ├── api/                       # API client functions
│   ├── App.tsx                    # Main app component
│   └── main.tsx                   # Entry point
├── public/                        # Static assets
├── vercel.json                    # Vercel configuration
├── vite.config.ts                 # Vite configuration
├── tailwind.config.ts             # Tailwind configuration
└── package.json                   # Dependencies
```

## 🔧 Configuration Files

### vercel.json
Handles client-side routing for React Router:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### vite.config.ts
Configures path aliases and dev server:
```typescript
{
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
```

## 🎨 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🌐 Environment Variables

Create a `.env` file in the `frontend` directory (optional):

```env
VITE_API_URL=http://localhost:5000
```

## 📱 Features Implementation Status

### ✅ Completed
- [x] Dashboard with statistics
- [x] Interview creation (multi-step modal)
- [x] Interview cards display
- [x] Question management
- [x] AI question generation (simulated)
- [x] Responsive design
- [x] Toast notifications

### 🚧 In Progress
- [ ] Interviewers management page
- [ ] Interview details page
- [ ] File upload functionality

### 📋 Planned
- [ ] Backend API integration
- [ ] User authentication
- [ ] Real-time interview sessions
- [ ] Analytics dashboard
- [ ] Response tracking

## 🐛 Troubleshooting

### Vercel Deployment Issues

**404 Not Found Error:**
- Ensure `vercel.json` is in the `frontend` directory
- Check that Root Directory is set to `frontend` in Vercel settings
- Verify Framework Preset is set to `Vite`

**Build Fails:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally: `npm run build`

**Blank Page After Deployment:**
- Check browser console for errors
- Verify `dist` directory is set as Output Directory
- Ensure base path in `vite.config.ts` is correct

### Local Development Issues

**Port Already in Use:**
```bash
# Kill process on port 5173
lsof -ti :5173 | xargs kill -9
```

**Module Not Found:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Documentation

For detailed setup instructions and component documentation, see [SETUP.md](./frontend/SETUP.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Varad Pendkar**
- GitHub: [@Varadpendkar](https://github.com/Varadpendkar)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ by Varad Pendkar**
