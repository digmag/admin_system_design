import { Badge, Card, Group, SimpleGrid, Text } from "@mantine/core";
import { Transaction } from "../shared/lib/api/transaction";
import { formatAmount } from "../shared/lib/js/formatter";
import { useParams } from "react-router-dom";
import { Bill } from "../shared/lib/assets/atoms/Bill";

export const TransactionBlock = ({id: transactionId, from, amount}:Transaction) => {
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