import React from "react";
import { useOutletContext } from "react-router-dom";
import { Box } from "@mui/material";
import Profit from "../components/Profit/Profit";
import Ratio from "../components/Ratio/Ratio";
import CashFlow from "../components/CashFlow/CashFlow";
import SimpleLineChart from "../components/SimpleLineChart/SimpleLineChart";

interface DashboardContext {
  setHeaderText: (text: string) => void;
}

function Finance() {
  const { setHeaderText } = useOutletContext<DashboardContext>();

  React.useEffect(() => {
    setHeaderText("صفحه مالی");
  }, [setHeaderText]);

  return (
    <Box>
      <Profit  /> 
      <Ratio />
      <CashFlow />
      <SimpleLineChart />
    </Box>
  );
}

export default Finance;
