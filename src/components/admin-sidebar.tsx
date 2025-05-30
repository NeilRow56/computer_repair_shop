'use client'

import * as React from 'react'
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Library,
  Map,
  PartyPopperIcon,
  PieChart,
  Receipt,
  Settings2,
  User2Icon
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'

import Image from 'next/image'

import Link from 'next/link'
import { NavMain } from './nav-main'

import { NavUser } from './nav-user'

// This is sample data.
const data = {
  user: {
    name: 'library',
    email: 'admin@library.com',
    avatar: '/avatar.png'
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ],
  navMain: [
    {
      title: 'Admin',
      url: '#',
      icon: Library,
      isActive: false,
      items: [
        {
          title: 'Admin - home',
          url: '/home'
        },
        {
          title: 'Starred',
          url: '#'
        },
        {
          title: 'Settings',
          url: '#'
        }
      ]
    },
    {
      title: 'Customers',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Customers',
          url: '/customers'
        },
        {
          title: 'Team',
          url: '#'
        },
        {
          title: 'Billing',
          url: '#'
        },
        {
          title: 'Limits',
          url: '#'
        }
      ]
    },
    {
      title: 'Tickets',
      url: '#',
      icon: PartyPopperIcon,
      items: [
        {
          title: 'Tickets',
          url: '/tickets'
        },
        {
          title: 'Explorer',
          url: '#'
        },
        {
          title: 'Quantum',
          url: '#'
        }
      ]
    },
    {
      title: 'Users',
      url: '#',
      icon: User2Icon,
      items: [
        {
          title: 'User schedule',
          url: '/admin/users'
        },
        {
          title: 'Team',
          url: '#'
        },
        {
          title: 'Billing',
          url: '#'
        },
        {
          title: 'Limits',
          url: '#'
        }
      ]
    },
    {
      title: 'Fines',
      url: '#',
      icon: Receipt,
      items: [
        {
          title: 'Fines schedule',
          url: '/admin/fines'
        },
        {
          title: 'Get Started',
          url: '#'
        },
        {
          title: 'Tutorials',
          url: '#'
        },
        {
          title: 'Changelog',
          url: '#'
        }
      ]
    }
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map
    }
  ]
}

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar suppressHydrationWarning collapsible='icon' {...props}>
      <SidebarHeader className='mt-4 ml-2'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            height={22}
            width={22}
            style={{ width: 22, height: 22 }}
            unoptimized
            priority
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
