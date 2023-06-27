
import { useState } from "react";
function Section() {
    const [isUserLogged, setIsUserLogged] = useState(false);

    // setIsUserLogged((isUserLogged) => isUserLogged = true);
    return (
        <div>
            {/* Section : {isUserLogged == false ? <button>Logout</button> : <button>Login</button>} */}
            Section : {isUserLogged ? <button>Login</button> : <button>Logout</button>}
        </div>
    )
}

export default Section;








