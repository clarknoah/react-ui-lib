import React from 'react';
import Icon from '../Icon/Icon';
import "./ProductBlock.css";

const Stars = (props) => {
  console.log(`Button has class`, props.className)
  let classList = props.className !== undefined ? props.className : "stars-block";

  let starsArr = [];
  for(let i = 0; i < props.stars; i++){
    let star = <Icon icon={"star-yellow"}/>
    starsArr.push(star);
  }
  if(props.stars < 5){
    for(let i = 5; i > props.stars; i--){
      let star = <Icon icon={"star-grey"}/>
      starsArr.push(star);
    }
  }

  let stars = starsArr.map(star=>{
    return star;
  })

  return (
    <div className={classList}>
      {stars}
    </div>
  );
}

export default Stars;
