import './App.css'
import { Route, Routes } from 'react-router-dom'
import StudentIntake from './pages/StudentIntake'
import axios from 'axios'
import StudentStrength from './pages/StudentStrength';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';

axios.defaults.baseURL = "http://localhost:5000",
  axios.defaults.withCredentials = true;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/student-intake" element={<StudentIntake />} />
        <Route path="/student-strength" element={<StudentStrength />} />
      </Route>



    </Routes>
  )
}
