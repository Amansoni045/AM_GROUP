import { getContactQueries } from "@/app/actions/contact";
import QueriesPanel from "@/components/admin/QueriesPanel";

export default async function AdminQueriesPage() {
  const queries = await getContactQueries();
  return <QueriesPanel queries={queries} />;
}
