import React from 'react';
import "./ProductBlock.css";
import Stars from "./Stars";
import Button from "../Button/Button";




const Product = (props) => {

  let classList = "product-block";
  let detailsClassList = "product-details";
  let imgClassList = `product-img ${props.product} `;
  let priceClassList = "prices";
  let buttonsClassList = "img-button-container non-opaque";
  let rule = <hr className={"hr"}/>
  let iconColor = "blue"
  let cartButton;
  let heartButton;



  if(props.filling===true){
    iconColor = "white";
    classList += ` product-filled`;
    heartButton = <Button  className={"non-opaque"} type="primary" icon={`heart-white`} round/>;
    cartButton = <Button  className={"non-opaque"} type="primary" icon={`cart-white`} round/>;

  }else{
    classList += ` product-empty`;
    heartButton = <Button  className={"non-opaque"} type="primary" icon={`heart-blue`} round outline/>;
    cartButton = <Button  className={"non-opaque"} type="primary" icon={`cart-blue`} round outline/>;
  }

  if(props.direction==="row"){
    rule = "";
    classList += ` flex-row`;
    detailsClassList += ` flex-align-start product-details-row`;
    imgClassList += ` product-img-row`;
    priceClassList += ` flex-justify-start`;

  }else{
    classList += ` flex-column`;
    detailsClassList += ` flex-align-center product-details-column`;
    imgClassList += ` product-img-column`;
    priceClassList += ` flex-justify-center`;
  }

  // function showButtons(){
  //   console.log(buttonsClassList)
  //   buttonsClassList = buttonsClassList === "" ? "display-none": "";
  // }

  return (
    <div className={classList}>

        <div className={imgClassList} >
            <div className={buttonsClassList}>
            {heartButton}
            {cartButton}
            </div>
        </div>



        <div className={detailsClassList}>
            {rule}
            <div className={"product-title"}>{props.title}Apple Macbook Pro</div>

            <Stars stars={props.stars}/>

            <div className={priceClassList}>

              <div className={"price"}>$499</div>
              <div className={"previous-price"}>$500</div>

            </div>


        </div>
    </div>

  );
}


export default Product;
