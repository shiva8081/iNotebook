import { useState } from "react";
import noteContext from "./noteContext";



const Notestate = (props) => {

    // const s1 = {
    //     "name": "shiva",
    //     "class": "btech"
    // }
    // const [state, setstate] = useState(s1);
    // const update = () => {
    //     setTimeout(() => {
    //         setstate({
    //             "name": "yadav",
    //             "class": "aiml"

    //         })
    //     }, 1000);
    // }
    return (
        <noteContext.Provider value={{}}>
            {props.children}
        </noteContext.Provider>
    )
}





export default Notestate;