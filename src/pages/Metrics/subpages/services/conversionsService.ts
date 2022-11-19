import GroupedMetric from "@common/types/GroupedMetric";
import { delayedRequest } from "@testHelpers/misc/requests";
import conversionsDay from "@testHelpers/fixtures/conversionsDay.json";

export const getConversionsDay = async () => {
  return delayedRequest(conversionsDay) as Promise<GroupedMetric[]>;
};

export const getConversionsWeek = async () => {
  return delayedRequest([{ period: "Monday", value: 12 }]) as Promise<GroupedMetric[]>;
};

export const getConversionsMonth = async () => {
  return delayedRequest([{ period: "01.11.2022", value: 13 }]) as Promise<GroupedMetric[]>;
};
