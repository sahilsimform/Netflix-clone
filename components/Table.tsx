import { CheckIcon } from "@heroicons/react/outline";
import React from "react";

const Table = () => {
  return (
    <table>
      <tbody className="divide-y divide-[gray] ">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly Price</td>
          <td className="tableDataFeature">₹ 350</td>
          <td className="tableDataFeature">₹ 500</td>
          <td className="tableDataFeature">₹ 1000</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video Quality</td>
          <td className="tableDataFeature">480p</td>
          <td className="tableDataFeature">1080p</td>
          <td className="tableDataFeature">4K+HDR</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Portability</td>
          <td className="tableDataFeature">
            <CheckIcon className="inline-block h-8 w-8 text-[#e50914]" />
          </td>
          <td className="tableDataFeature">
            <CheckIcon className="inline-block h-8 w-8 text-[#e50914]" />
          </td>
          <td className="tableDataFeature">
            <CheckIcon className="inline-block h-8 w-8 text-[#e50914]" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
