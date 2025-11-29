export const capitalizeName = (name: string) => {
  const capital = name[0].toUpperCase();
  const result = capital + name.slice(1).toLowerCase();
  return result;
};

export const removeNonNumeric = (value: string): string => {
  return value.replace(/\D/g, "");
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  return phoneNumber
    .replace(/^(\d{2})(\d{3})(\d{2})(\d{2}).*$/, "$1 $2 $3 $4")
    .trim();
};

export const formatSubscribers = (count: bigint) => {
  const n = Number(count);
  if (n >= 1_000_000) {
    return `${(n / 1_000_000).toFixed(1)}M`;
  } else if (n >= 1_000) {
    return `${(n / 1_000).toFixed(1)}K`;
  }
  return n.toString();
};

export const formatAmountToStr = (
  v: bigint | undefined,
  separator = " ",
): string =>
  v ? v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : "";
