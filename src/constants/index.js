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
