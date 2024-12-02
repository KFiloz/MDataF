import React from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "@/app/dashboard/components/shared/DashboardCard";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts"; // Importa ApexOptions

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview = () => {
  const [month, setMonth] = React.useState("1");
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const handleChange = (event: SelectChangeEvent<string>) => {
    setMonth(event.target.value);
  };

  const options: ApexOptions = {
    chart: {
      type: "bar", // Asegúrate de que sea un valor permitido
      toolbar: { show: true },
      height: 370,
    },
    colors: [primary],
  };

  const series = [
    {
      name: "Ventas",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <DashboardCard>
      <Select
        value={month}
        onChange={handleChange}
        displayEmpty
        fullWidth
        variant="outlined"
      >
        <MenuItem value="1">Enero</MenuItem>
        <MenuItem value="2">Febrero</MenuItem>
        <MenuItem value="3">Marzo</MenuItem>
      </Select>
      <Chart options={options} series={series} type="bar" height={370} />
    </DashboardCard>
  );
};

export default SalesOverview;
