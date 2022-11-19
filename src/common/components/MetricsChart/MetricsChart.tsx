import useWindowSize from "@common/hooks/useWindowSize";
import { chartColors } from "@common/theme/utils/consts";
import GroupedMetric from "@common/types/GroupedMetric";
import { Box, SxProps } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { FC } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

type MetricsChartProps = {
  id: string;
  name?: string;
  dataKey?: string;
  nameKey?: string;
  sx?: SxProps;
  unit?: string;
  request: () => Promise<GroupedMetric[]>;
  nameFormatter?: (name: any) => string;
  color?: string;
};

const MetricsChart: FC<MetricsChartProps> = ({
  dataKey = "y",
  nameKey,
  sx = {},
  request,
  id,
  nameFormatter,
  unit,
  name,
  color,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize(ref);
  const { data } = useQuery(["advancedLineChart", id], request, {
    initialData: [],
  });

  return (
    <Box
      ref={ref}
      sx={{
        height: 1,
        width: 1,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      <BarChart height={height * 0.9} width={width * 0.9} data={data}>
        <YAxis tick={{ fill: "white" }} />
        <XAxis dataKey={nameKey} tick={{ fill: "white" }} tickFormatter={nameFormatter} />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} unit={unit} name={name} fill={color} />
      </BarChart>
    </Box>
  );
};

export default MetricsChart;
