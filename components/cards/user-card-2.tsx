import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {AwardIcon, EyeIcon, StarIcon, UserPlusIcon} from "lucide-react";
import Tooltip from "@/components/tooltip/tooltip";
import bg from "@/assets/andy-he-PuJc2Sodi94-unsplash.jpg";


const UserCard2 = () => {
    return (
        <Card className='p-0 overflow-hidden'>
            <CardContent className='relative p-0 pb-4 flex flex-col gap-4'>
                <div style={{backgroundImage: `url(${bg.src})`}}
                     className="h-40 w-full absolute bg-cover bg-center after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-background"/>

                <div className="px-4 pt-16 flex flex-col gap-2">
                    <div
                        className="flex flex-col items-center justify-center gap-2">
                        <Avatar className="h-24 w-24">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-center relative">
                            <p className="text-lg font-semibold">Username</p>
                            <span
                                className="font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent w-fit">Pro</span>
                        </div>
                    </div>
                    <div
                        className="flex gap-4 items-center justify-center flex-wrap">
                        <div className="flex gap-1">
                            <p className="text-sm font-medium">5</p>
                            <p className="text-sm text-muted-foreground">Followings</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="text-sm font-medium">5583</p>
                            <p className="text-sm text-muted-foreground">Followers</p>
                        </div>
                    </div>
                    <Button className="w-full">
                        <UserPlusIcon/>
                        Follow
                    </Button>
                </div>
                <div className="flex gap-2 justify-center">
                    <Tooltip side="bottom" text="Views">
                        <Button variant='ghost'
                                size='sm'
                                className='text-muted-foreground hover:text-muted-foreground cursor-default hover:bg-transparent dark:hover:bg-transparent'>
                            <EyeIcon size={2}/>
                            26
                        </Button>
                    </Tooltip>
                    <Tooltip side="bottom" text="Collections">
                        <Button variant='ghost'
                                size='sm'
                                className='text-muted-foreground hover:text-muted-foreground cursor-default hover:bg-transparent dark:hover:bg-transparent'>
                            <StarIcon size={2}/>
                            26
                        </Button>
                    </Tooltip>
                    <Tooltip side="bottom" text="Featured">
                        <Button variant='ghost'
                                size='sm'
                                className='text-muted-foreground hover:text-muted-foreground cursor-default hover:bg-transparent dark:hover:bg-transparent'>
                            <AwardIcon size={2}/>
                            26
                        </Button>
                    </Tooltip>
                </div>
            </CardContent>
        </Card>
    );
};

export default UserCard2;
