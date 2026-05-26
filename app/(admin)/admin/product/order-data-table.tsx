"use client";

import * as React from "react";
import { toast } from "sonner";
import { DataTable } from "@/components/data-table";
import { OrderColumns } from "./column";

export default function EmployeeProfileDataTable({
  data,
  canEdit,
  canDelete,
  title,
  actions,
}: {
  data: any[];
  canEdit: boolean;
  canDelete: boolean;
  title: string;
  actions?: React.ReactNode;
}) {
  const [tableData, setTableData] = React.useState<any[]>(data);

  const deleteHandler = async (id: string) => {
    
  };

  const columns : any = OrderColumns({
    canEdit,
    canDelete,
    onDelete: deleteHandler,
  });

  return (
    <DataTable
      data={tableData}
      columns={columns}
      title={title}
      actions={actions}
    />
  );
}
