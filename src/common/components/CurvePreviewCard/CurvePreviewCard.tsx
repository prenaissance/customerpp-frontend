import useWindowSize from "@common/hooks/useWindowSize";
import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { FC, ReactNode } from "react";
import { Line, LineChart } from "recharts";
import HoverableCard from "../ui/HoverableCard/HoverableCard";

type CurvePreviewCardProps = {
  data?: any[];
  color?: string;
  icon?: ReactNode;
  height?: string;
  title?: string;
  aspectRatio?: number;
  dataKey?: string;
};

const CurvePreviewCard: FC<CurvePreviewCardProps> = ({
  data,
  color = "#888",
  icon,
  title = "",
  aspectRatio = 2,
  dataKey = "y",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize(ref);

  return (
    <HoverableCard>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "auto",
          width: 1,
        }}
      >
        <Typography variant="caption" fontSize="1.3em" color="primary.contrastText">
          {title}
        </Typography>
        <Box>{icon}</Box>
      </Box>
      <Box
        ref={ref}
        sx={{
          height: 1,
          width: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <LineChart
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
          </LineChart>
        </Box>
      </Box>
    </HoverableCard>
  );
};

export default CurvePreviewCard;
