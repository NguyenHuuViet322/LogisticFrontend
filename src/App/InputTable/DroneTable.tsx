import {
    MRT_ColumnDef,
    useMantineReactTable,
    MantineReactTable,
    MRT_RowSelectionState,
} from "mantine-react-table";
import { useEffect, useMemo, useState } from "react";
import { Customer, Drone, DroneProps } from "../../interface";
import drone from "../../json/drone.json";
import { RowSelection } from "@tanstack/table-core";

function DroneTable({ onDroneChange }: DroneProps) {
    const [droneList, setDrone] = useState<string[]>([]);
    const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

    const handleChange = () => {
        console.log(table.getState().rowSelection);
    };

    const columns = useMemo<MRT_ColumnDef<Drone>[]>(
        () => [
            {
                accessorKey: "Id",
                header: "Id drone",
            },
            {
                accessorKey: "Type",
                header: "Mẫu drone",
            },
            {
                accessorKey: "Battery",
                header: "Dung tích pin",
            },
            {
                accessorKey: "Condition",
                header: "Tình trạng",
            },
        ],
        []
    );

    useEffect(() => {
        setDrone(Object.keys(rowSelection));
        onDroneChange(Object.keys(rowSelection));
    }, [rowSelection]);

    const table = useMantineReactTable({
        enableTopToolbar: false,
        enableRowSelection: true,
        columns: columns,
        data: drone,
        getRowId: (row) => row.Id,
        onRowSelectionChange: setRowSelection,
        state: { rowSelection },
        enablePagination: false,
        mantineTableProps: {
            striped: true,
            withBorder: true,
            withColumnBorders: true,
        },
        initialState: {
            density: "xs",
        },
    });
    return <MantineReactTable table={table}></MantineReactTable>;
}

export default DroneTable;
