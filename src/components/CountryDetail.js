import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/tr";
import "moment/locale/en-au";
import CountUp from "react-countup";

function CountryDetail({ countries }) {
  const countryData = useSelector((state) => state.countryData.countryData);
  const language = useSelector((state) => state.site.language);

  return (
    <div className="mt-8">
      <div className="text-center mb-6">
        <p className="text-3xl font-semibold text-gray-600 mb-2 dark:text-white">
          {countries}
        </p>
        <p className="font-medium text-xs text-gray-600 dark:text-white">
          <span>{language ? "Son Güncelleme:" : "Last Updated:"}</span>{" "}
          {language && (
            <>
              <span>
                {moment(countryData.lastUpdate).locale("tr").format("L")}
              </span>{" "}
              <span>
                {moment(countryData.lastUpdate).locale("tr").format("LT")}
              </span>
            </>
          )}
          {!language && (
            <>
              <span>
                {moment(countryData.lastUpdate).locale("en").format("L")}
              </span>{" "}
              <span>
                {moment(countryData.lastUpdate).locale("en").format("LT")}
              </span>
            </>
          )}
        </p>
      </div>
      <div className="md:flex md:justify-center md:gap-x-16">
        <div className="md:w-[200px] h-[220px] w-full text-center md:text-left rounded-lg shadow bg-blue-200 mb-2">
          <div className="pl-5 pt-6">
            <h2 className="mb-2 font-bold">
              {language ? "Enfekte" : "Infected"}
            </h2>
            <p className="mb-5 text-2xl">
              {countryData && (
                <CountUp
                  start={0}
                  end={countryData.confirmed.value}
                  separator="."
                />
              )}
            </p>
            <div className="text-sm font-light">
              <p>
                {language ? "Son Güncelleme Tarihi :" : "Last Updated at :"}
              </p>
              {language && (
                <>
                  <p>
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("tr")
                        .format("dddd")}
                    </span>{" "}
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("tr")
                        .format("MMM Do YY")}
                    </span>
                  </p>
                  <p>
                    {moment(countryData.lastUpdate).locale("tr").format("LT")}
                  </p>
                </>
              )}
              {!language && (
                <>
                  <p>
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("en")
                        .format("dddd")}
                    </span>{" "}
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("en")
                        .format("MMM Do YY")}
                    </span>
                  </p>
                  <p>
                    {moment(countryData.lastUpdate).locale("en").format("LT")}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-[200px] h-[220px] w-full text-center md:text-left rounded-lg shadow bg-red-200 mb-2">
          <div className="pl-5 pt-6">
            <h2 className="mb-2 font-bold">{language ? "Ölüm" : "Deaths"}</h2>
            <p className="mb-5 text-2xl">
              {countryData && (
                <CountUp
                  start={0}
                  end={countryData.deaths.value}
                  separator="."
                />
              )}
            </p>
            <div className="text-sm font-light">
              <p>
                {language ? "Son Güncelleme Tarihi :" : "Last Updated at :"}
              </p>
              {language && (
                <>
                  <p>
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("tr")
                        .format("dddd")}
                    </span>{" "}
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("tr")
                        .format("MMM Do YY")}
                    </span>
                  </p>
                  <p>
                    {moment(countryData.lastUpdate).locale("tr").format("LT")}
                  </p>
                </>
              )}
              {!language && (
                <>
                  <p>
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("en")
                        .format("dddd")}
                    </span>{" "}
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("en")
                        .format("MMM Do YY")}
                    </span>
                  </p>
                  <p>
                    {moment(countryData.lastUpdate).locale("en").format("LT")}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-[200px] h-[220px] w-full text-center md:text-left rounded-lg shadow bg-yellow-200">
          <div className="pl-5 pt-6">
            <h2 className="mb-2 font-bold">{language ? "Aktif" : "Active"}</h2>
            <p className="mb-5 text-2xl">
              {countryData && (
                <CountUp
                  start={0}
                  end={countryData.confirmed.value - countryData.deaths.value}
                  separator="."
                />
              )}
            </p>
            <div className="text-sm font-light">
              <p>
                {language ? "Son Güncelleme Tarihi :" : "Last Updated at :"}
              </p>
              {language && (
                <>
                  <p>
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("tr")
                        .format("dddd")}
                    </span>{" "}
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("tr")
                        .format("MMM Do YY")}
                    </span>
                  </p>
                  <p>
                    {moment(countryData.lastUpdate).locale("tr").format("LT")}
                  </p>
                </>
              )}
              {!language && (
                <>
                  <p>
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("en")
                        .format("dddd")}
                    </span>{" "}
                    <span>
                      {moment(countryData.lastUpdate)
                        .locale("en")
                        .format("MMM Do YY")}
                    </span>
                  </p>
                  <p>
                    {moment(countryData.lastUpdate).locale("en").format("LT")}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
