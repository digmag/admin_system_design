import { Button, TextInput, PasswordInput, Container, Flex, SimpleGrid } from "@mantine/core";
import AutorizationForm from "../../features/autorization";
import { useParams } from "react-router-dom";
import { useGetUsersBillsQuery } from "../../shared/lib/api/clients";
import { BillCard } from "../../entities/billCard";
import { useGetAllLoansQuery } from "../../shared/lib/api/loans";
import { LoanCard } from "../../entities/loanCard";


export const LoanList = () => {
    const {data, isLoading} = useGetAllLoansQuery()
    console.log(data)
    if(isLoading){
        return <h1>Загрузка</h1>
    }
    return (
        <SimpleGrid cols={4} spacing="md" style={{width:"100%", marginTop:"2vh"}} verticalSpacing="xl">
            {data?.map(elem=>{
                return(
                    <LoanCard percent={elem.percent} name={elem.name} key={elem.id} id={elem.id} isActual={elem.isActual}/>
                )
            }
            )}
        </SimpleGrid>
  );
};