import { SimpleGrid } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useGetUsersBillsQuery } from "../../shared/lib/api/clients";
import { BillCard } from "../../entities/billCard/billCard";

export const UsersBills = ({ searchQuery }:{searchQuery:string}) => {
    const { id } = useParams();
    const { data, isLoading } = useGetUsersBillsQuery(id!);

    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }

    const filteredBills = data?.filter((bill) =>
        bill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {filteredBills?.length ? (
                <SimpleGrid cols={2} spacing="md" style={{ width: "100%", marginTop: "2vh" }} verticalSpacing="xl">
                    {filteredBills.map((elem) => (
                        <BillCard
                            key={elem.id}
                            id={elem.id}
                            name={elem.name}
                            type={elem.type}
                            amount={elem.amount}
                            status={elem.status}
                        />
                    ))}
                </SimpleGrid>
            ) : (<>{searchQuery.length?<h1>У данного пользователя нет счетов с таким названием</h1>:<h1>У данного пользователя еще нет счетов</h1>}
            </>)}
        </>
    );
};
