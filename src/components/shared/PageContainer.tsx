import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="p-5 mx-auto flex flex-col justify-between h-screen gap-10">
      <Header />
      <div className="mb-auto">{children}</div>
      <Footer />
    </div>
  );
}
