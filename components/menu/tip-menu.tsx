"use client"

import * as React from "react"
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {CoinsIcon, GiftIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from "@/components/ui/hover-card";
import {cn} from "@/lib/utils";


export function TipMenu({withDarkBackGround = false}: {
    withDarkBackGround?: boolean
}) {
    return (
        <HoverCard openDelay={200}>
            <HoverCardTrigger>
                <Button
                    className={cn(withDarkBackGround && "text-white hover:text-white hover:bg-white/10")}
                    variant="ghost" size="sm">
                    <GiftIcon className='stroke-purple-700 fill-yellow-500'
                              height={16} width={16}/>
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
                <div className='flex p-3 gap-4 flex-col'>
                    <div className='flex justify-between'>
                        <h6 className='text-lg font-semibold'>Tip</h6>
                        <div className='flex gap-1'>
                                <span className='text-sm text-muted-foreground'>
                                    Credit left:
                                </span>
                            <CoinsIcon fill='gold'
                                       className='text-amber-700'
                                       height={16}
                                       width={16}/>
                            <span className='text-sm text-muted-foreground'>
                                    200
                                </span>
                        </div>

                    </div>
                    <div>
                        <TipAmountToggleGroup/>
                    </div>
                    <div className='flex items-stretch w-full'>
                        <Button className='w-full'>
                            <GiftIcon/>
                            Tip
                        </Button>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}


const TipAmountToggleGroup = () => {
    return (
        <ToggleGroup type="single">
            <ToggleGroupItem value="1" aria-label="Toggle bold">
                <CoinsIcon fill='gold'
                           className='text-amber-700'
                           height={16}
                           width={16}/>
                1
            </ToggleGroupItem>
            <ToggleGroupItem value="5" aria-label="Toggle bold">
                <CoinsIcon fill='gold'
                           className='text-amber-700'
                           height={16}
                           width={16}/>
                5
            </ToggleGroupItem>
            <ToggleGroupItem value="10" aria-label="Toggle bold">
                <CoinsIcon fill='gold'
                           className='text-amber-700'
                           height={16}
                           width={16}/>
                10
            </ToggleGroupItem>
            <ToggleGroupItem value="20" aria-label="Toggle bold">
                <CoinsIcon fill='gold'
                           className='text-amber-700'
                           height={16}
                           width={16}/>
                20
            </ToggleGroupItem>

        </ToggleGroup>
    )
}