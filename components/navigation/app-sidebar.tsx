"use client"

import * as React from "react"
import {
    AudioWaveform,
    AwardIcon,
    BoxesIcon,
    BoxIcon,
    BriefcaseBusinessIcon,
    BrushIcon,
    CloudDownloadIcon,
    Command,
    FlameIcon,
    GalleryVerticalEnd,
    GlassesIcon, HomeIcon,
    ImageIcon,
    PaintbrushIcon,
    SparklesIcon,
    ThumbsUpIcon,
    UserRoundIcon,
    UsersRoundIcon,
    ZapIcon,
} from "lucide-react"

import {NavMain} from "@/components/navigation/nav-main"
import {NavUser} from "@/components/navigation/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import logo from "@/assets/makegrid-logo.png";
// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: HomeIcon,
            isActive: true,
        },
        {
            title: "Workspace",
            icon: BriefcaseBusinessIcon,
            isActive: false,
            items: [
                {
                    title: "Text to 3D",
                    icon: BoxesIcon,
                    url: "/workspace",
                },
                {
                    title: "Image to 3D",
                    icon: ImageIcon,
                    url: "/workspace",
                },
                {
                    title: "AI Texturing",
                    icon: PaintbrushIcon,
                    url: "/workspace",
                },
            ],
        },
        {
            title: "Community",
            icon: UsersRoundIcon,
            items: [
                {
                    title: "Trending",
                    icon: FlameIcon,
                    url: "/community/trending",
                },
                {
                    title: "Following",
                    icon: UserRoundIcon,
                    url: "/community/following",
                },
                {
                    title: "Featured",
                    icon: AwardIcon,
                    url: "/community/featured",
                },
                {
                    title: "New",
                    icon: ZapIcon,
                    url: "/community/new",
                },
                {
                    title: "Most downloads",
                    icon: CloudDownloadIcon,
                    url: "/community/most-downloads",
                },
                {
                    title: "Top",
                    icon: ThumbsUpIcon,
                    url: "/community/top",
                },
                {
                    title: "Popular Creators",
                    icon: GlassesIcon,
                    url: "/community/popular-creators",
                },
            ],
        },
        {
            title: "My Assets",
            icon: SparklesIcon,
            items: [
                {
                    title: "Models",
                    icon: BoxIcon,
                    url: "/my-assets",
                },
                {
                    title: "Textures",
                    icon: BrushIcon,
                    url: "/my-assets",
                },
            ],
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <div className="flex gap-2 flex-col items-center justify-center">
                    <img className="w-full max-w-24"  src={logo.src} alt="logo"/>
                    {/*<h1 className="text-xl uppercase font-semibold">Makegrid</h1>*/}
                </div>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                {/*<NavProjects projects={data.projects} />*/}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
