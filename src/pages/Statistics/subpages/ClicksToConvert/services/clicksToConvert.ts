import { filterFields, groupBy } from "@common/utilities/mapping";
import statisticsData from "@testHelpers/fixtures/api.json";
import { delayedRequest } from "@testHelpers/misc/requests";

const fields = ["device", "locale", "clicksToConvert"];
export type ClicksToConvertDf = {
  device: "Desktop" | "Mobile";
  locale: string;
  clicksToConvert: number;
};

export const getClicksToConvert = async () => {
  const clicksToConvertData = filterFields(fields, statisticsData);
  return delayedRequest(clicksToConvertData) as Promise<ClicksToConvertDf[]>;
};

export const getClicksToConvertByDevice = async () => {
  const clicksToConvertData = filterFields(fields, statisticsData) as ClicksToConvertDf[];

  const groupedData = groupBy((item: ClicksToConvertDf) => item.device, clicksToConvertData);
  return delayedRequest(groupedData) as Promise<Record<string, ClicksToConvertDf[]>>;
};
