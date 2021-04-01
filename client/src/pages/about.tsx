import React          from "react";
import { PageHeader } from "antd";
import { useRouter }  from "next/router";

export default function About() {
  const router = useRouter()


  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => router.push('/')}
        title="Title"
        subTitle="This is a subtitle"
      />
    </>
  );
}
