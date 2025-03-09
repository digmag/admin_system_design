import { Badge, Card, Group, SimpleGrid, Text } from "@mantine/core";
import { Transaction } from "../shared/lib/api/transaction";
import { formatAmount } from "../shared/lib/js/formatter";
import { useParams } from "react-router-dom";

export const TransactionBlock = ({id:transactionId, from, to, amount}:Transaction) => {
    const {id} = useParams()
    return (
        <Card withBorder>
            <SimpleGrid cols={3}>
                <Group>
                    <Text>{from === null || from.id===id?"Пополнение":"Списание"}</Text>
                </Group>
                {from ? <Bill {...from} />:<div></div>}
                <Group position='right'>
                    <Badge color={from === null || from.id===id?'green': 'red'} size='xl'>{Math.abs(formatAmount(amount))}₽</Badge>
                </Group>
            </SimpleGrid>
        </Card>
    )
}

export const Bill = ({
    name,
    type,
    status,
    ...rst
}: Transaction['from']) => {
    return (
        <Card>
            <Group>
                <Text>{name} <TypeBadge type={type} /> <StatusBadge status={status}/></Text>
            </Group>
        </Card>
    )
}

export const TypeBadge = ({type}:Pick<Transaction['from'], 'type'>)=>{
    if(type === 'NORMAL')
        return <Badge color='yellow'>Основной</Badge>
    if(type === 'CREDIT')
        return <Badge color='blue'>Кредитный</Badge>
    return <Badge color='lime'>Сберегательный</Badge>
}

export const StatusBadge = ({status}:Pick<Transaction['from'], 'status'>) => {
    if(status === 'OPEN')
        return <Badge color='green'>Открыт</Badge>
    if(status === 'BLOCKED')
        return <Badge color='red'>Заблокирован</Badge>
    return <Badge color='red'>Закрыт</Badge>
}