import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { AuthProvider } from "./context/AuthContext"


function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}/>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/register" element={<Register></Register>}/>
          <Route path="/tasks" element={<h1>Task page</h1>}/>
          <Route path="/add-task" element={<h1>New task</h1>}/>
          <Route path="/tasks/:id" element={<h1>update task</h1>}/>
          <Route path="/profile" element={<h1>Profile</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}


export default App