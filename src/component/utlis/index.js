import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined } from "@ant-design/icons";

export const hotproduct = [
  {
    name: "Calliber",
    image:
      "https://calibershoes.sgp1.digitaloceanspaces.com/uploads/2024/03/14172158/3-1-1200x900.jpg",
    price: "10",
    description:
      "Calliber collabs with Jordan and is result to this new VEG edition shoes",
    brand: "Calliber",
    id: 1,
    rating: 4.5,
    discount:2,
    comment: "hello, The product is fine ",
    view: 12,
    stock: 20,
    qty:1,
    color:"Brown",
    relatedProduct: [
      {
        name: "Calliber",
        image:
          "https://calibershoes.sgp1.digitaloceanspaces.com/uploads/2024/03/14172158/3-1-1200x900.jpg",
        price: "5",
        description:
          "Calliber collabs with Jordan and is result to this new VEG edition shoes",
        brand: "Calliber Shoes",
        id: 190,
        rating: 4.5,
      },
      {
        name: "Calliber",
        image:
          "https://https.sgp1.digitaloceanspaces.com/uploads/2024/03/14172158/3-1-1200x900.jpg",
        price: "5",
        description:
          "Calliber collabs with Jordan and is result to this new VEG edition shoes",
        brand: "Calliber Shoes",
        id: 180,
        rating: 4.5,
        qty:1,
      },
      {
        name: "Calliber",
        image:
          "https://calibershoes.digitaloceanspaces.digitaloceanspaces.com/uploads/2024/03/14172158/3-1-1200x900.jpg",
        price: "11",
        description:
          "Calliber collabs with Jordan and is result to this new VEG edition shoes",
        brand: "Calliber Shoes",
        id: 19,
        discount:3,
        rating: 4.5,
        qty:1,
      },
    ],
  },
  {
    name: "Jordan",
    image:
      "https://www.mensjournal.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_1062%2Cy_790/MTk5MTI0ODMzMzg3MTYxNTU2/tatum-jordan.jpg",
    price: "10",
    description: "new Jordan shoes",
    brand: "Jordan",
    id: 2,
    qty:1,
    rating: 3.5,
    discount:1,
    color:"White"
  },
  {
    name: "GoldStar",
    image:
      "https://www.goldstarshoes.com/MediaThumb/medium/Media/p101_red.jpg",
    price: "3",
    description: "Goldstar is the nepali product",
    brand: "GoldStar",
    id: 3,
    qty:1,
    discount:1,
    color:"Red"
  },
  {
    name: "Nike",
    image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7fb3501a-ed53-422a-a454-1bf116a13324/impact-4-basketball-shoes-nmn08j.png",
    price: "10",
    description: "gold",
    brand: "Nike",
    id: 4,
    qty:1,
    discount:1,
    color:'Gold'

  },
  {
    name: "nike",
    image:
      "https://www.shutterstock.com/image-photo/varna-bulgaria-june-17-2017-260nw-1393849583.jpg ",
    price: "15",
    description: "nike",
    brand: "nike",
    id: 5,
    qty:1,
    discount:1,
    color:"Red"
  },
  {
    name: "puma",
    image:
      "https://t4.ftcdn.net/jpg/03/66/57/71/360_F_366577181_uSV6BlMExtlVofV0xdkuEykF11OTIRT3.jpg",
    price: "10",
    description: "puma",
    brand: "puma",
    id: 6,
    qty:1,
    discount:1,
    color:"Indigo"
  },
];
export const premiumproducts = [
  {
    name: "Jordan",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/5/x/2/6-air-full-black-06-06-cool-and-creative-air-full-black-original-imagmqwuvztmhpdk.jpeg?q=90&crop=false",
    description: "Geniune Jordan shoes",
    price: "7",
    brand: "Jordan",
    id:11,
    qty:1,
  },
  {
    name: " Air Jordan",
    image:
      "https://media.istockphoto.com/id/471565617/photo/black-and-red-air-jordan-sneaker.jpg?s=612x612&w=0&k=20&c=rlJ1ImnpznBnRNfz45IDRTfFRnfqRuYAdvJA8dQPBXM=",
    description: "Genuine Air Jorden shoes",
    price: "5",
    brand: "Jordan Edition",
    id:12,
    qty:1
  },
  {
    name: "Puma",
    image:
      "data:image/jpeg;base64,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",
    description: "Genuine Puma Shoes",
    price: "8",
    brand: "Puma",
    id:13,
    qty:1
  },
  {
    name: "GoldStar",
    image:
      "data:image/jpeg;base64,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",
    description: "Genuine Gold Star shoes",
    price: "2",
    brand: "Gold Star",
    id:14,
    qty:1,
  },
  {
    name: "Calliber",
    image:
      "https://calibershoes.sgp1.digitaloceanspaces.com/uploads/2022/08/29181703/833-n-1.jpg",
    description: "color-white, ",
    price: "9",
    brand: "Calliber Nepal",
    id:15,
    qty:1
  },
  {
    name: "ERKE",
    image:
      "https://static-01.daraz.com.np/p/219608ce612ff128536584b8f978f25b.jpg_750x750.jpg_.webp",
    description: "Color black, size-40 41 42 43, sport",
    price: "12",
    brand: "ERKE",
    id:16,
    qty:1,
  },
];
export const MostRecentProduct = [
  {
    name: "Jordan",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/5/x/2/6-air-full-black-06-06-cool-and-creative-air-full-black-original-imagmqwuvztmhpdk.jpeg?q=90&crop=false",
    description: "Geniune Jordan shoes",
    price: "7",
    brand: "Jordan",
    id:21,
    qty:1,
  },
  {
    name: " Air Jordan",
    image:
      "https://media.istockphoto.com/id/471565617/photo/black-and-red-air-jordan-sneaker.jpg?s=612x612&w=0&k=20&c=rlJ1ImnpznBnRNfz45IDRTfFRnfqRuYAdvJA8dQPBXM=",
    description: "Genuine Air Jorden shoes",
    price: "8",
    brand: "Nike",
    id:22,
    qty:1,
  },
  {
    name: "Puma",
    image: "https://www.pumagolf.com/cdn/shop/files/SS23_Ecom_Puma_Category_Shoes_600x400_1_Elevate-min_1200x.jpg?v=1675194108",
    price: "9",
    brand: "Puma",
    id:23,
    qty:1,
  },
  {
    name: "GoldStar",
    image:"https://choicemandu.com/image/cache/catalog/goldstar-new/G10_903_Black-1000x1000.jpg",
    description: "Genuine Gold Star shoes",
    price: "5",
    brand: "Gold Star",
    id:24,
    qty:1,
  },
  {
    name: "Puma",
    image:"https://i8.amplience.net/s/scvl/102750_202869_SET/1?fmt=auto",
    description: "Genuine Puma Shoes",
    price: "7",
    brand: "Puma",
    id:25,
    qty:1,
    
  },
];
export const paymentmethod=[
  {
    name:"esewa",
    id:1,
    image:"https://play-lh.googleusercontent.com/MRzMmiJAe0-xaEkDKB0MKwv1a3kjDieSfNuaIlRo750_EgqxjRFWKKF7xQyRSb4O95Y",
    color:"green",
  },
  {
    name:"khalti",
    id:2,
    image:"https://play-lh.googleusercontent.com/Xh_OlrdkF1UnGCnMN__4z-yXffBAEl0eUDeVDPr4UthOERV4Fll9S-TozSfnlXDFzw",
    color:"purple",
  },
  {
    name:"COD",
    id:3,
    image:"https://media.istockphoto.com/id/537487845/vector/payment-by-cash.jpg?s=612x612&w=0&k=20&c=ikEp0CWBCwizA4xdzFGUw1QO0FBGfjE1_iq-aOco8Dg=",
    color:"grey"
  }
]
const getItem=(label, key, icon, children, type)=> {
  
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
export const adminItems = [
  getItem('Dashboard', '/admin/dashboard', <PieChartOutlined />),
  getItem('User list', '/admin/userlist', <DesktopOutlined />),
  getItem('Profile', '/admin/adminprofile', <ContainerOutlined />),
  getItem('Hot Product', '/admin/hotproduct', <MailOutlined />),
  getItem('Navigation Two', '/admin/appstore', <AppstoreOutlined />), 
];
