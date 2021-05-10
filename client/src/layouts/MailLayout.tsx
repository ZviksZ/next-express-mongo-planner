import React, { useEffect } from "react";
import Head                 from "next/head";
import { useRouter } from 'next/router'

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  noAuth?: boolean;
}

export const MailLayout: React.FC<MainLayoutProps> = ({
                                                        children,
                                                        title,
                                                        description,
                                                        keywords,
                                                        noAuth
                                                      }) => {
  const router = useRouter()

  useEffect(() => {
    if (noAuth) {
      router.push('/login')
    }
  }, [noAuth])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content={keywords}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      {children}
    </>
  );
};

