import coverOne from '../assets/images/hero/h1.png';
import coverTwo from '../assets/images/hero/h2.png';
import coverThree from '../assets/images/hero/h3.png';
import coverFour from '../assets/images/hero/h4.png';
import coverFive from '../assets/images/hero/h6.png';

// Location images
import cityOne from '../assets/images/location/city-1.png';
import cityTwo from '../assets/images/location/city-2.png';
import cityThree from '../assets/images/location/city-3.png';
import cityFour from '../assets/images/location/city-4.png';
import cityFive from '../assets/images/location/city-5.png';
import citySix from '../assets/images/location/city-6.png';

export const featured = [
  {
    cover: coverOne,
    name: 'Family House',
    total: '222 Property',
  },
  {
    cover: coverTwo,
    name: 'House & Villa',
    total: '355 Property',
  },
  {
    cover: coverThree,
    name: 'Apartment',
    total: '350 Property',
  },
  {
    cover: coverFour,
    name: 'Office & Studio',
    total: '80 Property',
  },
  {
    cover: coverFive,
    name: 'Villa & Condo',
    total: '180 Property',
  },
];
export const list = [
  {
    id: 1,
    cover: '../images/list/p-1.png',
    name: 'Red Carpet Real Estate',
    location: '210 Zirak Road, Canada',
    category: 'For Rent',
    price: '$3,700',
    type: 'Apartment',
  },
  {
    id: 2,
    cover: '../images/list/p-2.png',
    name: 'Fairmount Properties',
    location: '5698 Zirak Road, NewYork',
    category: 'For Sale',
    price: '$9,750',
    type: 'Condos',
  },
  {
    id: 3,
    cover: '../images/list/p-7.png',
    name: 'The Real Estate Corner',
    location: '5624 Mooker Market, USA',
    category: 'For Rent',
    price: '$5,860',
    type: 'Offices',
  },
  {
    id: 4,
    cover: '../images/list/p-4.png',
    name: 'Herringbone Realty',
    location: '5621 Liverpool, London',
    category: 'For Sale',
    price: '$7,540',
    type: 'Homes & Villas',
  },
  {
    id: 5,
    cover: '../images/list/p-5.png',
    name: 'Brick Lane Realty',
    location: '210 Montreal Road, Canada',
    category: 'For Rent',
    price: '$4,850',
    type: 'Commercial',
  },
  {
    id: 6,
    cover: '../images/list/p-6.png',
    name: 'Banyon Tree Realty',
    location: '210 Zirak Road, Canada',
    category: 'For Sale',
    price: '$2,742',
    type: 'Apartment',
  },
];
export const awards = [
  {
    icon: <i className="fa-solid fa-trophy" />,
    num: '32 M',
    name: 'Blue Burmin Award',
  },
  {
    icon: <i className="fa-solid fa-briefcase" />,
    num: '43 M',
    name: 'Mimo X11 Award',
  },
  {
    icon: <i className="fa-solid fa-lightbulb" />,
    num: '51 M',
    name: 'Australian UGC Award',
  },
  {
    icon: <i className="fa-solid fa-heart" />,
    num: '42 M',
    name: 'IITCA Green Award',
  },
];
export const location = [
  {
    id: 1,
    name: 'New Orleans, Louisiana',
    Villas: '12 Villas',
    Apartments: '10 Apartments',
    Offices: '07 Offices',
    cover: cityOne,
  },
  {
    id: 2,
    name: 'Jerrsy, United State',
    Villas: '12 Villas',
    Apartments: '10 Apartments',
    Offices: '07 Offices',
    cover: cityTwo,
  },
  {
    id: 3,
    name: 'Liverpool, London',
    Villas: '12 Villas',
    Apartments: ' 10 Apartments',
    Offices: '07 Offices',
    cover: cityThree,
  },
  {
    id: 4,
    name: 'NewYork, United States',
    Villas: '12 Villas',
    Apartments: ' 10 Apartments',
    Offices: '07 Offices',
    cover: cityFour,
  },
  {
    id: 5,
    name: 'Montreal, Canada',
    Villas: '12 Villas',
    Apartments: ' 10 Apartments',
    Offices: '07 Offices',
    cover: cityFive,
  },
  {
    id: 6,
    name: 'California, USA',
    Villas: '12 Villas',
    Apartments: ' 10 Apartments',
    Offices: '07 Offices',
    cover: citySix,
  },
];
export const price = [
  {
    plan: 'Basic',
    price: '29',
    ptext: 'per user, per month',
    list: [
      {
        icon: <i className="fa-solid fa-check" />,
        text: '99.5% Uptime Guarantee',
      },
      {
        icon: <i className="fa-solid fa-check" />,
        text: '120GB CDN Bandwidth',
      },
      {
        icon: <i className="fa-solid fa-check" />,
        text: '5GB Cloud Storage',
      },
      { change: 'color', icon: <i className="fa-solid fa-x" />, text: 'Personal Help Support' },
      { change: 'color', icon: <i className="fa-solid fa-x" />, text: 'Enterprise SLA' },
    ],
  },
  {
    best: 'Best Value',
    plan: 'Standard',
    price: '49',
    ptext: 'per user, per month',
    list: [
      {
        icon: <i className="fa-solid fa-check" />,
        text: '99.5% Uptime Guarantee',
      },
      {
        icon: <i className="fa-solid fa-check" />,
        text: '150GB CDN Bandwidth',
      },
      {
        icon: <i className="fa-solid fa-check" />,
        text: '10GB Cloud Storage',
      },
      {
        icon: <i className="fa-solid fa-check" />,
        text: 'Personal Help Support',
      },
      {
        change: 'color',
        icon: <i className="fa-solid fa-x" />,
        text: 'Enterprise SLA',
      },
    ],
  },
  {
    plan: 'Platinum',
    price: '79',
    ptext: '2 user, per month',
    list: [
      {
        icon: <i className="fa-solid fa-check" />,
        text: '100% Uptime Guarantee',
      },
      {
        icon: <i className="fa-solid fa-check" />,
        text: '200GB CDN Bandwidth',
      },
      {
        icon: <i className="fa-solid fa-check" />,
        text: '20GB Cloud Storage',
      },
      {
        icon: <i className="fa-solid fa-check" />,
        text: 'Personal Help Support',
      },
      {
        icon: <i className="fa-solid fa-check" />,
        text: 'Enterprise SLA',
      },
    ],
  },
];
export const footer = [
  {
    title: 'LAYOUTS',
    text: [{ list: 'Home Page' }, { list: 'About Page' }, { list: 'Service Page' }, { list: 'Property Page' }, { list: 'Contact Page' }, { list: 'Single Blog' }],
    id: 1,
  },
  {
    title: 'ALL SECTIONS',
    text: [{ list: 'Headers' }, { list: 'Features' }, { list: 'Attractive' }, { list: 'Testimonials' }, { list: 'Videos' }, { list: 'Footers' }],
    id: 2,
  },
  {
    title: 'COMPANY',
    text: [{ list: 'About' }, { list: 'Blog' }, { list: 'Pricing' }, { list: 'Affiliate' }, { list: 'Login' }, { list: 'Changelog' }],
    id: 3,
  },
];
