import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { AnyCaaRecord } from "dns";
import { EditIcon, Trash } from "lucide-react";
import Link from "next/link";

export const OrderColumns = ({
  canEdit,
  canDelete,
  onDelete,
}: {
  canEdit: boolean;
  canDelete: boolean;
  onDelete: (id: string) => void;
}): ColumnDef<AnyCaaRecord>[] => {
  const columns: ColumnDef<AnyCaaRecord>[] = [

  ];

  if (canEdit || canDelete) {
   
  }

  return columns;
};
