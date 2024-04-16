import {
    MRT_ColumnDef,
    useMantineReactTable,
    MantineReactTable,
    MRT_RowSelectionState,
} from "mantine-react-table";
import { useEffect, useMemo, useState } from "react";
import { Customer, CustomerProps } from "../../interface";
import customer from "../../json/dataCoor.json";
import { RowSelection } from "@tanstack/table-core";

function CustomerTable({ onCustomerChange }: CustomerProps) {
    const [customerList, setCustomer] = useState<string[]>([]);
    const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

    const columns = useMemo<MRT_ColumnDef<Customer>[]>(
        () => [
            {
                accessorKey: "Id",
                header: "Id khách hàng",
            },
            {
                accessorKey: "Name",
                header: "Tên khách hàng",
            },
            {
                accessorKey: "x",
                header: "Kinh độ",
            },
            {
                accessorKey: "y",
                header: "Vĩ độ",
            },
            {
                accessorKey: "Location",
                header: "Vị trí",
            },
            {
                accessorKey: "Distance",
                header: "Khoảng cách",
            },
        ],
        []
    );

    useEffect(() => {
        setCustomer(Object.keys(rowSelection));
        onCustomerChange(Object.keys(rowSelection));
    }, [rowSelection]);

    const table = useMantineReactTable({
        enableTopToolbar: false,
        enableRowSelection: true,
        columns: columns,
        data: customer,
        getRowId: (row) => row.Id,
        onRowSelectionChange: setRowSelection,
        state: { rowSelection },
        enablePagination: false,
        mantineTableProps: {
            striped: true,
            sx: {
                backgroundColor: "#f2f4f7",
            },
            withBorder: true,
            withColumnBorders: true,
        },
        initialState: {
            density: "xs",
        },
    });
    return <MantineReactTable table={table}></MantineReactTable>;
}

export default CustomerTable;
