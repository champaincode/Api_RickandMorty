import React from "react";

const Personajes = ({ personajes }) => {
  return (
    <div className="row">
      {personajes.map((item, i) => (
        <div key={i} className="col mb-4">
          <div className="card" style={{minWidth:"200px"}}>
            <img src={item.image} alt="" />
            <div className="card-boby"> 
            <h5 className="card-title">{item.name}</h5>
            </div>
            <hr/>
            <p>Location:{item.location.name}</p>
            <p>Species:{item.species}</p>
            <p>Status:{item.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personajes;
