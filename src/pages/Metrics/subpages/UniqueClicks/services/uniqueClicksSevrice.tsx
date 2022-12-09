import GroupedMetric from "@common/types/GroupedMetric";
import client from "@common/utilities/client";

const getUniqueClicksPeriod = (timeframe: "day" | "week" | "month") => () => {
    const params = {
        timeframe,
    };
    return client.get<GroupedMetric[]>("/metrics/urls/top-products", { params }).then((response) => response.data);
};

export { getUniqueClicksPeriod };
