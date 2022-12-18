import React from "react";


function C1() {
    console.log("C1 render ediliyor...")
    return(
        <p>
            Ben C1
        </p>
    )
}
export default React.memo(C1);