export type GigaCringeStatistics = {
  [key in "Desktop" | "Mobile"]: {
    [key in "filtered" | "notFiltered"]: {
      mean: number;
      values: number[];
    };
  };
};
