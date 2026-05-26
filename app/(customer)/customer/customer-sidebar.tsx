"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon } from "lucide-react"

const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: (
                <LayoutDashboardIcon
                />
            ),
        },
        {
            title: "Lifecycle",
            url: "#",
            icon: (
                <ListIcon
                />
            ),
        },
        {
            title: "Analytics",
            url: "#",
            icon: (
                <ChartBarIcon
                />
            ),
        },
        {
            title: "Projects",
            url: "#",
            icon: (
                <FolderIcon
                />
            ),
        },
        {
            title: "Team",
            url: "#",
            icon: (
                <UsersIcon
                />
            ),
        },
    ],
}

export function CustomerSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <SidebarProvider
        >
            <Sidebar collapsible="offcanvas" {...props} className="!relative">
                <SidebarContent>
                    <NavMain items={data.navMain} />
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    )
}
