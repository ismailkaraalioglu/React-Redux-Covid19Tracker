import React from "react";
import ChartTable from "./ChartTable";
import Dropdown from "./Dropdown";
import GlobalData from "./GlobalData";

function Main() {
  return (
    <main className="dark:bg-gray-900">
      <GlobalData />
      <Dropdown />
      <ChartTable />
    </main>
  );
}

export default Main;
