import React from "react";
const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-blue dib br4 pa2 ma2 grow shadow-5 ba b--dark-blue bw2 hover-bg-light-green"
    style={{
      width: "300px", 
      height: "410px", 
    }}>
      <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2 > {name} </h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
