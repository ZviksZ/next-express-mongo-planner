import React                  from "react";
import { Button, PageHeader } from "antd";
import Link                   from "next/link";

export const Navbar: React.FC = () => {
  return (
    <>
      <PageHeader
        ghost={false}
        title="Title"
      >
        <Link href="/about">Operation23</Link>
      </PageHeader>
    </>
  );
};

