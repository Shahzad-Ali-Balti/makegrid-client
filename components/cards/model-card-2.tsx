'use client'
import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {EyeIcon, StarIcon} from "lucide-react";
import {Button} from "@/components/ui/button";


const ModelCard2 = ({image}: {
    image: string
}) => {
    return (
        <Card className='overflow-hidden'>
            <CardContent className='p-0'>
                <div className="flex gap-3">
                    <div className="h-32 w-32 bg-black">
                        <img src={image} className="h-full w-full object-contain"
                             alt="model"/>
                    </div>
                    <div
                        className="flex flex-1 flex-col gap-2 pl-0 p-2 justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold line-clamp-2">
                                Biopunk organic armored full body humaniod cat
                                character concept with painterly realistic
                                shading.
                            </p>
                            <span className="text-xs text-muted-foreground">
                                2 days ago
                            </span>
                        </div>
                        <div className='flex justify-between w-full'>
                            <div className='flex'>
                                <Button variant='ghost' size='sm'
                                        className='cursor-default hover:bg-white dark:hover:bg-black'>
                                    <EyeIcon size={2}/>
                                    26
                                </Button>
                                <Button variant='ghost' size='sm'
                                        className='cursor-default hover:bg-white dark:hover:bg-black'>
                                    <StarIcon size={2}/>
                                    5
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ModelCard2;
