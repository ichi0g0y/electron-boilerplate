const stringToEnum = <T extends string>(o: T[]): { [K in T]: K } => {
  return o.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = currentValue;
    return accumulator;
  }, Object.create(null));
};

export default stringToEnum;
