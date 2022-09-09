import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Membership from "../components/Membership";
import { FiLogOut } from "react-icons/fi";

const Account = ({ data }) => {
  const { logout, user } = useAuth();
  const stripeUsers = data.data;
  const [userPdf, setUserPdf] = useState();
  const [userPlan, setUserPlan] = useState();
  const [userHostedInvoiceUrl, setUserHostedInvoiceUrl] = useState();
  const [planDate, setPlanDate] = useState();
  const [memberShipStartDate, setMemberShipStartDate] = useState();
  const [memberShipEndDate, setMemberShipEndDate] = useState();

  const myDateHeader = new Date(parseInt(planDate, 10) * 1000);
  const myDateString = myDateHeader.toString();

  const myDateStart = new Date(parseInt(memberShipStartDate, 10) * 1000);
  const myDateStringStart = myDateStart.toString();

  const myDateEnd = new Date(parseInt(memberShipEndDate, 10) * 1000);
  const myDateStringEnd = myDateEnd.toString();

  useEffect(() => {
    stripeUsers.map((stripeUser) => {
      if (stripeUser.customer_email === user?.email) {
        const userPdf = stripeUser.invoice_pdf;
        setUserPdf(userPdf);
        const userDescription = stripeUser.lines.data[0].description;
        setUserPlan(userDescription);

        const hostedInvoiceUrl = stripeUser.hosted_invoice_url;
        setUserHostedInvoiceUrl(hostedInvoiceUrl);

        const userDate = stripeUser.created;
        setPlanDate(userDate);

        const periodStart = stripeUser.period_start;
        setMemberShipStartDate(periodStart);

        // const periodEnd = stripeUser.period_end;
        // setMemberShipEndDate(periodEnd);

        // const userDescription2 = stripeUser;
        // console.log(userDescription2);
      }
    });
  }, [user]);

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
            <h3>Account</h3>
          </div>
        </Link>
        <button onClick={logout}>
          <FiLogOut className="h-6 w-6 text-red-600" />
        </button>
      </header>
      <main className="pt-24 max-w-6xl mx-auto">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">
              Member since <span>{myDateString}</span>
            </p>
          </div>
        </div>
        <Membership
          memberShipEndDate={myDateStringEnd}
          memberShipStartDate={myDateStringStart}
          userPdf={userPdf}
          userHostedInvoiceUrl={userHostedInvoiceUrl}
        />
        <div className="mt-6 grid-clos-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0 ">
          <h4>Plan Details</h4>
          <div className="col-span-2 font-medium">
            <h2>{userPlan} </h2>
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

export const getStaticProps = async () => {
  const res = await fetch(
    `https://v1.nocodeapi.com/sahilsingh/stripe/${process.env.NEXT_PUBLIC_FETCH_API}/invoices`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
