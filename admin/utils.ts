interface PositionSymbol {
  no: number;
  symbol: string;
}

const positionSymbol: PositionSymbol[] = [
  { no: 1, symbol: "GK" },
  { no: 2, symbol: "RB" },
  { no: 3, symbol: "LB" },
  { no: 4, symbol: "LCB" },
  { no: 5, symbol: "RCB" },
  { no: 6, symbol: "CDM" },
  { no: 7, symbol: "RW" },
  { no: 8, symbol: "CAM" },
  { no: 9, symbol: "ST" },
  { no: 10, symbol: "CF" },
  { no: 11, symbol: "LW" },
];

export const getPositionSymbol = (
  positionNumber: number | undefined
): string => {
  const position = positionSymbol.find((pos) => pos.no === positionNumber);
  return position ? position.symbol : "Unknown";
};
