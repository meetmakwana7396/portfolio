import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container min-h-[calc(100vh-310px)] mx-auto">{children}</div>;
}
