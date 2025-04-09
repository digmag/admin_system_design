import { Flex } from "@mantine/core"
import { useGetAllClientsQuery } from "../shared/lib/api/clients"
import { UserCard } from "../entities/userCard"

const Clients = () => {
    const {data, isLoading}=useGetAllClientsQuery()
    if(isLoading){
        return <h1>Загрузка</h1>
    }
    return (
        <Flex gap="xl"
        justify="center"
        align="center"
        direction="column" style={{width:"100%"}}>
            {data?.map(elem=>{
                return(
                    <UserCard id ={elem.id} email = {elem.email} status = {elem.status} active = {elem.active} key={elem.id}/>
                )
            }
            )}
        </Flex>
    )
}

export default Clients;