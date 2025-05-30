import { AdminSidebar } from '@/components/admin-sidebar'
import { Header } from '@/components/header'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default async function RepairShopLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // <div className='mx-auto w-full max-w-7xl'>
    //   <Header />
    //   <div className='px-4 py-2'>{children}</div>
    // </div>
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        {/* <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
          <SidebarTrigger className='-ml-1' />
          <Separator orientation='vertical' className='mr-2 h-4' />
          <Breadcrumb className='text-primary hidden text-xl md:block'>
            Your local library online!
          </Breadcrumb>
        </header> */}
        <div className='mx-auto w-full max-w-7xl items-center'>
          <Header />
        </div>
        <main className='p-4'>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
