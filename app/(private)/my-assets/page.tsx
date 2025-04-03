import React from 'react';
import PageHeader from "@/components/page-header/page-header";
import {Input} from "@/components/ui/input";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {
    BoxIcon, CalendarArrowDown, CalendarArrowUpIcon, FilterIcon,
    FolderIcon,
    Grid2X2Icon,
    GripIcon,
    PaintbrushIcon, PlayIcon
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import image1 from "@/assets/models/model-1-b.jpg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const MyAssetsPage = () => {
    return (
        <>
            <PageHeader title="My Assets"/>
            <ScrollArea className="h-[calc(100vh-140px)]">
            <div className="px-4 pt-4 pb-2">
                <Input type='search' placeholder='Search'/>
            </div>
            <div className="flex flex-wrap justify-between px-4 py-2">
                <div className="flex gap-2">
                    <ToggleGroup type="single">
                        <ToggleGroupItem value="folder"
                                         aria-label="Toggle bold">
                            <FolderIcon/>
                        </ToggleGroupItem>
                        <ToggleGroupItem value="italic"
                                         aria-label="Toggle italic">
                            <Grid2X2Icon/>
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <ToggleGroup type="single">
                        <ToggleGroupItem title="All" value="all"
                                         aria-label="Toggle bold">
                            <GripIcon/>
                        </ToggleGroupItem>
                        <ToggleGroupItem title="Models" value="models"
                                         aria-label="Toggle italic">
                            <BoxIcon/>
                        </ToggleGroupItem>
                        <ToggleGroupItem title="Texture" value="texture"
                                         aria-label="Toggle italic">
                            <PaintbrushIcon/>
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
                <div className="flex">
                    <FiltersMenu/>
                </div>
            </div>
            <div className="flex flex-col gap-4 px-4 py-2">
                <MyGenerationSection/>
                <MyGenerationSection/>
                <MyGenerationSection/>
            </div>
        </ScrollArea>
        </>
    );
};


const MyGenerationSection = () => {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex items-center justify-between gap-1">
                <p className="text-sm line-clamp-1 ">
                    A very long prompt used to generate the model
                </p>
                <Button variant="ghost" size="sm">
                    All 2 assets
                    <PlayIcon className="fill-foreground"
                              style={{height: "0.5rem", width: "0.5rem"}}/>
                </Button>
            </div>
            <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <MyGenerationCard/>
                <MyGenerationCard/>
                <MyGenerationCard/>
                <MyGenerationCard/>
                <MyGenerationCard/>
                <MyGenerationCard/>
            </div>
        </div>
    )
}

const MyGenerationCard = () => {
    return (
        <div className="flex flex-col gap-2">
            <div
                className='bg-muted cursor-pointer rounded-xl max-h-56 max-w-56 border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary grid grid-rows-2 gap-1 transition-all duration-200 p-1 overflow-hidden'>
                <div className="grid grid-cols-2 gap-1">
                    <AspectRatio className="bg-muted">
                        <Image src={image1.src} fill alt="Image"
                               className="h-full w-full rounded-md object-cover"/>
                    </AspectRatio>
                    <AspectRatio className="bg-muted">
                        <Image src={image1.src} fill alt="Image"
                               className="h-full w-full rounded-md object-cover"/>
                    </AspectRatio>
                </div>
                <div className="grid grid-cols-2 gap-1">
                    <AspectRatio className="bg-muted">
                        <Image src={image1.src} fill alt="Image"
                               className="h-full w-full rounded-md object-cover"/>
                    </AspectRatio>
                    <AspectRatio className="bg-muted">
                        <Image src={image1.src} fill alt="Image"
                               className="h-full w-full rounded-md object-cover"/>
                    </AspectRatio>
                </div>
            </div>
            {/*<Button className="w-full">*/}
            {/*    Publish*/}
            {/*</Button>*/}
        </div>
    )
}

function FiltersMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <FilterIcon/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
                <div className="flex flex-col justify-between gap-4 p-4">
                    <div className="flex gap-2 flex-col">
                        <p className="text-sm font-semibold">Status</p>
                        <StatusToggleGroup/>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <p className="text-sm font-semibold">My Labels</p>
                        <LabelToggleGroup/>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <p className="text-sm font-semibold">Order</p>
                        <OrderToggleGroup/>
                    </div>
                    <div className="flex">
                        <Button className="w-full">Reset</Button>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


const StatusToggleGroup = () => {
    return (
        <ToggleGroup className="flex gap-2 flex-wrap justify-start"
                     type="single">
            <ToggleGroupItem value="all"
                             aria-label="Toggle bold">
                All
            </ToggleGroupItem>
            <ToggleGroupItem value="downloaded" aria-label="Toggle bold">
                Downloaded
            </ToggleGroupItem>
            <ToggleGroupItem value="not-downloaded" aria-label="Toggle bold">
                Not downloaded
            </ToggleGroupItem>
            <ToggleGroupItem value="published" aria-label="Toggle bold">
                Published
            </ToggleGroupItem>
            <ToggleGroupItem value="not-published" aria-label="Toggle bold">
                Not published
            </ToggleGroupItem>

        </ToggleGroup>
    )
}

const LabelToggleGroup = () => {
    return (
        <ToggleGroup className="flex gap-2 flex-wrap justify-start"
                     type="single">
            <ToggleGroupItem className="flex " value="all"
                             aria-label="Toggle bold">
                All
            </ToggleGroupItem>
            <ToggleGroupItem value="unlabeled" aria-label="Toggle bold">
                Unlabeled
            </ToggleGroupItem>
        </ToggleGroup>
    )
}

const OrderToggleGroup = () => {
    return (
        <ToggleGroup className="flex gap-2 flex-wrap justify-start"
                     type="single">
            <ToggleGroupItem className="flex " value="new-first"
                             aria-label="Toggle bold">
                <CalendarArrowDown/>
                New first
            </ToggleGroupItem>
            <ToggleGroupItem value="old-first" aria-label="Toggle bold">
                <CalendarArrowUpIcon/>
                Old first
            </ToggleGroupItem>
        </ToggleGroup>
    )
}

export default MyAssetsPage;
