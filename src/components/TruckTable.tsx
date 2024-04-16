import { MRT_ColumnDef, useMantineReactTable, MantineReactTable, MRT_RowSelectionState } from "mantine-react-table";
import { useEffect, useMemo, useState } from "react";
import { Customer, Drone, DroneProps, Truck } from "../interface";
import truck from "../json/truck.json"

import { RowSelection } from "@tanstack/table-core";

function TruckTable() {
  const columns = useMemo<MRT_ColumnDef<Truck>[]>(
    () => [
      {
        accessorKey: "Id", 
        header: "Id xe vận chuyển",
      },
      {
        accessorKey: "Type",
        header: "Mẫu xe vận chuyển",
      },
      {
        accessorKey: "Stat", 
        header: "Thông số xe",
      },
      {
        accessorKey: "Condition",
        header: "Tình trạng",
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    enableTopToolbar: false,
    columns:columns,
    data: truck,
    getRowId: (row) => row.Id,
    enablePagination: false,
    mantineTableProps: {
      withBorder: true,
      withColumnBorders: true,
      striped: true,
    }
  });
  return <MantineReactTable table = {table}></MantineReactTable>
};

export default TruckTable;