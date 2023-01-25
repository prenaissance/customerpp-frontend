import AdvancedLineChart from "@common/components/AdvancedLineChart/AdvancedLineChart";
import useWindowSize from "@common/hooks/useWindowSize";
import { colors } from "@common/theme/utils/consts";
import { Box, Chip, List, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, Legend, ReferenceLine } from "recharts";
import { getClicksToConvert } from "../services/ClicksToConvertService";

const fields = [
  {
    field: "Desktop",
    request: () => getClicksToConvert().then((data) => data.Desktop),
    color: colors.INDIGO,
  },
  {
    field: "Mobile",
    request: () => getClicksToConvert().then((data) => data.Mobile),
    color: colors.LIGHT_BLUE,
  },
];

const ClicksToConvert = () => {
  const [selectedId, setSelectedId] = useState(0);
  const selectedField = fields[selectedId];
  const { field, request, color } = selectedField;
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize(ref);
  const {
    data: { filtered, notFiltered },
  } = useQuery([], request, {
    initialData: {
      filtered: {
        values: [],
        mean: 0,
      },
      notFiltered: {
        values: [],
        mean: 0,
      },
    },
  });
  const { mean } = filtered;
  const { mean: nonFilteredMean } = notFiltered;
  const data = new Array(100).fill(null).map((_, index) => ({
    x: index,
    filtered: filtered.values[index],
    nonFiltered: notFiltered.values[index],
  }));

  return (
    <Box sx={{ m: "0 1.5rem", width: 1, display: "flex", justifyItems: "stretch", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {fields.map(({ field }, index) => (
          <Chip
            key={field}
            label={field}
            onClick={() => setSelectedId(index)}
            sx={{
              mx: 1,
              my: 1,
              cursor: "pointer",
              backgroundColor: selectedId === index ? "primary.main" : "primary.dark",
              color: selectedId === index ? "primary.contrastText" : "primary.main",
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          width: 1,
          height: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: "1rem",
          pr: "1.5rem",
          bgcolor: "primary.main",
          borderRadius: "2rem",
          elevation: 1,
        }}
        ref={ref}
      >
        <LineChart width={width} height={height} data={data}>
          <XAxis dataKey="x" padding={{ left: 30, right: 30 }} />
          <YAxis padding={{ top: 30 }} />
          <Tooltip />
          <Legend />

          <Line
            dot={false}
            name="non-filtered"
            type="monotone"
            dataKey={"nonFiltered"}
            strokeWidth={2}
            animationDuration={500}
            stroke={colors.PASTEL_GREEN}
            connectNulls
          />
          <Line
            dot={false}
            z={1}
            width={2}
            name="filtered"
            type="monotone"
            dataKey="filtered"
            strokeWidth={3}
            animationDuration={500}
            stroke={colors.LIGHT_BLUE}
            connectNulls
          />
          <ReferenceLine y={mean} stroke={colors.LIGHT_BLUE} strokeDasharray="3 3" />
          <ReferenceLine y={nonFilteredMean} stroke={colors.PASTEL_GREEN} strokeDasharray="3 3" />
        </LineChart>
      </Box>
    </Box>
  );
};

export default ClicksToConvert;
