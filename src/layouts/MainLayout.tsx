import React from "react";
import Header from "../uiComponents/Header";
import GButton from "../components/GButton";

const MainLayout = ({
  children,
  className = "",
  id,
  withHeader = true,
  withFooter = true,
  test = false
}: MainLayoutProps) => {
  return (
    <div id={id} className={`min-h-screen flex flex-col ${className}`}>
      {withHeader && <Header />}

      <main className="flex-1">{children}</main>
      
      {test && <main id="test">
        <div className="flex gap-x-5">
          <GButton text="sdsd" variant="primary" />
          <GButton text="sdsd" variant="secondary" />
          <GButton text="sdsd" variant="dark" />
          <GButton text="sdsd" variant="confirm" />
          <GButton text="sdsd" variant="reject" />
        </div>
      </main>}

      {withFooter && (
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default MainLayout;
