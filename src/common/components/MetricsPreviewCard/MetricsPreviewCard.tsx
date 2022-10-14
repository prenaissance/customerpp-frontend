import { Box, Paper, Theme, Typography } from "@mui/material";
import { useCallback, useEffect, useRef } from "react";
import { FC, ReactNode, useState } from "react";
import HoverableCard from "../ui/HoverableCard/HoverableCard";

type MetricsPreviewProps = {
  data: Record<string, number>[];
  color?: string;
  icon?: ReactNode;
  height?: string;
  title?: string;
  aspectRatio?: number;
};

const MetricsPreviewCard: FC<MetricsPreviewProps> = ({ data, color = "#888", icon, title = "", aspectRatio = 2 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = useCallback(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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
        <Box></Box>
      </Box>
    </HoverableCard>
  );
};

export default MetricsPreviewCard;
