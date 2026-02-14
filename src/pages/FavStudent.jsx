import { useContext } from "react";
import { StudentData } from "../App";

// useContext to maintain the student Data

const FavStudent = ()=>{
    // useContext to maintain the student Data
    const Data = useContext(StudentData)

    const msg = Data.favstudentList.length === 0
  ? "No Favourite Students"
  : "";


    // handling the Delete functionality
    const handleDelete = (index)=>{
        Data.setfavstudentList(Data.favstudentList.filter((_,i)=> i!==index))
    }

    return (
        <div className="p-4 bg-gradient-to-br from-rose-400 to-fuchsia-400 flex flex-col gap-4">
             <h1 className=" text-4xl  text-white stroke-orange-700">Favourite Student</h1>
             {msg && <p>{msg}</p>}
             <div className="p-1 flex flex-wrap gap-2"> 
                {
                    Data.favstudentList.map(
                        (items, index) => {
                            return (
                                <div className="p-3 size-1/4 flex flex-col gap-1 justify-center border border-black bg-white rounded-lg relative">
                                    <button onClick={()=>handleDelete(index)} className="absolute top-2 right-2 bg-red-400 border border-black p-1 rounded-lg">delete</button>
                                    <p className="text-3xl mt-2">{items.Name}</p>
                                    <p>{'Student id : '}{items.Roll_no}</p>
                                    <p className="text-opacity-95">{'Department : '}{items.Dept}</p>
                                </div>
                            )
                        }
                    )
                }
             </div>
        </div>
    )
};

export default FavStudent;