import React from "react";
import { useAppContext } from "../component/ContextApi";

import TextArea from "antd/es/input/TextArea";
import { Button, Rate } from "antd";
import RelatedProduct from "./RelatedProduct";
import { useDispatch, useSelector } from "react-redux";
import { updateCard } from "../redux/slices/AddToCard";
import { useNavigate } from "react-router-dom";


export const Detail = () => {
  const { appState } = useAppContext();
  console.log("updated app state:", appState);
  // const settings = {
  //   customPaging: function (i) {
  //     return (
  //       <div>
  //         <img src={appState?.data?.image} alt="example" />
  //       </div>
  //     );
  //   },
  //   dots: true,
  //   dotClass: "slick-dots slick-thumb",
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: null,
  //   prevArrow: null,
  // };
  
  console.log("appstate", appState);
  const {  updateState } = useAppContext();
  const dispatch= useDispatch();
  const carditem=useSelector ((state)=> state)
  console.log('cart', carditem)

  const addtocard = (item) => {
    const newItem = {
      ...item,
      image: appState?.data?.image,
     name:appState?.data?.name,
      price: appState?.data?.price,
      qty:appState?.data?.qty
    };
    updateState({
      ...appState,
      addtocard: [...appState?.addtocard, newItem],
    });
    dispatch(updateCard([...new Set([...carditem?.addtocard?.data, newItem])]));
  };
  
      const navigates = useNavigate();
  const BuyMe = () => {
    navigates("/payment");
  };

  

  return (
    <div className="md:container mx-auto px-4 lg:px-0">
      <div>
        <div className="md:grid grid-cols-12 grid-flow-row gap-8 " >
          <div className="md:col-span-6 md:ml-[10rem] ">
            <div className="sm:w-1/2 md:w-full max-h-30px h-35 bg-black  " >
              
                <div>
                  <img
                    src={appState?.data?.image}
                    className="h-30 w-full"
                    alt="example"
                  />
                </div>
                
            </div>
          </div>
          <div className="md:col-span-6 grid ">
            <div className=" text-black font-extrabold text-3xl">{appState?.data?.name}</div>
            <div className="flex gap-2">
              
              <div>Rs:{appState.data.price-appState.data.price*appState.data.discount/100}</div>
              <div className="line-through">Actual Price:{appState?.data?.price}</div>
              <div>{appState?.data?.discount}% OFF</div>
            </div>
            <div className="flex gap-2 ">
              <div>View :{appState?.data?.view}</div>
              <div>In Stock:{appState?.data?.stock}</div>
            </div>
            <div>{appState?.data?.brand}</div>
            <div>{appState?.data?.description} </div>
            <div>
              <TextArea
                rows={3}
                placeholder=""
                maxLength={10000}
                value={appState?.data?.comment}
              />
            </div>
            <div>
              <Rate
                allowHalf
                value={appState?.data?.rating}
                defaultValue={2.5}
                className="text-[#ff8800]"
              />
            </div>
            <div className=" flex">
              <div>
                <Button className="bg-slate-800 text-white w-full  " onClick ={BuyMe}>
                  Buy Now
                </Button>
              </div>
              <div>
                <Button className="bg-slate-800 text-white w-full" onClick={() => addtocard('')}>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <RelatedProduct
            data={appState?.data?.relatedProduct}
            title={"Related Product"}
          />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};
