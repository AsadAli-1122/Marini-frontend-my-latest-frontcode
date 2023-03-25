import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import filterIcon from "../../../public/img/filterIcon.svg";
import Currency from "@/data/assets-props";
import print from "../../../public/img/print.svg";
import {
  listAssets,
  viewAsset,
  listLiabilities,
  viewLiabilitie,
} from "@/redux/actions/actions";
// import universitiesReducer from "@/redux/reducers/reducer";

export function Reports({
  generalInvoicesPayable,
  commissionInvoicesPayable,
  salesPayable,
}) {
  const dispatch = useDispatch();
  const { assets, liabilities } = useSelector(
    (state) => state?.universitiesReducer
  );
  console.log("assets in reports", assets);
  console.log("liabilities in reports", liabilities);
  useEffect(() => {
    dispatch(listAssets("limit=10000"));
    dispatch(listLiabilities("limit=10000"));
  }, []);
  return (
    <div className="mt-[30px] w-full bg-[#E8E9EB] font-display">
      <div className="mb-5">
        <div className=" rounded-[34px] bg-white p-6 md:p-12">
          <p className=" text-2xl font-bold text-black">Balance Sheet</p>
          <div className="mb-3 mt-12 grid grid-cols-1 gap-3 rounded-[20px] bg-[#F8F9FB] p-5 2xl:grid-cols-2">
            <form className="h-full">
              <div className="relative h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 left-3 my-auto h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-[15px] border-[1px] border-[#cbd2dc]/50 bg-white py-3 pt-4 pl-12 pr-4 text-gray-500 shadow-md focus:bg-white"
                />
              </div>
            </form>
            <div className="grid h-full grid-cols-2 gap-3 md:grid-cols-4">
              <input
                type="text"
                className="rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="From Date"
                required
              />
              <input
                type="text"
                className="rounded-xl border-2 border-[#CBD2DC80] bg-white p-2.5 text-gray-900 placeholder:text-[#BEBFC3] focus:border-blue-500 focus:ring-blue-500"
                placeholder="To Date"
                required
              />
              <button className="flex items-center justify-center rounded-2xl border-[1px] border-[#cbd2dc]/50 bg-white shadow-md">
                <img className="w-[20px]" src={filterIcon} alt="..." />
                <p className="mx-3 text-[16px] ">Apply</p>
              </button>
              <button className="flex h-[57px] flex-row items-center justify-center rounded-2xl border-[1px] border-[#cbd2dc]/50 bg-white shadow-md">
                <img src={print} />
                <p className="mx-3 ">Print</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-[30px] rounded-[34px] bg-white p-6 md:p-12">
          <p className=" text-2xl font-bold text-black">Assets</p>
          <div className="mb-3 mt-12 rounded-[20px]">
            <div className="flex flex-col overflow-x-auto">
              <table className="relative w-full border-none">
                <span className="absolute bottom-0 h-[1px] w-full bg-[#D9D9D9]" />
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-[200px] py-3 text-left text-base font-medium text-[#92929D]"
                    >
                      Name
                    </th>
                    <th scope="col" className="w-full px-6 py-3" />
                    <th
                      scope="col"
                      className="w-[113px] px-6 py-3 text-center text-base font-medium text-[#92929D]"
                    >
                      Currency
                    </th>
                    <th
                      scope="col"
                      className="w-[113px] px-6 py-3 text-center text-base font-medium text-[#92929D]"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="border-none">
                  <tr>
                    <td className="py-5 text-lg font-bold">Current assets</td>
                  </tr>
                  {assets?.data?.faqs.map(({ name, price }, i) => (
                    <tr key={name}>
                      <td
                        className={`whitespace-nowrap ${
                          "font-bold" + "pl-4 font-normal"
                        } py-4 text-lg text-[#333]`}
                      >
                        {name}
                      </td>
                      <td className="px-6 py-4" />
                      <td className="whitespace-nowrap px-6 py-4 text-center text-lg font-medium text-[#333]">
                        USD
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-center text-lg font-semibold text-[#333]"
                        // style={{}}
                      >
                        ${(+price).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-2">&nbsp;</td>
                    <td className="py-2">&nbsp;</td>
                    <td className="py-2">&nbsp;</td>
                    <td className="py-2">&nbsp;</td>
                    <td className="py-2">&nbsp;</td>
                    <td className="py-2">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 rounded-[20px] py-4 px-6 font-bold text-[#333]">
              <p className="text-[22px] capitalize">Total Assets</p>
              <p className="ml-auto text-2xl">
                ${assets.data?.totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-[30px] rounded-[34px] bg-white p-6 md:p-12">
          <p className=" text-2xl font-bold text-black">Liabilities</p>
          <div className="mb-3 mt-12 rounded-[20px]">
            <div className="flex flex-col overflow-x-auto">
              <table className="relative w-full border-none">
                <span className="absolute bottom-0 h-[1px] w-full bg-[#D9D9D9]" />
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-[200px] py-3 text-left text-base font-medium text-[#92929D]"
                    >
                      Name
                    </th>
                    <th scope="col" className="w-full px-6 py-3" />
                    <th
                      scope="col"
                      className="w-[113px] px-6 py-3 text-center text-base font-medium text-[#92929D]"
                    >
                      Currency
                    </th>
                    <th
                      scope="col"
                      className="w-[113px] px-6 py-3 text-center text-base font-medium text-[#92929D]"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="border-none">
                  <tr>
                    <td className="py-5 text-lg font-bold ">
                      {/* <td className="py-5 text-lg font-bold"> */}
                      Current Liabilities
                    </td>
                  </tr>
                  {liabilities?.data?.faqs.map(({ name, price }, i) => (
                    <tr key={name}>
                      <td
                        className={`whitespace-nowrap ${
                          "font-bold" + "pl-4 font-normal"
                        } py-4 text-lg text-[#333]`}
                      >
                        {name}
                      </td>
                      <td className="px-6 py-4" />
                      <td className="whitespace-nowrap px-6 py-4 text-center text-lg font-medium text-[#333]">
                        USD
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-center text-lg font-semibold text-[#333]"
                        // style={{}}
                      >
                        ${(+price).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-2">&nbsp;</td>
                    <td className="py-2">&nbsp;</td>
                    <td className="py-2">&nbsp;</td>
                    <td className="py-2">&nbsp;</td>
                    <td className="py-2">&nbsp;</td>
                    <td className="py-2">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 rounded-[20px] py-4 px-6 font-bold text-[#333]">
              <p className="text-[22px] capitalize">Total Liabilities</p>
              <p className="ml-auto text-2xl">
                ${liabilities.data?.totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-[30px] rounded-[34px] bg-white p-6 md:p-12">
          <p className=" text-2xl font-bold text-black">Owner's Equity</p>
          <div className="mb-3 mt-12 rounded-[20px]">
            <div className="flex items-center justify-between gap-4 text-2xl font-semibold">
              <p className="text-[#333]">Cash</p>
              <p className="text-[#449E3C]">
                $
                {(
                  assets.data?.totalPrice - liabilities.data?.totalPrice
                ).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
