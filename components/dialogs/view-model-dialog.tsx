import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React, {ReactNode, useState} from "react";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import ModelViewer from "@/components/canvas/model-viewer";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {
    AwardIcon,
    ClockIcon,
    DownloadIcon,
    EyeIcon,
    FlagIcon,
    HeartIcon,
    LayoutGrid,
    Share2Icon,
    StarIcon,
    TagIcon,
    TextCursorInputIcon,
    ThumbsUpIcon, UserIcon
} from "lucide-react";
import {cn} from "@/lib/utils";
import {TipMenu} from "@/components/menu/tip-menu";
import {Button} from "@/components/ui/button";
import Tooltip from "@/components/tooltip/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Badge} from "@/components/ui/badge";
import {Toggle} from "@/components/ui/toggle";
import UserCard2 from "@/components/cards/user-card-2";
import ModelCard2 from "@/components/cards/model-card-2";
import model_3_A from "@/assets/models/model-3-a.jpg";
import model_4_A from "@/assets/models/model-4-a.jpg";
import model_5_A from "@/assets/models/model-5-a.jpg";
import model_6_A from "@/assets/models/model-6-a.jpg";

export function ViewModelDialog({children}: { children: ReactNode }) {
    const [reaction, setReaction] = useState('');
    const [stared, setStared] = useState(false);


    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent
                className="p-2 min-w-80 sm:min-w-[600px] md:min-w-[760px] lg:min-w-[1020px] xl:min-w-[1280px]">
                <ScrollArea className="h-[calc(100vh-140px)]">
                    <VisuallyHidden>
                        <DialogTitle>Model details</DialogTitle>
                    </VisuallyHidden>
                    {/*content*/}
                    <div className="grid grid-cols-6">
                        {/*main col*/}
                        <div
                            className="p-6 pr-3 col-span-6 md:col-span-4 flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                {/*model canvas*/}
                                <ModelViewer height="h-[calc(100vh-140px)]"
                                             modelPath="/LittlestTokyo.glb"/>
                                {/*reactions and actions*/}
                                <div className="flex justify-between flex-wrap gap-2">
                                    <div className='flex gap-2 items-center'>
                                        <ToggleGroup value={reaction}
                                                     onValueChange={(e) => setReaction(e)}
                                                     type='single'>
                                            <ToggleGroupItem
                                                className='data-[state=on]:bg-white dark:data-[state=on]:bg-black hover:bg-blue-50 dark:hover:bg-blue-500/25'
                                                value='like' size='sm'>
                                                <ThumbsUpIcon
                                                    className={cn('stroke-blue-700 dark:stroke-blue-500', reaction === 'like' && 'fill-blue-500')}/>
                                                <span className='text-xs'>
                                            22
                                        </span>
                                            </ToggleGroupItem>
                                            <ToggleGroupItem value='love'
                                                             size='sm'
                                                             className='data-[state=on]:bg-white dark:data-[state=on]:bg-black hover:bg-red-50 dark:hover:bg-red-500/25'>
                                                <HeartIcon
                                                    className={cn('stroke-red-700 dark:stroke-red-500', reaction === 'love' && 'fill-red-500')}/>
                                                <span className='text-xs'>
                                            14
                                        </span>
                                            </ToggleGroupItem>
                                        </ToggleGroup>
                                        <TipMenu/>
                                    </div>
                                    <div className="flex gap-2 items-center flex-wrap">
                                        <Button variant="ghost">
                                            <Share2Icon/>
                                            Share
                                        </Button>
                                        <Toggle pressed={stared}
                                                onPressedChange={(value) => setStared(value)}
                                                size='sm'
                                                className={cn('data-[state=on]:bg-white dark:data-[state=on]:bg-black hover:bg-amber-50 dark:hover:bg-amber-500/25', stared && "data-[state=on]:text-amber-700")}>
                                            <StarIcon
                                                className={cn('stroke-amber-500 dark:stroke-amber-500', stared && 'fill-amber-500')}/>
                                            {stared ? "Stared" : "Star"}
                                        </Toggle>
                                        {/*<Button variant="ghost">*/}
                                        {/*    Remix*/}
                                        {/*</Button>*/}
                                        <Button>
                                            <DownloadIcon/>
                                            Download
                                        </Button>
                                        <Tooltip side="bottom" text="Report">
                                            <Button variant="ghost" size="icon">
                                                <FlagIcon/>
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-lg font-semibold line-clamp-1 ">
                                Biopunk organic armored full body humaniod cat
                                character concept with painterly realistic
                                shading.
                            </h2>
                            <div className="flex flex-col gap-2">
                                <h3 className="flex gap-2 items-center font-semibold">
                                    <TextCursorInputIcon className="h-5 w-5"/>
                                    Generation
                                </h3>
                                <div className="flex flex-col gap-2">
                                    <div
                                        className="flex justify-between items-center flex-wrap">
                                        <div
                                            className="flex gap-2 items-center text-muted-foreground">
                                            <ClockIcon className="h-4 w-4"/>
                                            <span className="text-xs">
                                            Published 13 hours ago
                                        </span>
                                        </div>
                                        <div className="flex gap-2">
                                            <Tooltip text="Views">
                                                <Button variant='ghost'
                                                        size='sm'
                                                        className='text-muted-foreground hover:text-muted-foreground cursor-default hover:bg-transparent dark:hover:bg-transparent'>
                                                    <EyeIcon size={2}/>
                                                    26
                                                </Button>
                                            </Tooltip>
                                            <Tooltip text="Collections">
                                                <Button variant='ghost'
                                                        size='sm'
                                                        className='text-muted-foreground hover:text-muted-foreground cursor-default hover:bg-transparent dark:hover:bg-transparent'>
                                                    <StarIcon size={2}/>
                                                    26
                                                </Button>
                                            </Tooltip>
                                            <Tooltip text="Featured">
                                                <Button variant='ghost'
                                                        size='sm'
                                                        className='text-muted-foreground hover:text-muted-foreground cursor-default hover:bg-transparent dark:hover:bg-transparent'>
                                                    <AwardIcon size={2}/>
                                                    26
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div
                                            className="flex gap-2 items-center text-muted-foreground">
                                            <LayoutGrid className="h-4 w-4"/>
                                            <div className="flex gap-1 flex-wrap">
                                                <Badge variant="default">
                                                    Science & Technology
                                                </Badge>
                                                <Badge variant="default">
                                                    Animals
                                                </Badge>
                                                <Badge variant="default">
                                                    Characters
                                                </Badge>
                                            </div>
                                        </div>
                                        <div
                                            className="flex gap-2 items-center text-muted-foreground">
                                            <TagIcon className="h-4 w-4"/>
                                            <div className="flex gap-1 flex-wrap">
                                                <Badge variant="secondary">
                                                    biopunk
                                                </Badge>
                                                <Badge variant="secondary">
                                                    cat
                                                </Badge>
                                                <Badge variant="secondary">
                                                    armor
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-1">
                                    <h6 className="text-sm font-semibold">
                                        Prompt
                                    </h6>
                                    <p className="text-sm text-muted-foreground">
                                        Biopunk organic armored full body
                                        humaniod cat character concept with
                                        painterly realistic shading. Inspired by
                                        the titans from attack on titan. Gierger
                                        alien style holes and ribbed details
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h6 className="text-sm font-semibold">
                                        Model seed
                                    </h6>
                                    <p className="text-sm text-muted-foreground">
                                        747897222
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h6 className="text-sm font-semibold">
                                        Texture Seed
                                    </h6>
                                    <p className="text-sm text-muted-foreground">
                                        1185066127
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h6 className="text-sm font-semibold">
                                        License
                                    </h6>
                                    <p className="text-sm text-muted-foreground">
                                        CC0
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pl-3 col-span-6 md:col-span-2 flex flex-col gap-4">
                            <UserCard2/>
                            <div className="flex flex-col gap-3">
                                <h3 className="flex gap-2 items-center font-semibold">
                                    <UserIcon className="h-5 w-5"/>
                                    More by username
                                </h3>
                                <ModelCard2 image={model_3_A.src}/>
                                <ModelCard2 image={model_4_A.src}/>
                                <ModelCard2 image={model_5_A.src}/>
                                <ModelCard2 image={model_6_A.src}/>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}
