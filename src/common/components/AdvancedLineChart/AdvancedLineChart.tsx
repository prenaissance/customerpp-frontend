import useWindowSize from "@common/hooks/useWindowSize";
import { chartColors, colors } from "@common/theme/utils/consts";
import { Box, SxProps } from "@mui/material";
import { useRef } from "react";
import { FC } from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

type AdvancedLineChartProps = {
  name: string;
  dataKey?: string | ((...args: any[]) => any);
  sx?: SxProps;
  data: any[];
  color?: string;
};

const AdvancedLineChart: FC<AdvancedLineChartProps> = ({
  dataKey = "y",
  sx = {},
  data = [],
  name,
  color = colors.PASTEL_PURPLE,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize(ref);

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

        <Line
          dot={false}
          name={name}
          type="monotone"
          data={data}
          dataKey={dataKey}
          strokeWidth={2}
          animationDuration={500}
          stroke={color}
          connectNulls
        />
      </LineChart>
    </Box>
  );
};

export default AdvancedLineChart;
