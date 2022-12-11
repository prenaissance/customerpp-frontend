type GroupedMetric = {
  period: string | number; // preferably string, but we got numbers too :9
  value: number;
  url: string;
  uniqueClicks: number[];
};

export default GroupedMetric;
