import AdvancedLineChart from "@common/components/AdvancedLineChart/AdvancedLineChart";
import useWindowSize from "@common/hooks/useWindowSize";
import { colors } from "@common/theme/utils/consts";
import { Box, Chip, List } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, Legend } from "recharts";
import { getClicksToConvert } from "../services/ClicksToConvertService";

const fields = [
  {
    field: "Desktop",
    request: getClicksToConvert,
    color: colors.INDIGO,
  },
  {
    field: "Mobile",
    request: getClicksToConvert,
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
    data: { mean, values },
  } = useQuery([], request, {
    initialData: {
      values: [],
      mean: 0,
    },
  });

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
      >
        <ResponsiveContainer width={width} height={height}>
          <LineChart width={500} height={300} data={values}>
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <AdvancedLineChart data={values} name="filtered" dataKey="value" />
            <AdvancedLineChart data={values} name="notFiltered" dataKey="value" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ClicksToConvert;
