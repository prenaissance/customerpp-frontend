import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode, useRef } from "react"
import HoverableCard from "../ui/HoverableCard/HoverableCard";
import { RadialBarChart, RadialBar } from "recharts";
import useWindowSize from "@common/hooks/useWindowSize";

type PieChartPreviewProps = {
    icon?: ReactNode;
    title?: string;
    data?: Record<string, number>[];
    description?: string;
}

const PieChartPreviewCard: FC<PieChartPreviewProps> = ({ icon, title = "", data, description = "" }) => {
    const data01 = [
        {
            name: 'A',
            x: 100,
            fill: '#8784d8',
        },
        {
            name: 'B',
            x: 76.69,
            fill: '#84a6ed',
        },

    ];
    const ref = useRef<HTMLDivElement>(null);
    const { width, height } = useWindowSize(ref);

    return (
        <Tooltip title={description} followCursor
            componentsProps={{
                tooltip: {
                    sx: {
                        fontSize: 20,
                        bgcolor: 'transparent',
                        border: '2px solid #dadde9'
                    },
                },
            }}>
            <HoverableCard>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        height: "auto",
                        width: 1,
                        margin: 2,
                    }}
                >
                    <Typography variant="caption" fontSize="1.3em" color="primary.contrastText" sx={{ justifyContent: "start" }}>
                        {title}
                    </Typography>
                </Box>

                <Box
                    ref={ref}
                    sx={{
                        height: "auto",
                        width: "auto",
                        display: "flex",
                        justifyContent: "right-buttom",
                        alignItems: "center",
                    }}
                >
                </Box>
                <Box ref={ref}
                // sx={{ ml: "18rem", mt: "5rem" }}>
                >
                    <RadialBarChart width={150} height={150} data={data01} innerRadius="30%" outerRadius="100%">
                        <RadialBar startAngle={0} dataKey="x" />
                    </RadialBarChart>
                </Box>
            </HoverableCard >
        </Tooltip>
    );
}

export default PieChartPreviewCard;




