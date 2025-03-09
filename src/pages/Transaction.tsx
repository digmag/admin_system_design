import { Flex, Title, Box, Text, Group, Button } from "@mantine/core"
import { useBlockUserMutation, useGetUserQuery, useGetUsersBillsQuery } from "../shared/lib/api/clients"
import { useParams } from "react-router-dom"
import { UsersBills } from "../widgets/usersBills/BillsList"
import { toast } from "react-toastify"
import { useGetAllTransactionsQuery } from "../shared/lib/api/transaction"

export const Transaction = () => {
    const {id}=useParams()
    const {data, isLoading} = useGetAllTransactionsQuery(id!);
    if(isLoading){
        return(<h1>Загрузка</h1>)
    }
    console.log(data)
    return (
        <Flex gap="xl"
        justify="flex-start"
        align="center"
        direction="column" 
        style={{width:"100%"}}>
            <Box style={{width:"80%"}}>
                <Group style={{justifyContent:"space-between"}}>
                    <Title> Список транзакций счета</Title>
                </Group>
            </Box>
        </Flex>
    )
}