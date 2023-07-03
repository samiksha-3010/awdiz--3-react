import { useNavigate } from "react-router-dom";
 
 function Xyz(){
    const route = useNavigate();
    function goTO (){
        route("/single-product/:swaraj")
    }
    return(
        <div>
            <button onClick={goTO}>goTo sign</button>
        </div>
    )
 }

 export default Xyz 