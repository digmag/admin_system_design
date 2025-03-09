import { Card, Group, SimpleGrid, Text, Title } from "@mantine/core"
import { Bill, Client } from "../shared/lib/api/clients"
import { Link } from "react-router-dom"

export const BillCard = ({type, amount, status, name, id}: Omit<Bill, "userId">) => {
    let billType="";
    let billStatus="";
    if(type==="NORMAL"){billType="Стандартный"}
    else if(type ==="CREDIT"){billType="Кредит"}
    else{billType="Сберегательный"}
    if(status==="OPEN"){billStatus="Открыт"}
    else if(status ==="BLOCKED"){billStatus="Заблокирован"}
    else{billStatus="Закрыт"}
    return(
        <Link to={`/bill/${id}/transactions`} style={{width:"100%", textDecoration:"none"}}>
            <Card style={{width:"100%"}} withBorder>
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