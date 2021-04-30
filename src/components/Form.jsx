import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <h1>Jelentkezés</h1>
      <input type="text" placeholder="Név" />
      <input type="text" placeholder="Email cím" />
      <input type="text" placeholder="Telefonszám" />
      <div className="checkCont">
        <input type="checkbox" />
        <label htmlFor="checkbox">Elolvastam és elfogadom az Adatkezelési Tájékoztatót.</label>
      </div>
     <button>ELKÜLD</button>
    </div>
  )
}

export default Form