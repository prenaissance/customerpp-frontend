import useWindowSize from "@common/hooks/useWindowSize";
import GroupedMetric from "@common/types/GroupedMetric";
import { Box, SxProps, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { FC } from "react";

type TopPagesProps = {
  id: string;
  sx?: SxProps;
  request: () => Promise<GroupedMetric[]>;
};

const TopPages: FC<TopPagesProps> = ({ sx = {}, request, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize(ref);
  const { data } = useQuery([id], request, {
    initialData: [],
  });

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "left",
        alignContent: "center",
        alignItems: "center",
        padding: "1rem",
        textColor: "white",
        ...sx,
      }}
    >
      <TableContainer sx={{ bgcolor: "transparent", borderColor: "none", maxHeight: "70vh" }}>
        <Table sx={{ overflowY: "auto", maxHeight: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white", width: "fit" }}>URL</TableCell>
              <TableCell sx={{ color: "white" }}>Unique Clicks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ border: "none" }}>
            {data.map((data) => (
              <TableRow key={data.url}>
                <TableCell sx={{ color: "white" }}>{data.url}</TableCell>
                <TableCell sx={{ color: "white" }}>{data.uniqueClicks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopPages;
