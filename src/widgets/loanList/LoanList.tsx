import { SimpleGrid } from "@mantine/core";
import { useGetAllLoansQuery } from "../../shared/lib/api/loans";
import { LoanCard } from "../../entities/loanCard";


export const LoanList = () => {
    const {data, isLoading} = useGetAllLoansQuery()
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