import { Card, SimpleGrid, Text, Title } from "@mantine/core"
import { Loan, LoanResponce, useGetAllLoansQuery } from "../shared/lib/api/loans"


export const LoanCard = ({name, percent}:LoanResponce) => {
    return(
        <Card style={{width:"100%"}} withBorder>
            <Title>{name}</Title>
            <Text>Процентная ставка: <strong>{percent}%</strong></Text>
        </Card>
   )
}