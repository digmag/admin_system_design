import { Flex, Title, Box, Text, Group, Button } from "@mantine/core"
import { useBlockUserMutation, useGetUserQuery, useGetUsersBillsQuery } from "../shared/lib/api/clients"
import { useParams } from "react-router-dom"
import { UsersBills } from "../widgets/usersBills/BillsList"
import { toast } from "react-toastify"

export const UserPage = () => {
    const {id}=useParams()
    const {data, isLoading}=useGetUserQuery(id!)
    const [trigger] = useBlockUserMutation();
    if(isLoading){
        return <h1>Загрузка</h1>
    }
    const onClick = ()=>{
        trigger(id!).unwrap().then(()=>{
            toast.success("Успешно заблокирован пользователь")
        }).catch(error=>{
            toast.error("Ошибка в блокировке пользователя")
        }
        )
    }
    return (
        <Flex gap="xl"
        justify="flex-start"
        align="center"
        direction="column" 
        style={{width:"100%"}}>
            <Box style={{width:"80%"}}>
                <Group style={{justifyContent:"space-between"}}>
                    <Title> Пользователь: {data?.email}</Title>
                    {data?.active&&
                        <Button color="red" onClick={onClick}>Заблокировать</Button>
                    }
                </Group>
                {!data?.active&&
                    <Text fz="xl">Статус: Заблокирован</Text>
                }
                <Title>Счета: </Title>
                <UsersBills/>
            </Box>
        </Flex>
    )
}