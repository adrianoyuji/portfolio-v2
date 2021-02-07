import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "components/ui/Header/index";
import Sidebar from "components/ui/Sidebar/index";
import ScrollTopButton from "components/ui/ScrollTopButton/index";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "Adriano Vasconcelos | Web Developer",
}: Props) => {
  return (
    <div className="layout">
      <Head>
        <link rel="shortcut icon" sizes="48x48" href="favicon.ico" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-col w-screen h-full bg-gray-50 sm:pt-10">
          {children}
        </main>
      </div>
      <ScrollTopButton />
      <Sidebar />
    </div>
  );
};

export default Layout;
