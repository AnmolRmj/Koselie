import React from "react";

import {
  AutoComplete,
  Avatar,
  Badge,
  ConfigProvider,
  Drawer,
  Dropdown,
  Image,
  Input,
  Layout,
  Menu,
  Space,
  theme,
} from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../image/Koselie.png";
import {
  
  DiscordOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MenuOutlined,
  SearchOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { useAppContext } from "../ContextApi";

import { useDispatch, useSelector } from "react-redux";
import { Order } from "../../user /Order";
import { logout } from "../../redux/slices/LoginSlices";
import { fetchSearchProduct } from "../../services/AllProduct";

const { Header, Content, Footer } = Layout;

const UserLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const iteminfo = [
    { name: "", link: "/logo" },
    { name: "Home", link: "/" },
    { name: "About", link: "/aboutus" },
    { name: "Contact", link: "/contactus" },
    { name: "Journal", link: "/blog" },
  ];

  const authinfo = [
    { name: "Login", link: "/auth/login" },
    { name: "Sign up", link: "/auth/signup" },
  ];

  const navigate = useNavigate();
  const { appState } = useAppContext();
  const dispatch = useDispatch();

  const handleClick = (item) => {
    navigate(item.link);
  };
  const handleItem = (item) => {
    navigate(item.link);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickdrawer = () => {
    if (carditem?.addtocard?.data?.length ) {
      setOpen(true);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  const navigates = useNavigate();
  const gotohome = () => {
    navigates("/");
  };

  const carditem = useSelector((state) => state);

  const items = [
    {
      key: "1",
      label: "Profile",
      onClick: () => navigatee("/user/userprofile"),
    },
    { key: "2", label: "Logout", onClick: () => handleLogout() },
    { key: "3", label: "Settings" },
  ];
  
  const navigat = useNavigate();
  const navigatee = () => {
    navigat("/user/userprofile");
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleSearch = (value) => {
    console.log("searchdata", value);
    dispatch(fetchSearchProduct(value.target.value));
  };
  const { products, loading } = useSelector((state) => state?.searchproduct);
  console.log("datasearch", products);
  const menu = (
    <Menu>
      {authinfo.map((item) => (
        <Menu.Item key={item.link} onClick={() => handleClick(item)}>
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );
  const sortClick = () => {
    navigate("/sortingdata");
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#001529",
            headerColor: "rgba(0, 0, 0, 0.88)",
            headerHeight: 40,
            fontSize: 16,
            footerBg: "#f5f5f5",
          },
        },
      }}
    >
      <Layout >
        <Header
          className="sticky top-0 hover:cursor-pointer bg-gray-700"
          style={{
            zIndex: 1000,
            background: "white",
            color: "rgba(0, 0, 0, 0.88)",
            minHeight: "55px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem", // Added padding for better spacing
          }}
        >
          {/* Logo and Brand Name */}
          <div className="flex md:items-center gap-2 font-bold text-2xl">
            <div className="h-10 w-10 md:h-12 md:w-12">
              {/* Adjust size based on screen size */}
              <Image src={logo} alt="display" />
            </div>
            <div
              className="text-gray-700 font-bold cursor-pointer"
              onClick={() => gotohome()}
            >
              Koselie
            </div>
          </div>

          {/* Menu for iteminfo */}
          <div className="hidden md:flex flex-wrap justify-center gap-10 font-bold text-lg text-gray-700">
            {iteminfo?.map((item) => (
              <div key={item.link} onClick={() => handleItem(item)} className="hover:underline">
                {item.name}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-3">
            {/* Add mobile menu icon/button here */}
          </div>
          
        </Header>

        <Content style={{ padding: "0 24px", marginTop: "40px" }}>
          
          <div
            style={{
              padding: 24,
              minHeight: 5,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              
            }}
            
          >
            <div
            className="sticky top-0 bg-white z-10"
            style={{ padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG }}
          >
            <div className="md:flex md:justify-between md:items-center">
              {/* Sort by Category */}
              <div className="text-black font-light mb-4 md:mb-0">
                <MenuOutlined onClick={sortClick}/>
                <span className="ml-2">Shop by Category</span>
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-auto">
                <AutoComplete
                  popupMatchSelectWidth={252}
                  className="w-full md:w-96"
                  options={products.data}
                  size="extra-large"
                >
                  <Input.Search
                    size="medium"
                    placeholder="Search your products here"
                    enterButton={
                      <span className="text-black font-bold px-2">
                        <SearchOutlined />
                      </span>
                    }
                    onPressEnter={handleSearch}
                  />
                </AutoComplete>
              </div>

              {/* Anmol Profile with Cart */}
              <div className="flex items-center gap-4 md:gap-5">
                {/* Anmol Profile */}
                <div className="text-grey font-semibold size-1xl">
                  {carditem?.authinfo?.userToken && (
                    <Dropdown
                      menu={{ items }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Space>
                        <Avatar icon={<UserOutlined />} className="bg-black" />
                        <div className="text-grey">Anmol</div>
                      </Space>
                    </Dropdown>
                  )}
                </div>

                {/* Shopping Cart */}
                <div>
                  <Badge count={carditem?.addtocard?.data?.length} size="small">
                    <Avatar
                      icon={<ShoppingCartOutlined />}
                      size="small"
                      onClick={handleClickdrawer}
                      className="bg-black"
                    />
                  </Badge>
                </div>
                <Dropdown overlay={menu} trigger={["hover"]}>
      <SettingOutlined className="hover:cursor-pointer" />
    </Dropdown>
              </div>
            </div>
          </div>
          </div>
        </Content>

        <Content style={{ padding: "0 48px", marginTop: "40px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 680,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer className=" md:grid justify-center w-full">
          <footer className="bg-gray-300 text-black py-8 px-4 md:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
    {/* About Section */}
    <div>
      <h2 className="text-xl font-semibold mb-4 ">More about Koselie Shop</h2>
      <p className="text-sm">Koselie is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
      <div className=" md:flex gap-3"> <DiscordOutlined /> <FacebookOutlined /> <YoutubeOutlined /> <LinkedinOutlined /> <InstagramOutlined /></div>
    </div>
    
    {/* Shop Section */}
    <div>
      <h2 className="text-xl font-semibold mb-4">Shop</h2>
      <ul className="text-sm ">
        <li className="text-black hover:text-white">Accessories</li>
        <li className="text-black hover:text-white">Clothes</li>
        <li className="text-black hover:text-white">Electronics</li>
      </ul>
    </div>

    {/* Your Account Section */}
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Account</h2>
      <ul className="text-sm">
        <li className="text-black hover:text-white">Profile</li>
        <li className="text-black hover:text-white">Order</li>
        <li className="text-black hover:text-white">Addresses</li>
        <li className="text-black hover:text-white">Account Details</li>
        <li className="text-black hover:text-white">Payment Options</li>
      </ul>
    </div>

    {/* Subscribe Section */}
    <div>
      <h2 className="text-xl font-semibold mb-4">Subscribe to our Koselie</h2>
      <div className="flex items-center">
      
        <input type="email" placeholder="Your email address" className="bg-gray-700 rounded-l py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300" />
        <button className="bg-blue-200 hover:bg-blue-600 rounded-r py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
<div className="flex justify-center">Koselie  ©{new Date().getFullYear()} Created by Koselie Nepal</div>
        </Footer>
      </Layout>
      
      <div>
        {open && appState?.addtocard?.length > 0 && (
          <Drawer title="Cart Drawer" onClose={onClose} visible={open}>
            <Order />
          </Drawer>
        )}
      </div>
      
    </ConfigProvider>
    
  );
};

export default UserLayout;
