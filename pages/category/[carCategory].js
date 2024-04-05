import { useRouter } from "next/router";
import React from "react";
import carsData from "../../data/carsData";
import CarsCard from "../../components/module/CarsCard";
import { MdKeyboardBackspace } from "react-icons/md";
function CarCategories() {
  const router = useRouter();
  const Carfinder = carsData.filter(
    (item) => item.category === router.query.carCategory,
  );
  const backHandler = () => {
    router.back();
  };
  // console.log(Carfinder);
  return (
    <>
      <div
        className="mx-auto mb-10 flex w-max cursor-pointer items-center gap-3 rounded-xl bg-white px-3 shadow-xl  shadow-slate-400"
        onClick={backHandler}
      >
        <MdKeyboardBackspace className="mt-1 text-2xl" />
        <p>Back to last page</p>
      </div>
      <div className="grid grid-cols-3 gap-y-16 justify-self-center">
        {Carfinder.map((item) => (
          <CarsCard key={item.id} car={item} />
        ))}
      </div>
    </>
  );
}

export default CarCategories;
