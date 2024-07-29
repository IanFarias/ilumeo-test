export type Shift = {
  id: string;
  clockIn: Date;
  clockOut: Date;
  isFinished: true;
};

export type ActiveShift = {
  id: string;
  clockIn: Date;
};
