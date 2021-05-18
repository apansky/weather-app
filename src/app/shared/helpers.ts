export const getUniqueListBy = (arr: any[], key: string) => [...new Map(arr.map((item: any) => [item[key], item])).values()];