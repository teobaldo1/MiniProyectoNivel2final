import React from 'react'
import "./Modal.css"


function Modal({active, optenerDatoInputModal1}) {

 return (
    <div className={active}>
      <form onSubmit={optenerDatoInputModal1}>
          <input type="text" /* id="inputData1" onChange={getData1}*/ />
          <input type="text" /* id="inputData2" onChange={getData2}*/ />
          <button
            type="submit"
          >
            Search
          </button>
        </form>

    </div>

  )
}

export default Modal