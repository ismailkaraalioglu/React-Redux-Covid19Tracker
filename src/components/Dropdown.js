import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGlobalCountries } from "../redux/globalData/services";
import { getCountryCovidData } from "../redux/countryData/services";
import CountryDetail from "./CountryDetail";

function Dropdown() {
  const [countries, setCountries] = useState("Turkey");
  const country = useSelector((state) => state.globalData.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGlobalCountries());
  }, [dispatch]);

  useEffect(() => {
    if (countries) {
      dispatch(getCountryCovidData(countries));
    }
  }, [countries, dispatch]);

  const handleCountries = (e) => {
    setCountries(e.target.value);
  };

  return (
    <>
      <div className="md:w-[500px] md:h-[40px] md:mx-auto mt-10">
        <select
          value={countries}
          onChange={handleCountries}
          className="w-full h-full border-b-2 border-zinc-600 bg-transparent focus:outline-none select-none cursor-pointer dark:bg-gray-900 dark:text-white dark:border-white"
        >
          {country &&
            country.countries.map((count, index) => (
              <option value={count.name} key={index}>
                {count.name}
              </option>
            ))}
        </select>
      </div>
      <CountryDetail countries={countries} />
    </>
  );
}

export default Dropdown;
