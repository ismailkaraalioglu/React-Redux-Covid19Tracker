import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

function ChartTable() {
  const countryData = useSelector((state) => state.countryData.countryData);
  const language = useSelector((state) => state.site.language);

  return (
    <div className="text-center mt-7 w-[800px] mx-auto">
      <h1 className="text-xl font-semibold text-gray-600 dark:text-white">
        {language ? "Seçilen Ülke Sonuçları" : "Selected Country Results"}
      </h1>
      {countryData && (
        <Bar
          data={{
            labels: language
              ? ["Enfekte", "Ölüm", "Aktif"]
              : ["Infected", "Deaths", "Active"],
            datasets: [
              {
                label: language ? "İnsan" : "People",
                backgroundColor: [
                  "rgb(191 219 254)",
                  "rgb(254 202 202)",
                  "rgb(254 240 138)",
                ],
                hoverBackgroundColor: [
                  "rgb(191 219 254)",
                  "rgb(254 202 202)",
                  "rgb(254 240 138)",
                ],
                data: [
                  countryData.confirmed.value,
                  countryData.deaths.value,
                  countryData.confirmed.value - countryData.deaths.value,
                ],
              },
            ],
          }}
          className="w-full h-full mt-3"
        />
      )}
    </div>
  );
}

export default ChartTable;
