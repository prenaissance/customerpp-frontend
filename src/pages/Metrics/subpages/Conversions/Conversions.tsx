import MetricsChart from "@common/components/MetricsChart/MetricsChart";
import { colors } from "@common/theme/utils/consts";
import { dayOfWeekFormatter } from "@common/utilities/formatters";
import { Box, Chip } from "@mui/material";
import { useState } from "react";
import { getConversionsDay, getConversionsMonth, getConversionsWeek } from "./services/conversionsService";

const fields = [
  {
    field: "Last day",
    request: getConversionsDay,
    color: colors.INDIGO,
  },
  {
    field: "Last week",
    request: getConversionsWeek,
    color: colors.PASTEL_GREEN,
    nameFormatter: dayOfWeekFormatter,
  },
  {
    field: "Last month",
    request: getConversionsMonth,
    color: colors.LIGHT_BLUE,
  },
];

const Conversions = () => {
  const [selectedId, setSelectedId] = useState(0);
  const selectedField = fields[selectedId];
  const { field, request, color, nameFormatter } = selectedField;

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
        <MetricsChart
          id={field}
          name="Conversions"
          request={request}
          dataKey="value"
          nameKey="period"
          nameFormatter={nameFormatter}
          color={color}
        />
      </Box>
    </Box>
  );
};

export default Conversions;
