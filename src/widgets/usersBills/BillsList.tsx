import { Button, TextInput, PasswordInput, Container, Flex, SimpleGrid } from "@mantine/core";
import AutorizationForm from "../../features/autorization";
import { useParams } from "react-router-dom";
import { useGetUsersBillsQuery } from "../../shared/lib/api/clients";
import { BillCard } from "../../entities/billCard";


export const UsersBills = () => {
    const {id} = useParams()
    const {data, isLoading}= useGetUsersBillsQuery(id!)
    if(isLoading){
        return <h1>Загрузка</h1>
    }
    console.log(data)
  return (
    <SimpleGrid cols={2} spacing="md" style={{width:"100%", marginTop:"2vh"}} verticalSpacing="xl">
        {data?.map(elem=>{
            return(
                <BillCard name={elem.name} type={elem.type} amount={elem.amount} status={elem.status} key={elem.id} id={elem.id}/>
            )}
        )}
    </SimpleGrid>
  );
};