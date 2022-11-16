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
  const groups = new Map<string | number, T[]>();
  data.forEach((item) => {
    const field = fieldGetter(item);
    const group = groups.get(field);
    if (!group) {
      groups.set(field, [item]);
    } else {
      group.push(item);
    }
  });

  return groups;
};
