import React from "react";
import Sport from "../icon/Sport";
import Sedan from "../icon/Sedan";
import Suv from "../icon/Suv";
import Hatchback from "../icon/Hatchback";
import Link from "next/link";
function Category() {
  return (
    <div className="mx-auto mb-14 w-max shadow-xl shadow-slate-400">
      <div className=" flex justify-center gap-10 rounded-xl bg-white p-3 ">
        <Link
          href={`/category/sport`}
          className="flex items-start gap-2 rounded-xl bg-slate-200 px-2"
        >
          <span>Sport</span>
          <Sport />
        </Link>
        <Link
          href={`/category/sedan`}
          className="flex items-start gap-2 rounded-xl bg-slate-200 px-2"
        >
          <span>Sedan</span>
          <Sedan />
        </Link>
        <Link
          href={`/category/suv`}
          className="flex items-start gap-2 rounded-xl bg-slate-200 px-2"
        >
          <span>Suv</span>
          <Suv />
        </Link>
        <Link
          href={`/category/hatchback`}
          className="flex items-start gap-2 rounded-xl bg-slate-200 px-2"
        >
          <span>Hatchback</span>
          <Hatchback />
        </Link>
      </div>
    </div>
  );
}

export default Category;
