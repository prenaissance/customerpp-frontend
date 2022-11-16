import useWindowSize from "@common/hooks/useWindowSize";
import { chartColors } from "@common/theme/utils/consts";
import { Box, SxProps } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { FC } from "react";
import { Legend, Line, LineChart, Tooltip, YAxis } from "recharts";

type DataGroup = {
  field: string | number;
  values: any[];
};

type AdvancedLineChartProps = {
  id: string;
  dataKey?: string;
  sx?: SxProps;
  request: () => Promise<DataGroup[]>;
};

const AdvancedLineChart: FC<AdvancedLineChartProps> = ({ dataKey = "y", sx = {}, request, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize(ref);
  const { data: groups } = useQuery(["advancedLineChart", id], request, {
    initialData: [],
  });
  // console.log(groups);

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
      <LineChart height={height * 0.9} width={width * 0.9}>
        <YAxis tick={{ fill: "white" }} />
        <Tooltip />
        <Legend />
        {groups.map(({ field, values }, index) => (
          <Line
            dot={false}
            name={field.toString()}
            key={field}
            type="monotone"
            data={values}
            dataKey={dataKey}
            strokeWidth={2}
            animationDuration={500}
            stroke={chartColors[index % chartColors.length]}
            connectNulls
          />
        ))}
      </LineChart>
    </Box>
  );
};

export default AdvancedLineChart;
