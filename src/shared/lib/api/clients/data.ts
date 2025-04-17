export interface Client{
    id:string
    email:string
    status:"EMPLOYEE"|"USER"
    active: boolean
}

export interface Bill{
    id: string
    userId: string,
    amount: number,
    type: "NORMAL"|"CREDIT"|"SAVING",
    status: "OPEN"|"CLOSED"|"BLOCKED",
    name: string
}