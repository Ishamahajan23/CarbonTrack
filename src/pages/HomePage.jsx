import { useEffect, useState } from "react";
import {getBookmarks, deleteBookmark} from "../firebase/firebase";
import Form from "../components/Form";

const HomePage = () => {
    const {bookmarks, setBookmarks} = useState([]);
    useEffect(()=>{
        getBookmarks().then(setBookmarks);
    },[])

    const handleDelete = (date) => {
        deleteBookmark(date).then(()=>{
            setBookmarks((prev) => {
                const newBookmarks = {...prev};
                delete newBookmarks[date];
                return newBookmarks;
            });
        })
    }

    return(
        <>
         <div>
            <h1>Carbon Track</h1>
            <Form/>
            <h2>Bookmarks Dates</h2>
            <ul>
                {
                    objects.entries(bookmarks).map(([date, info]) => (
                        <li>
                            {date} - {info.avg} ({info.index})
                            <button onClick={() => handleDelete(date)}>Delete</button>
                        </li>
                        
                    ))
                }
            </ul>

         </div>
        
        </>
    )

}

export default HomePage;