import { colors } from "@common/theme/utils/consts";
import { Box, Chip, List } from "@mui/material";
import { useState } from "react";
import { getUniqueClicks } from "./services/uniqueClicksService";
import UrlsList from "./services/UrlsList";

const fields = [
  {
    field: "Top products",
    request: getUniqueClicks("top-products"),
    color: colors.INDIGO,
  },
];

const UniqueClicks = () => {
  const [selectedId, setSelectedId] = useState(0);
  const selectedField = fields[selectedId];
  const { field, request, color } = selectedField;

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
        <UrlsList id={field} request={request} />
      </Box>
    </Box>
  );
};

export default UniqueClicks;
