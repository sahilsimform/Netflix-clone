import Head from "next/head";
import Link from "next/link";
import React from "react";
import useAuth from "../hooks/useAuth";
import Membership from "../components/Membership";

const Account = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Head>
        <title>Account Setting - Netflix</title>
        <link rel="icon" href="netflix_logo_icon_170919.ico" />
      </Head>
      <header className={`bg-[#141414]`}>
        <Link href="/">
          <div>
            <img
              src="https://rb.gy/ulxxee"
              width={120}
              height={120}
              className="cursor-pointer object-contain"
            />
            <h2>Logo</h2>
          </div>
        </Link>
        <Link href="/account">
          <div>
            <img
              src="https://rb.gy/g1pwyx"
              alt=""
              className="cursor-pointer rounded"
            />
            <h3>account</h3>
          </div>
        </Link>
      </header>
      <main className="pt-24 max-w-6xl mx-auto">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">
              Member since 07 - sep - 2022
            </p>
          </div>
        </div>
        <Membership />
        <div className="mt-6 grid-clos-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0 ">
          <h4>Plan Details</h4>
          <div className="">
            <h2>products </h2>
          </div>
          <p className="cursor-pointer  text-blue-500 hover:underline md:text-right">
            Change Plan
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
          <h4 className="text-lg text-[gray]">Settings</h4>
          <p
            className="col-span-3 cursor-pointer text-blue-500 hover:underline"
            onClick={logout}
          >
            Sign out of all devices
          </p>
        </div>
      </main>
    </div>
  );
};

export default Account;
