import { AccountCircle, CircleNotifications } from "@mui/icons-material";

export const pages = [
  {
    name: "Explore",
    path: "/",
  },
  {
    name: "Stats",
    path: "/stats",
  },
  {
    name: "Service",
    path: "/service",
  },
  {
    name: "Launchpad",
    path: "/launchpad",
  },
];

export const serahcItems = [
  {
    type: "collections",
    collections: [
      {
        name: "Collection 1",
        items: 9800,
      },
      {
        name: "Collection 2",
        items: 9800,
      },
      {
        name: "Collection 3",
        items: 9800,
      },
    ],
  },

  {
    type: "profiles",
    profiles: [
      {
        name: "Profile 1",
      },
      {
        name: "Profile 2",
      },
      {
        name: "Profile 3",
      },
    ],
  },
];

export const profileSettingsNavOptions = [
  {
    label: "Account Details",
    path: "/profile/account-details",
    icon: <AccountCircle />,
  },
  {
    label: "Notifications",
    path: "/profile/notification-settings",
    icon: <CircleNotifications />,
  },
];

export const notificationSettings = [
  {
    label: "Sold Item",
    text: "When one of your items is purchased",
  },
  {
    label: "Bidding Activity",
    text: "When someone bids on one of your item",
  },
  {
    label: "Price Change",
    text: "When an item you made an offer on changes in price",
  },
  {
    label: "Outbid",
    text: "When another user placed a higher bid on an item you bid on",
  },
  {
    label: "Item Bought",
    text: "When you purchased an item",
  },
];

export const ActiveMintList = [
  {
    id: 1,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    mintedPercentage: "70",
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
  },
  {
    id: 2,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    mintedPercentage: "70",
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
  },
  {
    id: 3,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    mintedPercentage: "70",
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
  },
  {
    id: 4,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    mintedPercentage: "70",
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
  },
];

export const UpcommingMintList = [
  {
    id: 1,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
    date: "01 June 2024",
  },
  {
    id: 2,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
    date: "26 Apr 2024",
  },
  {
    id: 3,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
    date: "18 Aug 2024",
  },
  {
    id: 4,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
    date: "13 Oct 2024",
  },
];
