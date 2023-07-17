import React from 'react'
const Map = (props) => {
    console.log(props.myUsers, "HOME")
    return (
        <div>
            {props.kuchBhi && props?.kuchBhi.map((str) => (
                <div key={str}>
                    <h2>{str}</h2>
                </div>
            ))}

            <button onClick={() => props?.setMyUsers([...props.myUsers, "Awdiz"])}>Add user</button>
            {props.myName && props.myName}

        </div>
    )
}

export default Map;

// import React from 'react'

// const Map = (props) => {
//     console.log(props.myUsers, "Home")

//   return (

//     <div>
//         {props.kuchBhi && props?. kuchBhi.map ((str)   => (
//              <div key ={str}>
//                 <h1>{key}</h1>

//              </div>
//         )) }
//         <button onClick={() => props?.setMyUsers([...props.myUsers,"pooja"])}> add users</button>
        
//         </div>
//   )
// }

// export default Map;