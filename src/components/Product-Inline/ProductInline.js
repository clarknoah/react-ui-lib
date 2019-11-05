import React from 'react';
import Button from '../Button/Button';
import Stars from '../Thumbnail-Block/Stars';
import './ProductInline.css';

const ProductInline = (props) => {

    let classList = "product-inline";
    let detailsClassList = "product-details";
    let imgClassList = `product-img-inline ${props.product} `;
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



    return (
      <div className={classList}>

          <div className={imgClassList} >
              <div className={"hot"}>HOT</div>
              <div className={buttonsClassList}>
              {heartButton}
              {cartButton}
              </div>
          </div>



          <div className={detailsClassList}>
              {rule}
              <div className={"product-title-inline"}>{props.title}</div>
              <div className={"review-block"}>
                <Stars className={"stars-block-inline"} stars={props.stars}/>
                <div className={"review-count"}>0 reviews</div>
                <div className={"review-submit"}>submit review</div>
              </div>
              <hr className={"hr"}/>

              <div className={priceClassList}>
                <div className={"price-inline"}>$499</div>
                <div className={"previous-price-inline"}>$500</div>
              </div>
              <p className={"product-info"}>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...
              </p>

              <div className={"button-block"}>
                <Button label="Add to Cart" type="primary" inline icon="cart"/>
                <Button label="" type="primary" inline icon="heart"/>
              </div>
          </div>
      </div>

    );
  }

export default ProductInline;
