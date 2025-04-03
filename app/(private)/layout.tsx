import React from 'react';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/navigation/app-sidebar";
import {ThemeSwitcher} from "@/components/navigation/theme-switcher";
import {ScrollArea} from "@/components/ui/scroll-area";

const PrivateLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header
                    className="sticky top-0 z-20 bg-background justify-between dark:bg-background flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1"/>
                        {/*<Separator orientation="vertical" className="mr-2 h-4"/>*/}
                        {/*<Breadcrumb>*/}
                        {/*    <BreadcrumbList>*/}
                        {/*        <BreadcrumbItem className="hidden md:block">*/}
                        {/*            <BreadcrumbLink href="#">*/}
                        {/*                Building Your Application*/}
                        {/*            </BreadcrumbLink>*/}
                        {/*        </BreadcrumbItem>*/}
                        {/*        <BreadcrumbSeparator*/}
                        {/*            className="hidden md:block"/>*/}
                        {/*        <BreadcrumbItem>*/}
                        {/*            <BreadcrumbPage>Data*/}
                        {/*                Fetching</BreadcrumbPage>*/}
                        {/*        </BreadcrumbItem>*/}
                        {/*    </BreadcrumbList>*/}
                        {/*</Breadcrumb>*/}
                    </div>
                    <div className="px-4">
                        <ThemeSwitcher/>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div
                        className="h-full flex-1 rounded-xl bg-muted/50 overflow-auto">
                        <ScrollArea className='h-[calc(100vh-64px)]'>
                            {children}
                        </ScrollArea>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default PrivateLayout;
