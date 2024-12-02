import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "@/app/dashboard/components/shared/DashboardCard";
import { ApexOptions } from "apexcharts"; // Importa ApexOptions

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthlyEarnings = () => {
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;

  // Definir el tipo de las opciones como ApexOptions
  const options: ApexOptions = {
    chart: {
      type: "area", // Especificar un valor válido para el tipo de gráfico
    },
    colors: [secondary],
  };

  const series = [
    {
      name: "Ingresos",
      data: [1200, 1500, 1300, 1700, 2000, 1800, 2200],
    },
  ];

  return (
    <DashboardCard>
      <Chart options={options} series={series} type="area" height={300} />
    </DashboardCard>
  );
};

export default MonthlyEarnings;
