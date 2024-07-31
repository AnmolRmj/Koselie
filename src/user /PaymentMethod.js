import { Image, Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { paymentmethod } from "../component/utlis";
import { Esewa } from "./Esewa";

import { khaltiConfig } from "./Khalti";
import KhaltiCheckout from "khalti-checkout-web";

export const PaymentMethod = () => {
  const carditem = useSelector((state) => state);
  console.log("carditem", carditem);
  const [orderdata, setOrderData] = React.useState([]);
  console.log("orderdata", orderdata);
  React.useEffect(() => {
    setOrderData(carditem?.addtocard?.data);
  }, [carditem?.addtocard?.data]);

  const total = orderdata.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.qty;
  }, 0);
  const addtoqty = orderdata.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.qty;
  }, 0);

  const checkout = new KhaltiCheckout(khaltiConfig);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => <Image src={text} alt="" width={50} />,
    },
  ];

  const path = "https://uat.esewa.com.np/epay/main";
  const params = {
    amt: total,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: total,
    pid: "fasfjhdsajflfhaal",
    scd: "EPAYTEST",
    su: "http://merchant.com.np/page/esewa_payment_success",
    fu: "http://merchant.com.np/page/esewa_payment_failed",
  };
  const [isPayment, setPayment] = React.useState({
    eSewa: false,
    khalti: false,
  });
  const handelpayment = (id) => {
    console.log("esewa", id);
    if (id === 1) {
      setPayment({
        eSewa: true,
        khalti: false,
        cod: false,
      });
    } else if (id === 2) {
      checkout.show({ amount: total });
    } else {
      setPayment({
        eSewa: false,
        khalti: false,
        cod: true,
      });
    }
  };

  console.log("isPayment", isPayment);

  return (
    <div className="text-center  text-base mb-3 ">
      <h1 className="text-black font-extrabold text-2xl"> Modes of Payment</h1>
      <div className=" md:flex justify-center gap-2">
        <div className="h-auto overflow-x-scroll">
          <div>
            <Table
              dataSource={carditem?.addtocard?.data}
              columns={columns}
              className="border-[1px]"
            />
          </div>
        </div>
        <div className="md:grid justify-center gap-1">
          <div className=" flex ">
            {paymentmethod?.map((item) => (
              <div
                key={item.image}
                style={{
                  color: item.color,
                }}
                className="flex justify-around"
                onClick={() => handelpayment(item.id)}
              >
                {<img alt="example" src={item.image} className=" hover:cursor-pointer gap-2  h-[100px] w-[5rem] " />}
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-black font-extrabold text-1xl">
              Total Card Details
            </h1>
            <div className="md:grid justify-around m-auto text-pretty font-medium border border-gray-400">
              <div className="border-b border-gray-400 p-2">
                <div>Total Amount: ${total}</div>
              </div>
              <div className="p-2">
                <div>Total Quantity: {addtoqty}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPayment?.eSewa && <Esewa path={path} params={params} />}
    </div>
  );
};
