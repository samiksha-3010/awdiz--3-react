
import { useState } from "react";
function Section() {
    const [isUserLogged, setIsUserLogged] = useState(false);

 
    return (
        <div>
            {}
            Section : {isUserLogged ? <button>Login</button> : <button>Logout</button>}
        </div>
    )
}

export default Section;








