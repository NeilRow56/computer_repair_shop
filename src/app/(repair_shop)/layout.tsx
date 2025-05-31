import { AdminSidebar } from '@/components/admin-sidebar'
import { Header } from '@/components/header'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default async function RepairShopLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <div className='mx-auto w-full max-w-7xl items-center'>
          <Header />
        </div>
        <main className='p-4'>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
