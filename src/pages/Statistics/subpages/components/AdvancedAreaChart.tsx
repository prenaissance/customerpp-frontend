import useWindowSize from "@common/hooks/useWindowSize";
import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { FC, ReactNode } from "react";
import { AreaChart, Line, LineChart } from "recharts";

type AdvancedAreaChartProps = {
  data: any[];
  groups: {
    name: string;
    onClick: () => any[];
  };
  color?: string;
  title?: string;
  aspectRatio?: number;
  dataKey?: string;
};

const AdvancedAreaChart: FC<AdvancedAreaChartProps> = ({
  data,
  color = "#888",
  title = "",
  aspectRatio = 2,
  dataKey = "y",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize(ref);

  return (
    <>
      <Box
        ref={ref}
        sx={{
          height: 1,
          width: 1,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <AreaChart
            data={data}
            width={Math.min(height * aspectRatio, width)}
            height={Math.min(height * aspectRatio, width) / aspectRatio}
          >
            <Line
              type="natural"
              dot={false}
              activeDot={false}
              dataKey={dataKey}
              stroke={color}
              strokeWidth={3}
              animationDuration={500}
            ></Line>
          </AreaChart>
        </Box>
      </Box>
    </>
  );
};

export default AdvancedAreaChart;
