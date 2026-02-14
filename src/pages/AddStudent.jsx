import { StudentData } from "../App";
import { useContext , useState} from "react";


const AddStudent = () => {
    // Variable Declare
    const [newName, setNewName] = useState("");
    const [newRoll_no, setNewRoll] = useState("");
    const [newDept, setNewDept] = useState("");


    // Context
    const Data = useContext(StudentData)

    // Handling Add Functionality
    const handleAdd = () => {
        if (!newName || !newRoll_no || !newDept) return alert("Please fill all the fields");

        if (Data.studentList.some(s => s.Roll_no === newRoll_no || s.Dept === newDept)) {
            alert("Student already exists");
            return;
        }

        Data.setstudentList(prev => [
            ...prev,
            { id: Date.now() , Name: newName, Roll_no: newRoll_no, Dept: newDept }
        ]);
        alert("Student added successfully");
        console.log(Data.studentList)
    };


    return (
        <div className="p-4 bg-gradient-to-br from-rose-400 to-fuchsia-300 flex flex-col gap-4">
            <h1 className=" text-4xl  text-white stroke-orange-700">Add Student</h1>
            <div>
                <div className="grid grid-cols-2 grid-rows-3 gap-3">
                    <label
                        className="text-2xl"
                        htmlFor="Name">Name :
                    </label>
                    <input
                        onChange={(e) => setNewName(e.target.value)}
                        className="p-2 rounded-md"
                        type="text"
                        placeholder="Enter student name" />
                    <label
                        className="text-2xl"
                        htmlFor="Roll_n0">Roll no :
                    </label>
                    <input
                        onChange={(e) => setNewRoll(e.target.value)}
                        className="p-2 rounded-md"
                        type="text"
                        placeholder="Enter student Roll number" />
                    <label
                        className="text-2xl"
                        htmlFor="Dept">Department :
                    </label>
                    <input
                        onChange={(e) => setNewDept(e.target.value)}
                        className="p-2 rounded-md"
                        type="text"
                        placeholder="Enter student Department" />
                </div>
                <button
                    onClick={handleAdd}
                    className="p-2 mt-4 size-full border-black rounded-lg bg-pink-600">Add Student
                </button>
            </div>
        </div>
    )
};

export default AddStudent;