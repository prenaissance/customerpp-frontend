import useWindowSize from "@common/hooks/useWindowSize";
import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode, useRef } from "react"
import HoverableCard from "../ui/HoverableCard/HoverableCard";

type StatisticsPreviewProps = {
    icon: ReactNode;
    title: string;
    data: any[];
    description?: string;
}

const StatisticsPreviewCard: FC<StatisticsPreviewProps> = ({ icon, title = "", data, description = "" }) => {
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
                        // alignItems: "center",
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
                <Box ref={ref} sx={{ mt: "1.8rem" }}>
                    {icon}
                </Box>
            </HoverableCard>
        </Tooltip>

    )
};

export default StatisticsPreviewCard;