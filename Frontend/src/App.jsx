import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import RegisterPage from "./Pages/RegisterPage";
import TransactionsPage from "./Pages/TransactionsPage";
import ReportPage from "./Pages/ReportPage";
import AiChatPage from "./Pages/AiChatPage";
import TermsAndConditions from "./Pages/TermsAndConditions";
import { AuthProvider } from "./Pages/useAuth";

function PrivateRoute({ children }) {
  const userId = sessionStorage.getItem("userId");
  console.log("userId:", userId);
  return userId ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />

          <Route path="/home" element={<PrivateRoute><TransactionsPage /></PrivateRoute>} />
          <Route path="/report" element={<PrivateRoute><ReportPage /></PrivateRoute>} />
          <Route path="/ai-chat" element={<PrivateRoute><AiChatPage /></PrivateRoute>} />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
