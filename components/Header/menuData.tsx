import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    newTab: false,
    path: "/",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Site vitrine",
        newTab: false,
        path: "/service/site-vitine",
      },
      {
        id: 34,
        title: "E-commerce",
        newTab: false,
        path: "/service/e-commerce",
      },
      {
        id: 35,
        title: "Maintenance et mise à jour",
        newTab: false,
        path: "/service/maintenance",
      },
      {
        id: 35.1,
        title: "Marketing digital",
        newTab: false,
        path: "/service/marketing-digital",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
