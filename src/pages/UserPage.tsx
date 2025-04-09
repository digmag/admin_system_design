import { Flex, Title, Box, Text, Group, Button } from "@mantine/core"
import { useBlockUserMutation, useGetUserQuery, useGetUsersBillsQuery } from "../shared/lib/api/clients"
import { useNavigate, useParams } from "react-router-dom"
import { UsersBills } from "../widgets/usersBills/BillsList"
import { toast } from "react-toastify"

<<<<<<< Updated upstream
export const UserPage = () => {
    const {id}=useParams()
    const nav = useNavigate()
    const {data, isLoading}=useGetUserQuery(id!)
=======
const UserPage = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const { data, isLoading } = useGetUserQuery(id!);
>>>>>>> Stashed changes
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
                    <Group>
                        {data?.active&&
                            <Button color="red" onClick={onClick}>Заблокировать</Button>
                        }
                        <Button color="indigo" onClick={()=>nav(-1)}>Назад</Button>
                    </Group>
                </Group>
                {!data?.active&&
                    <Text fz="xl">Статус: Заблокирован</Text>
                }
                <UsersBills/>
            </Box>
        </Flex>
<<<<<<< Updated upstream
    )
}
=======
    );
};

export default UserPage;
>>>>>>> Stashed changes
