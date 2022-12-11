import GroupedMetric from "@common/types/GroupedMetric";
import client from "@common/utilities/client";

const getUniqueClicks = (fields: "top-products" | "top-pages") => () => {
    const params = {
        fields,
    };
    return client.get<GroupedMetric[]>("/metrics/urls/top-products", { params }).then((response) => response.data);
};
export { getUniqueClicks };
