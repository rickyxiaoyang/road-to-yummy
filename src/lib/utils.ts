interface Dateable {
  date: string | Date;
}
export const byDateDescending = (a: Dateable, b: Dateable) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
};

export function toFraction(decimal: number) {
  if (decimal == 0.25) {
    return "1/4";
  } else if (decimal == 0.5) {
    return "1/2";
  } else if (decimal == 0.75) {
    return "3/4";
  } else if (decimal == 0.33) {
    return "1/3";
  } else if (decimal == 0.66) {
    return "2/3";
  } else {
    return decimal;
  }
}
