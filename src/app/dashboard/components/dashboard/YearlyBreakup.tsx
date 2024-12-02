import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "@/app/dashboard/components/shared/DashboardCard";
import { ApexOptions } from "apexcharts"; // Importar ApexOptions

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const YearlyBreakup = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  // Definir el tipo de las opciones como ApexOptions
  const options: ApexOptions = {
    chart: {
      type: "donut", // Especificar un valor válido para el tipo de gráfico
    },
    colors: [primary, "#FF4560", "#00E396"],
  };

  const series = [44, 55, 41]; // Datos de ejemplo para el gráfico

  return (
    <DashboardCard>
      <Chart options={options} series={series} type="donut" height={300} />
    </DashboardCard>
  );
};

export default YearlyBreakup;
