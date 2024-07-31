import { EnvironmentOutlined, MailOutlined, MobileOutlined, PhoneOutlined } from "@ant-design/icons";
import React from "react";

export const ContactUs = () => {
  return (
    <div className="md:flex">
      <div className="container w-[400px]">
        <h1 className="text-black font-extrabold text-3xl">Contact</h1>
        <div className="text-grey font-light">
          <div> <EnvironmentOutlined className=" text-red-500 " /><span className=" ml-2">Koteshwor-32 Kathmandu</span></div>
          <div><MailOutlined className=" text-red-500 " /><span className=" ml-2">Koselie@clothesnepal.com</span></div>
          <div>
            <PhoneOutlined className="text-red-500" />
            <span className="ml-2">01-4992589</span>
          </div>
          <div>
            <MobileOutlined className="text-red-500" />
            <span className="ml-2">9845795796</span>
          </div>
        </div>
      </div>
      <iframe
        title="Unique Title"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.177110616134!2d85.3385624754876!3d27.680920376197694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ecef2eedd1%3A0x668e25466241a9bd!2sKoteshwor%20Mahadevasthan!5e0!3m2!1sen!2snp!4v1714636996826!5m2!1sen!2snp"
        width="600"
        height="450"
        style={{ border: "1" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
