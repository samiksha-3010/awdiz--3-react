// import { useNavigate } from "react-router-dom";


 
//  function Xyz(){
//     const route = useNavigate();
//     function goTO (){
//         route("/single-product/:swaraj")
//     }
//     return(
//         <div>
//             <button onClick={goTO}>goTo sign</button>
//         </div>
//     )
//  }

//  export default Xyz ;




import { useNavigate } from "react-router-dom";
function  Xyz(){

    const route = useNavigate();
    function goto(){
        route ("'/single-product/:samikshaID")
    }
    return(
        <div> 
            <button onClick={goto}>Go To Click</button>
        </div>

    )
}
export default Xyz;
