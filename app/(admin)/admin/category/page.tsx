import { Button } from "@/components/ui/button";

import Link from "next/link";
import { redirect } from "next/navigation";
import EmployeeProfileDataTable from "./order-data-table";

const EmployeeProfilePage = async () => {
  const route = "/employee-profiles";
  const permissions = {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: true,
  };

  if (!permissions.canView) {
    redirect("/404");
  }

  const records : any = []

  return (
    <EmployeeProfileDataTable
      data={records}
      canEdit={permissions.canEdit}
      canDelete={permissions.canDelete}
      title="Order"
    />
  );
};

export default EmployeeProfilePage;
