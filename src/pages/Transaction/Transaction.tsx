import { Flex, Title, Box, Group, Button, SimpleGrid } from "@mantine/core"
import { TransactionBlock } from "../../entities/transaction"
import { useTransaction } from "./hooks"

 
const Transaction = () => {
    const {data: state, isLoading, nav} = useTransaction()
    if(isLoading){
        return(<h1>Загрузка</h1>)
    }
    return (
        <Flex gap="xl"
        justify="flex-start"
        align="center"
        direction="column" 
        style={{width:"100%"}}>
            <Box style={{width:"80%"}}>
                <Group style={{justifyContent:"space-between"}}>
                    <Title> Список транзакций счета</Title>
                    <Button color="indigo" onClick={()=>nav(-1)}>Назад</Button>
                </Group>
            </Box>
            <SimpleGrid cols={1} style={{width:'70%'}}>
            {Object.values(state?.entities || {}).slice().map(transaction => {
                return (
                    <TransactionBlock 
                    id={transaction.id}
                    from={transaction.from}
                    to={transaction.to}
                    amount={transaction.amount}
                    key={transaction.id}
                    />
                )
            })}
            </SimpleGrid>
        </Flex>
    )
}

export default Transaction;