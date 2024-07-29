export class ListUserShiftsDTO {
  constructor(
    private id: string,
    private clockIn: string,
    private clockOut: string,
    private date: string,
    private totalHours: string,
    private created_at: Date,
  ) {}
}
