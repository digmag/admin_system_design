import { Badge, Card, Group, SimpleGrid, Text, Title } from "@mantine/core"
import { Loan, LoanResponce, useGetAllLoansQuery } from "../shared/lib/api/loans"


export const LoanCard = ({name, percent, isActual}:LoanResponce) => {
    return(
        <Card style={{width:"100%",}} withBorder>
            <Group>
                <Title>{name}</Title>
                {isActual&&<Badge color="green">Актуальный</Badge>}
            </Group>
            <Text>Процентная ставка: <strong>{percent}%</strong></Text>
        </Card>
   )
}