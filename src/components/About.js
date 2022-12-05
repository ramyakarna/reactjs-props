import React from "react"

function About(){
   /* return(
        <div>
            <h1>About Page</h1>
       </div>
    )*/
    return React.createElement("div",
                {id:"demo",className:"democlass"},
                React.createElement("h1",null,"Aboutpage")
                )
}
export default About                                                                                                                       