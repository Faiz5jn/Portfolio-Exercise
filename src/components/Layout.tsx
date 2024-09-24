import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <div className="font-outfit bg-white text-black w-full h-full flex flex-col">
        {children}
    </div>
  );
}

export default Layout