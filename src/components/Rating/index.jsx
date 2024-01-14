import React, { Fragment } from "react";

import '/src/components/Rating/rating.scss'


function RatingStars(props) {
    const rating = props.rating;
  
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starClass = i < rating ? "fa-solid fa-star active" : "fa-solid fa-star";
      stars.push(<i key={i} className={starClass}></i>);
    }
  
    return (
      <React.Fragment>
        <div className="ratingContainer">
          {stars}
        </div>
      </React.Fragment>
    );
  }
  
  export default RatingStars;
  

