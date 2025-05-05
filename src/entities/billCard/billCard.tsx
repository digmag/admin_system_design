import { Card, Group, SimpleGrid, Text, Title } from "@mantine/core"
import { Link } from "react-router-dom"
import { functionBillCard } from "../../shared/lib/js/functions"
import { Bill } from "../../shared/lib/api/clients/data";

export const BillCard = ({type, amount, status, name, id}: Omit<Bill, "userId">) => {
    const {billType, billStatus} = functionBillCard(type, status);
    return(
        <Link to={`/bill/${id}/transactions`} style={{width:"100%", textDecoration:"none"}}>
            <Card style={{width:"100%", backgroundColor: status === "BLOCKED"? "#ff000082": status === "CLOSED"?"#80808082":"transparent"}} withBorder>
                <Title>{name}</Title>
                <SimpleGrid cols={2}>
                    <Text>Тип: {billType}</Text>
                    <Text>Статус: {billStatus}</Text>
                    <Text>Баланс: {amount}₽</Text>
                </SimpleGrid>
            </Card>
        </Link>
   )
}