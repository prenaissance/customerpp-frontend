import AdvancedLineChart from "@common/components/AdvancedLineChart/AdvancedLineChart";
import { Box, Chip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { getClicksToConvertByDevice, getClicksToConvertByLocale } from "./services/clicksToConvert";

const fields = [
  {
    field: "Device",
    request: getClicksToConvertByDevice,
  },
  {
    field: "Locale",
    request: getClicksToConvertByLocale,
  },
];

const ClicksToConvert = () => {
  const [selectedId, setSelectedId] = useState(0);
  const selectedField = fields[selectedId];

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
        <AdvancedLineChart id={selectedField.field} request={selectedField.request} dataKey="clicksToConvert" />
      </Box>
    </Box>
  );
};

export default ClicksToConvert;
