import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: "ri-home-smile-line",
    },
    {
      title: "About",
      path: "/about",
      icon: "ri-information-line",
    },
    {
      title: "Clients",
      path: "/clients",
      icon: "ri-user-location-fill",
    },
    {
      title: "Contact",
      path: "/contact",
      icon: "ri-contacts-line",
    },
  ];

  return (
    <div>
      {/* content */}
      <div className="pb-44 overflow-x-hidden">{children}</div>

      {/* footer */}
      <div className="fixed left-0 right-0 bottom-10 sm:bottom-0">
        <div className="flex justify-center w-full">
          {menuItems.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-end"
            >
              {location.pathname === item.path && (
                <div className="flex flex-col items-center">
                  <div className="h-5 w-10 bg-primary rounded-t-full"></div>
                  <div className="h-5 w-20 bg-primary rounded-t-full text-center flex items-center justify-center">
                    <i className={`${item.icon} text-xl text-white`}></i>
                  </div>
                </div>
              )}
              <div
                className={`px-20 sm:px-8 py-5 bg-primary ${
                  index === 0 && "rounded-l-lg sm:rounded-l"
                } ${
                  index === menuItems.length - 1 && "rounded-r-lg sm:rounded-r"
                } flex item-center justify-center space-x-2`}
              >
                {location.pathname !== item.path && (
                  <i
                    onClick={() => navigate(item.path)}
                    className={`${item.icon} text-secondary text-xl`}
                  ></i>
                )}
                <Link
                  to={`${item.path}`}
                  className={`text-secondary text-xl ${
                    item.path !== location.pathname && "sm:hidden"
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
