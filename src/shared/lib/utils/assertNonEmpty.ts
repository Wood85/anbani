export function assertNonEmpty<T>(arr: T[], message: string): asserts arr is [T, ...T[]] {
  if (arr.length === 0) {
    throw new Error(message);
  }
}
