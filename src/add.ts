export const sum: SumType<number> = (a, b) => {
  return a + b;
};

export type SumType<T> = (a: T, b: T) => T;

sum(2, 4);
