export const filterFields = <T>(fields: string[], data: Record<string, T>[]) => {
  return data.map((item) => {
    const filteredItem: Record<string, T> = {};
    fields.forEach((field) => {
      filteredItem[field] = item[field];
    });
    return filteredItem;
  });
};

export const groupBy = <T>(fieldGetter: (item: T) => string | number, data: T[]) => {
  const groups: Record<string, T[]> = {};
  data.forEach((item) => {
    const field = fieldGetter(item);
    if (!groups[field]) {
      groups[field] = [];
    }
    groups[field].push(item);
  });
  return groups;
};
