export type StatItem = {
  value: string;
  label: string;
  numeric?: number;
  prefix?: string;
  suffix?: string;
};

export const heroStats: StatItem[] = [
  { value: "$100M+", label: "Revenue Generated" },
  { value: "5M+", label: "Sessions Driven" },
  { value: "$419K+", label: "Ad Revenue Scaled" },
];

export const agencyStats: StatItem[] = [
  { value: "2019", label: "Founded", numeric: 2019 },
  { value: "27+", label: "Countries Reached", numeric: 27, suffix: "+" },
  { value: "190+", label: "Brands Scaled", numeric: 190, suffix: "+" },
  { value: "$1M", label: "Ad Spend Managed", numeric: 1, prefix: "$", suffix: "M" },
];
