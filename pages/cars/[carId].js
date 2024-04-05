import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetail from "../../components/templates/CarDetail";
function CarId() {
  const { query } = useRouter();
  const id = query.carId;
  const carDetail = carsData[id - 1];
//   console.log(carDetail);

  return (
    <div className="bg-slate-100">
      <CarDetail {...carDetail} />
    </div>
  );
}

export default CarId;
