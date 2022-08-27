const dateFormat = (time: number): string => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

export default dateFormat;
