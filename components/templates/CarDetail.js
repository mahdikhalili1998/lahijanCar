import React from "react";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoLogoModelS } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { BsSpeedometer2 } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

function CarDetail(props) {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    price,
    image,
    description,
  } = props;

  return (
    <div className="space-y-12 p-20">
      <img
        className="mx-auto w-[30rem] rounded-xl shadow-xl shadow-slate-400"
        src={image}
      />
      <h2 className="rounded-xl shadow-xl shadow-slate-400 bg-white p-4">{`${name} ${model}`}</h2>
      <ul className="space-y-4 shadow-xl shadow-slate-400 rounded-xl bg-white p-4">
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HiOutlineHomeModern className="text-xl" />
            <span>Company</span>
          </div>
          <span>{name}</span>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoLogoModelS className="text-xl" />
            <span>Model</span>
          </div>
          <span>{model}</span>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MdOutlineDateRange className="text-xl" />
            <span>Built Year</span>
          </div>
          <span>{year}</span>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BsSpeedometer2 className="text-xl" />
            <span>Kms driven</span>
          </div>
          <span>{distance} km</span>
        </li>
      </ul>
      <div className="flex shadow-xl shadow-slate-400 items-center justify-between rounded-xl bg-white p-4">
        <span className="mt-[2px] flex items-center">
          <IoLocationSharp className="text-xl" />
          Location
        </span>
        <span>{location}</span>
      </div>
      <div className="rounded-xl shadow-xl shadow-slate-400 bg-white p-4">
        <h2 className="mb-3  text-xl font-semibold">Extra Information</h2>
        <p>{description}</p>
      </div>
      <div className="flex shadow-xl shadow-slate-400 items-center justify-between rounded-xl bg-white p-4">
        <span className="flex  items-center gap-1 text-2xl">
          <BsCashCoin className="mt-1" />
          Price
        </span>
        <span>{price} $</span>
      </div>
      <button className="w-full shadow-xl shadow-slate-400 rounded-xl bg-green-600 p-4 text-xl font-bold text-white">
        Buy
      </button>
    </div>
  );
}

export default CarDetail;
