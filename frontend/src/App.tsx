import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Layouts
import ClientLayout from './layouts/ClientLayout'
import UserLayout from './layouts/UserLayout'

// Pages
import Dashboard from './pages/Dashboard'
import Interviewers from './pages/Interviewers'
import InterviewDetails from './pages/InterviewDetails'
import CallPage from './pages/CallPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

// Providers
import { InterviewsProvider } from './contexts/interviews.context'
import { InterviewersProvider } from './contexts/interviewers.context'
import { ClientsProvider } from './contexts/clients.context'
import { ResponsesProvider } from './contexts/responses.context'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />

        {/* Protected Client Routes */}
        <Route
          path="/*"
          element={
            <ClientsProvider>
              <InterviewsProvider>
                <InterviewersProvider>
                  <ResponsesProvider>
                    <ClientLayout>
                      <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard/interviewers" element={<Interviewers />} />
                        <Route path="/interviews/:interviewId" element={<InterviewDetails />} />
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                      </Routes>
                    </ClientLayout>
                  </ResponsesProvider>
                </InterviewersProvider>
              </InterviewsProvider>
            </ClientsProvider>
          }
        />

        {/* User/Call Routes (may not require auth) */}
        <Route path="/call/:interviewId" element={
          <UserLayout>
            <CallPage />
          </UserLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App
