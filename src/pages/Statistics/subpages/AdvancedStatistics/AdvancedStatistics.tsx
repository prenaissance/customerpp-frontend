import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Chip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import AdvancedLineChart from "@common/components/AdvancedLineChart/AdvancedLineChart";
import client from "@common/utilities/client";
import FieldStatisticsDF from "@common/types/FieldStatisticsDF";
import { chartColors } from "@common/theme/utils/consts";

const columnMapping = new Map([
  ["clicks-to-covert", "clicksToConvert"],
  ["clicks-to-share", "clicksToShare"],
  ["time-to-convert", "timeToConvert"],
  ["time-to-share", "timeToShare"],
]);
const fields = ["Device", "Locale"];

const AdvancedStatistics = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [subFieldId, setSubFieldId] = useState(0);
  const { column } = useParams<{ column: string }>();
  const mappedColumn = columnMapping.get(column!) || "clicksToConvert";
  const selectedField = fields[selectedId];
  const color = useMemo(() => chartColors[(selectedId + subFieldId) % chartColors.length], [selectedId, subFieldId]);

  const { data: groups } = useQuery({
    queryKey: ["clicksToConvert", mappedColumn, selectedField],
    queryFn: () =>
      client.get<FieldStatisticsDF[]>(`/statistics/${mappedColumn}/${selectedField}`).then((res) => res.data),
    initialData: [],
  });

  const data = useMemo(() => groups[subFieldId], [groups, subFieldId]);

  return (
    <Box sx={{ m: "0 1.5rem", width: 1, display: "flex", justifyItems: "stretch", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {fields.map((field, index) => (
          <Chip
            key={field}
            label={field}
            onClick={() => {
              setSelectedId(index);
              setSubFieldId(0);
            }}
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
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {groups.map(({ field }, index) => (
          <Chip
            key={field}
            label={field}
            onClick={() => setSubFieldId(index)}
            sx={{
              mx: 1,
              my: 1,
              cursor: "pointer",
              backgroundColor: subFieldId === index ? "primary.main" : "primary.dark",
              color: subFieldId === index ? "primary.contrastText" : "primary.main",
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
          m: "1rem 1rem 2rem 1rem",
          pr: "1.5rem",
          bgcolor: "primary.main",
          borderRadius: "2rem",
          elevation: 1,
        }}
      >
        <AdvancedLineChart name={mappedColumn} data={data?.values ?? []} dataKey={(x) => x} color={color} />
      </Box>
    </Box>
  );
};

export default AdvancedStatistics;
