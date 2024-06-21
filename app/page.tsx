import Image from "next/image";
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.
  length <1 ||  !allCars;

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y 
      max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold">Car Catelogue</h1>
          <p>Explore the cars you migt like</p>
        </div>
        <div className="home_filters">
          <SearchBar/>

          <div className="home_filters-container">
            <CustomFilter title ="fuel" />
            <CustomFilter title ="year" />

          </div>

        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home_cars-wrapper">
              {allCars?.map((car) =><CarCard car={car}/>)}

            </div>
          </section>
        ):(
          <div className="home_error-container">
            <h2 className="text-black text-xl font-bold">
              Ooops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}


      </div>
    </main>
  );
}
