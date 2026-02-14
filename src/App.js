import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Student from "./pages/Student";
import FavStudent from "./pages/FavStudent";
import AddStudent from "./pages/AddStudent";
import './index.css'
import { createContext , useState} from "react";

// Creating StudentData context
const StudentData = createContext();
function App() {

  // state For the studentList
  const [studentList, setstudentList] = useState([
  { id: Date.now()+1, Name:"A", Roll_no:"1", Dept:"CSE" },
  { id: Date.now()+2, Name:"B", Roll_no:"2", Dept:"IT" }
]);


  // msg functionality
  const msg = studentList.length === 0 ? "Add Students" : "";

  

  // state for Fav list
  const [favstudentList,setfavstudentList]=useState([
    
  ]);

  // state for new Student
  const [newStudent,setnewStudent]=useState([...studentList]);

  return (
    <StudentData.Provider value={{studentList , setstudentList , newStudent , setnewStudent , favstudentList , setfavstudentList}}>
    <BrowserRouter>
      {/* Header */}
      <h1 className="text-4xl p-4 text-white stroke-orange-700 bg-gradient-to-r from-indigo-500 to-pink-500">Student Data List</h1>
 
      {/* NAVBAR */}
      <nav className="flex gap-3 p-4 bg-gradient-to-r from-indigo-500 to-pink-500">
        <Link to="/">
          <button className="p-2 border border-white text-white rounded">
            Student List
          </button>
        </Link>

        <Link to="/fav">
          <button className="p-2 border border-white text-white rounded">
            Favourites
          </button>
        </Link>

        <Link to="/add">
          <button className="p-2 border border-white text-white rounded">
            Add Student
          </button>
        </Link>
      </nav>
      {/* Message */}
      {msg && <p className="text-3xl text-red-200">{msg}</p>}

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/fav" element={<FavStudent />} />
        <Route path="/add" element={<AddStudent />} />
      </Routes>

    </BrowserRouter>
    </StudentData.Provider>
  );
}

export default App;
export {StudentData};
