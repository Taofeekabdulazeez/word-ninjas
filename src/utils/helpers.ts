export function getFireStreakLevels(n: number = 1): string {
  return Array.from({ length: n }, () => "🔥").join("");
}
