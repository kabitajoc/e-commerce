import React from "react";
import "./NewArrival.css";
import { ArrivalData } from "./ArrivalData";

const NewArrival = () => {
  return (
    <>
    
      <h3>New Arrival</h3>
      <div className="newArrivals">
        {ArrivalData.map((item) => (
          <div className="arrivalCarousel" key={item.id}>
            {/* <Link to={`/item/${item.id}`} key={item.id}></Link> */}
            <img src={item.img} alt="" />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArrival;
