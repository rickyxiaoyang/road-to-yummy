interface Dateable {
  date: string | Date;
}
export const byDateDescending = (a: Dateable, b: Dateable) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
};
