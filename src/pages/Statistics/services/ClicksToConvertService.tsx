import GroupedMetric from "@common/types/GroupedMetric";
import client from "@common/utilities/client";

const getClicksToConvert = () => () => {

    return client.get<GroupedMetric[]>("/statistics/clicks/convert/device/thismonth").then((response) => response.data);
};
export { getClicksToConvert };
