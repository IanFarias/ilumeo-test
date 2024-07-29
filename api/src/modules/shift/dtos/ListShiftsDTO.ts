export class ListShiftsDTO {
  constructor(
    private id: string,
    private clockIn: string,
    private clockOut: string | null,
    private date: string,
    private totalHours: string | null,
  ) {}
}
