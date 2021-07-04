import React from 'react'

// css
import './Loading.css'

const Loading = () => {
    return (
        <div className="loading">
             <span className="dots-cont">
        {" "}
        <span className="dot dot-1"></span> <span className="dot dot-2"></span>{" "}
        <span className="dot dot-3"></span>{" "}
      </span>
        </div>
    )
}

export default Loading
