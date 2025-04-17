export interface CreateLoanModalProps {
  opened: boolean;
  onClose: () => void;
}

export interface Loan{
  loanName: string
  percent: number
}

export interface LoanResponce{
  id:string
  name: string
  percent: number
  isActual: boolean
}