import Head from "next/head";
import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import Table from "../components/Table";
import Card from "../components/Card";
import { checkout } from "../lib/checkout";
import useAuth from "../hooks/useAuth";
import Link from "next/link";
import Image from "next/image";

const plans = [
  {
    id: "1",
    name: "Basic",
    price: `${process.env.NEXT_PUBLIC_API_KEY_PRODUCT_ONE}`,
  },
  {
    id: "2",
    name: "Standard",
    price: `${process.env.NEXT_PUBLIC_API_KEY_PRODUCT_TWO}`,
  },
  {
    id: "3",
    name: "Premium",
    price: `${process.env.NEXT_PUBLIC_API_KEY_PRODUCT_THREE}`,
  },
];

const Subscriptions = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Head>
        <title>Sahil Netflix</title>
        <link rel="icon" href="netflix_logo_icon_170919.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <Image
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1>Choose the plan this's right for you.</h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#e50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#e50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#e50914]" /> Change or cancel
            Your plan anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-y-4  ">
          <div className="flex w-full justify-center items-center self-end md:w-3/5">
            {plans.map((plan) => (
              <button
                className={`planBox `}
                key={plan.id}
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: plan.price,
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                {plan.name}
              </button>
            ))}
          </div>
          <Table />
          <div className="flex justify-center">
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Subscriptions;
