import { useNavigate } from "react-router-dom";

function Params() {
    const router = useNavigate();
    function go(){
        router('/single-product/5678')
    }
    return (
        <div>
            <button onClick={go}>Click to go somewhere...</button>
        </div>
    )
}

export default Params;


