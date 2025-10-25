import React from "react";
import Header from "../uiComponents/Header";
import GButton from "../components/GButton";
import GAlert from "../components/GAlert";

const MainLayout = ({
  children,
  className = "",
  id,
  withHeader = true,
  withFooter = true,
  test = false,
}: MainLayoutProps) => {
  return (
    <div id={id} className={`min-h-screen flex flex-col ${className}`}>
      {withHeader && <Header />}

      <main className="flex-1">{children}</main>

      {test && (
        <main id="test">
          <div className="flex flex-col space-y-5">
            <GButton size="sm" text="دکمه کاستوم" variant="primary" />
            <GButton size="md" text="دکمه کاستوم" variant="secondary" />
            <GButton size="lg" text="دکمه کاستوم" variant="dark" />
            <GButton
              loading={true}
              text="دکمه کاستوم"
              variant="confirm"
              event={() => console.log("clicked")}
            />
            <GButton disabled={true} text="دکمه کاستوم" variant="reject" />
            <GAlert type="error" text="خطا یافت شد" />
            <GAlert type="info" text="خطا یافت شد" />
            <GAlert type="warning" text="خطا یافت شد" />
            <GAlert type="success" text="خطا یافت شد" />
          </div>
        </main>
      )}

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
