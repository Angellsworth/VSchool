import "./App.css"
import { UserContext } from "./context/userProvider" 
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Public from "./pages/Public"
import Auth from "./pages/Auth"
// import CreateRecipe from "./pages/CreateRecipe"
import Profile from "./pages/Profile"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"
import { useContext } from "react"


export default function App() {
  const { token, logout } = useContext(UserContext)

  return (
    <div className="App" >
      <Router>
        <div className="topHeadline">
          <h1 className="headlineH1">Hand Me Down Dishes</h1>
          <h3 className="headlineH3"> ~Treasured Family Recipes~ </h3>
        </div>
        
       <Navbar logout={logout} token={token}/>

        <Routes>
          <Route 
            path="/" 
            element={ token ? <Navigate to="/profile"/> : <Auth /> } /> 
          <Route 
            path="/public" 
            element={<ProtectedRoute token={token} redirectTo="/">
              <Public />
            </ProtectedRoute>} />
          
          <Route 
            path="/profile" element={<ProtectedRoute token={token} redirectTo="/">
              <Profile />
            </ProtectedRoute>} />
        </Routes>
      </Router>

    </div>
  )
}
