'use client'
import React, {useState} from 'react';
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    AwardIcon,
    DownloadIcon,
    EyeIcon,
    HeartIcon,
    LinkIcon,
    SparklesIcon,
    StarIcon,
    ThumbsUpIcon
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {TipMenu} from "@/components/menu/tip-menu";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {cn} from "@/lib/utils";
import {Toggle} from "@/components/ui/toggle";
import Tooltip from "@/components/tooltip/tooltip";
import {ViewModelDialog} from "@/components/dialogs/view-model-dialog";


const ModelCard = ({image, hoverImage}: {
    image: string,
    hoverImage: string
}) => {
    const [reaction, setReaction] = useState('');
    const [stared, setStared] = useState(false);
    return (
        <Card className='overflow-visible'>
            <CardContent className='p-0'>
                <div
                    style={{backgroundImage: `url(${image})`}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundImage = `url(${hoverImage})`}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundImage = `url(${image})`}
                    className={`h-[70vh] rounded-t-xl sm: w-full flex cursor-pointer overflow-hidden bg-center bg-cover transition-all duration-500`}>
                    <div
                        className='flex opacity-0 hover:opacity-100 w-full flex-col justify-between transition-all duration-500'>
                        <div className='flex w-full justify-end p-2'>

                            <Tooltip text="Featured">
                                <AwardIcon height={20} width={20}
                                           className="stroke-red-700 fill-amber-500"/>

                            </Tooltip>
                        </div>
                        <ViewModelDialog>
                            <div className="h-full w-full">

                            </div>
                        </ViewModelDialog>
                        <div className='flex p-4 gap-2 z-50'>
                            <Button size='sm'>
                                <DownloadIcon/>
                                Download
                            </Button>
                            <Button variant='default' size='sm'>
                                <SparklesIcon/>
                                Remix
                            </Button>
                            <Tooltip text="Copy link">
                                <Button size='sm'>
                                    <LinkIcon/>
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                </div>

            </CardContent>
            <CardFooter className='flex-col items-start gap-2 p-3 pt-1'>
                <div className='flex gap-2'>
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
                        <ToggleGroupItem value='love' size='sm'
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
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png"
                                         alt="@shadcn"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col'>
                            <p className='text-sm font-semibold'>Username</p>
                            <span
                                className='text-xs text-gray-500'>2 days ago</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <Button variant='ghost' size='sm'
                                className='cursor-default hover:bg-white dark:hover:bg-black'>
                            <EyeIcon size={2}/>
                            26
                        </Button>
                        <Toggle pressed={stared}
                                onPressedChange={(value) => setStared(value)}
                                size='sm'
                                className='data-[state=on]:bg-white dark:data-[state=on]:bg-black hover:bg-amber-50 dark:hover:bg-amber-500/25'>
                            <StarIcon
                                className={cn('stroke-amber-500 dark:stroke-amber-500', stared && 'fill-amber-500')}/>
                            6
                        </Toggle>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
        ;
};

export default ModelCard;
