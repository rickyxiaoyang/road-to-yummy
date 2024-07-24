import React from "react";
import Header from "./Header";

export default function PageContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="p-5 mx-auto">
        <Header />
        {children}
      </div>
    </div>
  );
}
