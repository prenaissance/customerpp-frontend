import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode, useRef } from "react"
import HoverableCard from "../ui/HoverableCard/HoverableCard";
import { RadialBarChart, RadialBar } from "recharts";
import useWindowSize from "@common/hooks/useWindowSize";

type HalfPieChartPreviewProps = {
    icon?: ReactNode;
    title?: string;
    data?: Record<string, number>[];
    description?: string;
}

const HalfPieChartPreviewCard: FC<HalfPieChartPreviewProps> = ({ icon, title = "", data, description = "" }) => {
    const data01 = [
        {
            name: 'A',
            x: 100,
            fill: '#A3F7BF',
        },
        {
            name: 'B',
            x: 36.69,
            fill: '#FEF9A7',
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
                <Box ref={ref}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        height: "auto",
                        width: 1,
                        margin: 2
                    }}
                >
                    <Typography variant="caption" fontSize="1.3em" color="primary.contrastText" sx={{ justifyContent: "start" }}>
                        {title}
                    </Typography>
                </Box>


                <Box ref={ref}>
                    <RadialBarChart
                        width={150}
                        height={150}
                        data={data01}
                        innerRadius="30%"
                        outerRadius="100%"
                        startAngle={180}
                        endAngle={0}
                    >
                        <RadialBar dataKey="x" />
                    </RadialBarChart>
                </Box>
            </HoverableCard >
        </Tooltip>
    );
}

export default HalfPieChartPreviewCard;




