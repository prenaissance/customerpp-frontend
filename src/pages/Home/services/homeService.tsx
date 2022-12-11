import GroupedMetric from "@common/types/GroupedMetric";
import client from "@common/utilities/client";

const getTopPages = (fields: "top-pages") => () => {
    const params = {
        fields,
    };
    return client.get<GroupedMetric[]>("/metrics/urls/top-pages", { params }).then((response) => response.data);
};
export { getTopPages };
