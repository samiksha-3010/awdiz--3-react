 import React from "react";
const samiksha = ({children}) =>{
                                            //   step 2 children login
    return(
        <button>
            {children}
                                                  {/* third step */}
        </button>
    );
};
const childrenProp =() =>{
    return(
        <div>
            <button>samiksha</button>  
                                                      {/* first step */}
        </div>
    )
}
export default childrenProp



