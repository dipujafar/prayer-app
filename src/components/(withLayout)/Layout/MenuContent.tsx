"use client";
import { ConfigProvider, Menu } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import dashboard from "../../../assets/nav-icons/dashboardsvg.svg";
import accounts from "../../../assets/nav-icons/accounts.svg";
import earning from "../../../assets/nav-icons/earning.svg";
import educational from "../../../assets/nav-icons/educational.svg";
import event from "../../../assets/nav-icons/event.svg";
import order from "../../../assets/nav-icons/order.svg";
import product from "../../../assets/nav-icons/product.svg";
import setting from "../../../assets/nav-icons/setting.svg";
import training from "../../../assets/nav-icons/training.svg";
import prayer from "../../../assets/nav-icons/prayer-icon.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiLogoutCircleLine } from "react-icons/ri";

type MenuItem = Required<MenuProps>["items"][number];
const MenuContent = ({ collapsed }: any) => {
  const pathname = usePathname();
  const items: MenuItem[] = [
    {
      key: "/",
      icon: <Image src={dashboard} width={25} height={25} alt="dashboard" />,
      label: <Link href={`/`}>Dashboard</Link>,
    },
    {
      key: "/accounts-details",
      icon: <Image src={accounts} width={25} height={25} alt="accounts" />,
      label: <Link href={`/accounts-details`}>Accounts Details</Link>,
    },
    {
      key: "/earning",
      icon: <Image src={earning} width={25} height={25} alt="earning" />,
      label: <Link href={`/earning`}>Earning</Link>,
    },
    {
      key: "/prayer-watch",
      icon: <Image src={prayer} width={25} height={25} alt="prayer" />,
      label: <Link href={`/prayer-watch`}>Prayer Watch</Link>,
    },
    {
      key: "/educational-resources",
      icon: (
        <Image src={educational} width={25} height={25} alt="educational" />
      ),
      label: <Link href={`/educational-resources`}>Educational Resources</Link>,
    },
    {
      key: "/listen-and-learn",
      icon: <Image src={training} width={25} height={25} alt="learn" />,
      label: <Link href={`/listen-and-learn`}>Listen & Learn</Link>,
    },
    {
      key: "/product",
      icon: <Image src={product} width={25} height={25} alt="product" />,
      label: <Link href={`/product`}>Product</Link>,
    },
    {
      key: "/order-list",
      icon: <Image src={order} width={25} height={25} alt="order" />,
      label: <Link href={`/order-list`}>Order List</Link>,
    },
    {
      key: "/event",
      icon: <Image src={event} width={25} height={25} alt="event" />,
      label: <Link href={`/event`}>Event</Link>,
    },
    {
      key: "/setting",
      icon: <Image src={setting} width={25} height={25} alt="setting" />,
      label: "Setting",
      children: [
        {
          key: "/setting/category",
          label: <Link href={`/setting/category`}>Category</Link>,
        },
        {
          key: "/setting/about-us",
          label: <Link href={`/setting/about-us`}>About us</Link>,
        },
        {
          key: "/setting/terms-and-conditions",
          label: (
            <Link href={`/setting/terms-and-conditions`}>
              Terms & Condition
            </Link>
          ),
        },
        {
          key: "/setting/privacy-policy",
          label: <Link href={`/setting/privacy-policy`}>Privacy Policy</Link>,
        },
      ],
      className: "custom-sub-menu",
    },
    {
      key: "/logout",
      icon: <Link href={"/auth/login"}><RiLogoutCircleLine size={22} /></Link>,
      label: "logout",
    },
  ];
  const itemHeight = collapsed ? "40px" : "38px";

  return (
    <div className="w-full flex justify-center mt-6">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: "#F0BE1B",
            },
          },
        }}
      >
        <Menu
          // defaultSelectedKeys={['1']}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          defaultSelectedKeys={[pathname]}
          items={items}
          style={{
            width: collapsed ? "60px" : "250px",
            backgroundColor: "white",
            color: "black",
          }}
        />
        <style jsx global>{`
          .ant-menu-item {
            background-color: #5a015e !important;
            color: white !important;
            border-radius: 4px !important;
            margin-bottom: 10px !important;
            font-size: 16px !important;
            height: ${itemHeight} !important;
          }
          .ant-menu-item-selected {
            background-color: #f0be1b !important;
            color: white !important;
          }
          .custom-sub-menu .ant-menu-submenu-title {
            background-color: #5a015e !important;
            color: white !important;
            border-radius: 4px !important;
            margin-bottom: 10px !important;
            font-size: 16px !important;
            height: ${itemHeight} !important;
          }
          .ant-menu-submenu-title .ant-menu-submenu-title {
            background-color: transparent !important;
            color: #5a015e !important;
            border-radius: 4px !important;
            margin-bottom: 10px !important;
            font-size: 16px !important;
            height: ${itemHeight} !important;
          }
          :where(
              .css-dev-only-do-not-override-o2xk72
            ).ant-menu-dark.ant-menu-inline
            .ant-menu-sub.ant-menu-inline {
            background: #ffffff !important;
          }
          :where(
              .css-dev-only-do-not-override-9rz8em
            ).ant-menu-dark.ant-menu-inline
            .ant-menu-sub.ant-menu-inline,
          :where(.css-dev-only-do-not-override-9rz8em).ant-menu-dark
            > .ant-menu.ant-menu-inline
            .ant-menu-sub.ant-menu-inline {
            background: #000c1700;
          }
          :where(
              .css-dev-only-do-not-override-9rz8em
            ).ant-menu-dark.ant-menu-submenu-popup
            > .ant-menu,
          :where(.css-dev-only-do-not-override-9rz8em).ant-menu-dark
            > .ant-menu.ant-menu-submenu-popup
            > .ant-menu {
            background-color: #ffffff;
            padding: ${collapsed ? "10px" : "0px"};
          }

          .custom-sub-menu
            li.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child {
            background-color: transparent !important;
          }
          .custom-sub-menu
            li.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child
            a {
            color: #f0be1b;
          }
          .custom-sub-menu li.ant-menu-item.ant-menu-item-only-child {
            background-color: transparent !important;
          }
          .custom-sub-menu li.ant-menu-item.ant-menu-item-only-child a {
            color: black;
          }
        `}</style>

        {/* padding: ${itemPadding} !important; */}
      </ConfigProvider>
    </div>
  );
};

export default MenuContent;
