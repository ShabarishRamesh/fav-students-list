import { useContext } from "react";
import { StudentData } from "../App";
const Student = () => {
    // useContext to maintain the student Data
    const Data = useContext(StudentData)
    // handling the Delete functionality
    const handleDelete = (id) => {
        Data.setstudentList(prev =>
            prev.filter(student => student.id !== id)
        );
    };


    // Handling the Add to favourite functionality
    const HandleFav = (items) => {
        const alreadyExsist = Data.favstudentList.some(oldStudent => oldStudent.Roll_no === items.Roll_no);
        if (alreadyExsist) {
            alert("Already added to fav");
        } else {
            Data.setfavstudentList(
                prev => [...prev, items]
            )
        }
        console.log(Data.favstudentList)
    }

    return (
        <div className="p-4 bg-gradient-to-br from-fuchsia-400 to-rose-400 flex flex-col gap-4">
            <h1 className=" text-4xl  text-white stroke-orange-700">Student List</h1>
            <div className="p-1 flex flex-wrap gap-2">
                {
                    Data.studentList.map((items) => {
                        return (
                            <div
                                key={items.id}
                                className="p-3 size-1/4 flex flex-col gap-1 justify-center border border-black bg-white rounded-lg relative"
                            >
                                <button onClick={() => handleDelete(items.id)}
                                    className="absolute top-2 right-2 bg-red-400 border border-black p-1 rounded-lg">
                                    delete
                                </button>

                                <p className="text-3xl mt-2">{items.Name}</p>
                                <p>Student id : {items.Roll_no}</p>
                                <p>Department : {items.Dept}</p>

                                <button
                                    onClick={() => HandleFav(items)}
                                    className="p-2 mt-3 border-black rounded-lg bg-pink-600">
                                    Add to Fav ❤️
                                </button>
                            </div>
                        )
                    })

                }
            </div>

        </div>
    )
};

export default Student;