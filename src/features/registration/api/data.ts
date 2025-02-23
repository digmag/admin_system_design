export interface RegistrationFormProps{
    email: string
    password: string
    status: "EMPLOYEE"|"USER"
}

export interface RegistrationResponse{
    id: string
    email: string
    status: "EMPLOYEE"|"USER"
}