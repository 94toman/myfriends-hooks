import React from "react";

const Sticky = (props) => {
    return(
        // eslint-disable-next-line
        <div  style={{position: '-webkit-sticky', position: 'sticky', top: '0', zIndex: '1', background: 'linear-gradient(to right, rgb(138, 255, 247), rgb(92, 255, 133)'}}>
            <div>
                { props.children }
            </div>
           
        </div>
    )
}

export default Sticky;