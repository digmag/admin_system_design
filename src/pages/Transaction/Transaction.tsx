import { Flex, Title, Box, Group, Button, SimpleGrid } from "@mantine/core"
import { TransactionBlock } from "../../entities/transaction"
import { useGetAllTransactionsQuery } from "../../shared/lib/api/transaction"
import { useNavigate, useParams } from "react-router-dom"

 
const Transaction = () => {
    //const {isLoading, data, nav} = useTransaction();
    const {id} = useParams()
    const { data:state, isLoading} = useGetAllTransactionsQuery(id!)
    const nav = useNavigate()
    console.log(state?.entities)
    if(isLoading){
        return(<h1>Загрузка</h1>)
    }
    const data = Object.values(state?.entities || {}).slice()
    
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
            {data?.length!==0&& data !== undefined?data.map(transaction => {
                return (
                    <TransactionBlock 
                    id={transaction.id}
                    from={transaction.from}
                    to={transaction.to}
                    amount={transaction.amount}
                    key={transaction.id}
                    />
                )
            }): <h1 style={{width:"100%"}}>На данном счету еще нет транзакций</h1>}
            </SimpleGrid>
        </Flex>
    )
}

export default Transaction;