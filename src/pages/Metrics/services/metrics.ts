import { clicksToConvertData, timeToConvertData } from "@testHelpers/fixtures/metricsData";
import { delayedRequest } from "@testHelpers/misc/requests";

export const getClicksToConvert = async () => {
  return delayedRequest(clicksToConvertData);
};

export const getTimeToConvert = async () => {
  return delayedRequest(timeToConvertData);
};

export const getClicksToShare = async () => {
  return delayedRequest(clicksToConvertData);
};

export const getTimeToShare = async () => {
  return delayedRequest(timeToConvertData);
};
