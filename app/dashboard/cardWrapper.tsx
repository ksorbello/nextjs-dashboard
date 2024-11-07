import { fetchCardData } from "../lib/data";
import { Card } from "../ui/dashboard/cards";

export async function CardWrapper() {
    const {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices,
        } = await fetchCardData() 
        
        return(
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
        />
        </div>
        )
}