import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalCovidData } from "../redux/globalData/services";
import moment from "moment";
import "moment/locale/tr";
import "moment/locale/en-au";
import CountUp from "react-countup";

function GlobalData() {
  const globalDataCovid = useSelector(
    (state) => state.globalData.globalDataCovid
  );
  const globalDataCovidStatus = useSelector(
    (state) => state.globalData.globalDataCovidStatus
  );
  const language = useSelector((state) => state.site.language);
  const dispatch = useDispatch();

  useEffect(() => {
    if (globalDataCovidStatus === "idle") {
      dispatch(getGlobalCovidData());
    }
  }, [globalDataCovidStatus, dispatch]);

  return (
    <div className="flex justify-center gap-x-36 pt-10">
      <div className="flex justify-center items-center gap-x-6">
        <div className="h-[400px] w-[230px]">
          <img
            className="h-full w-full"
            src="https://covid19.sznm.dev/medical-mask-pana.svg"
            alt="Social Distancing"
          />
        </div>
        {language ? (
          <p className="font-bold text-gray-600 text-lg dark:text-white">
            Güvende Kal,
            <br /> Sosyal Mesafeyi <br /> Koru
          </p>
        ) : (
          <p className="font-bold text-gray-600 text-lg dark:text-white">
            Stay Safe,
            <br /> Keep Social <br /> Distancing
          </p>
        )}
      </div>

      <div>
        <div>
          <p className="text-3xl font-semibold text-gray-600 dark:text-white">
            {language ? "Global Veri" : "Global Data"}
          </p>
          <p className=" font-medium text-xs text-gray-600 dark:text-white">
            {globalDataCovid && !language && (
              <>
                <span>Last Updated:</span>{" "}
                <span>
                  {moment(globalDataCovid.lastUpdate).locale("en").format("L")}
                </span>{" "}
                <span>
                  {moment(globalDataCovid.lastUpdate).locale("en").format("LT")}
                </span>
              </>
            )}
            {globalDataCovid && language && (
              <>
                <span>Son Güncelleme:</span>{" "}
                <span>
                  {moment(globalDataCovid.lastUpdate).locale("tr").format("L")}
                </span>{" "}
                <span>
                  {moment(globalDataCovid.lastUpdate).locale("tr").format("LT")}
                </span>
              </>
            )}
          </p>
        </div>

        {globalDataCovid && (
          <>
            <div className="flex gap-x-3 mt-5">
              <div className="w-[200px] h-[220px] rounded-lg shadow bg-blue-200">
                <div className="pl-5 pt-6">
                  <h2 className="mb-2 font-bold">
                    {language ? "Enfekte" : "Infected"}
                  </h2>
                  <p className="mb-5 text-2xl">
                    {globalDataCovid && (
                      <CountUp
                        start={0}
                        end={globalDataCovid.confirmed.value}
                        separator="."
                      />
                    )}
                  </p>
                  <div className="text-sm font-light">
                    <p>
                      {language
                        ? "Son Güncelleme Tarihi :"
                        : "Last Updated at :"}
                    </p>
                    {language && (
                      <>
                        <p>
                          <span>
                            {moment(globalDataCovid.lastUpdate)
                              .locale("tr")
                              .format("dddd")}
                          </span>{" "}
                          <span>
                            {moment(globalDataCovid.lastUpdate)
                              .locale("tr")
                              .format("MMM Do YY")}
                          </span>
                        </p>
                        <p>
                          {moment(globalDataCovid.lastUpdate)
                            .locale("tr")
                            .format("LT")}
                        </p>
                      </>
                    )}
                    {!language && (
                      <>
                        <p>
                          <span>
                            {moment(globalDataCovid.lastUpdate)
                              .locale("en")
                              .format("dddd")}
                          </span>{" "}
                          <span>
                            {moment(globalDataCovid.lastUpdate)
                              .locale("en")
                              .format("MMM Do YY")}
                          </span>
                        </p>
                        <p>
                          {moment(globalDataCovid.lastUpdate)
                            .locale("en")
                            .format("LT")}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-[200px] h-[220px] rounded-lg shadow bg-yellow-200">
                <div className="pl-5 pt-6">
                  <h2 className="mb-2 font-bold">
                    {language ? "Aktif" : "Active"}
                  </h2>
                  <p className="mb-5 text-2xl">
                    {globalDataCovid && (
                      <CountUp
                        start={0}
                        end={
                          globalDataCovid.confirmed.value -
                          globalDataCovid.deaths.value
                        }
                        separator="."
                      />
                    )}
                  </p>
                  <div className="text-sm font-light">
                    <p>
                      {language
                        ? "Son Güncelleme Tarihi :"
                        : "Last Updated at :"}
                    </p>
                    {language && (
                      <>
                        <p>
                          <span>
                            {moment(globalDataCovid.lastUpdate)
                              .locale("tr")
                              .format("dddd")}
                          </span>{" "}
                          <span>
                            {moment(globalDataCovid.lastUpdate)
                              .locale("tr")
                              .format("MMM Do YY")}
                          </span>
                        </p>
                        <p>
                          {moment(globalDataCovid.lastUpdate)
                            .locale("tr")
                            .format("LT")}
                        </p>
                      </>
                    )}
                    {!language && (
                      <>
                        <p>
                          <span>
                            {moment(globalDataCovid.lastUpdate)
                              .locale("en")
                              .format("dddd")}
                          </span>{" "}
                          <span>
                            {moment(globalDataCovid.lastUpdate)
                              .locale("en")
                              .format("MMM Do YY")}
                          </span>
                        </p>
                        <p>
                          {moment(globalDataCovid.lastUpdate)
                            .locale("en")
                            .format("LT")}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[190px] mt-3 rounded-lg text-center shadow bg-red-200">
              <div className="pt-6">
                <h2 className="mb-2 font-bold">
                  {language ? "Ölüm" : "Deaths"}
                </h2>
                <p className="mb-2 text-2xl">
                  {globalDataCovid && (
                    <CountUp
                      start={0}
                      end={globalDataCovid.deaths.value}
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
                          {moment(globalDataCovid.lastUpdate)
                            .locale("tr")
                            .format("dddd")}
                        </span>{" "}
                        <span>
                          {moment(globalDataCovid.lastUpdate)
                            .locale("tr")
                            .format("MMM Do YY")}
                        </span>
                      </p>
                      <p>
                        {moment(globalDataCovid.lastUpdate)
                          .locale("tr")
                          .format("LT")}
                      </p>
                    </>
                  )}
                  {!language && (
                    <>
                      <p>
                        <span>
                          {moment(globalDataCovid.lastUpdate)
                            .locale("en")
                            .format("dddd")}
                        </span>{" "}
                        <span>
                          {moment(globalDataCovid.lastUpdate)
                            .locale("en")
                            .format("MMM Do YY")}
                        </span>
                      </p>
                      <p>
                        {moment(globalDataCovid.lastUpdate)
                          .locale("en")
                          .format("LT")}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GlobalData;
