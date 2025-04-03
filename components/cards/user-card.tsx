import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import model_1_A from '@/assets/models/model-1-a.jpg'
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Card, CardContent} from "@/components/ui/card";
import {UserPlusIcon} from "lucide-react";


const UserCard = () => {
    return (
        <Card className='p-0'>
            <CardContent className='p-4 flex flex-col gap-4'>
                <div className="flex flex-col gap-2">
                    <div
                        className="relative flex flex-col items-center justify-center gap-2">
                        <Avatar className="h-24 w-24">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="text-lg font-semibold">Username</p>
                        <span
                            className="absolute top-0 right-0 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent w-fit">Pro</span>
                    </div>
                    <div className="flex gap-4 items-center justify-center flex-wrap">
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
                <div className="grid grid-cols-3 gap-2">
                    <AspectRatio ratio={1}>
                        <img src={model_1_A.src} alt="model"
                             className="h-full w-full object-cover rounded-md"/>
                    </AspectRatio>
                    <AspectRatio ratio={1}>
                        <img src={model_1_A.src} alt="model"
                             className="h-full w-full object-cover rounded-md"/>
                    </AspectRatio>
                    <AspectRatio ratio={1}>
                        <img src={model_1_A.src} alt="model"
                             className="h-full w-full object-cover rounded-md"/>
                    </AspectRatio>
                    <AspectRatio ratio={1}>
                        <img src={model_1_A.src} alt="model"
                             className="h-full w-full object-cover rounded-md"/>
                    </AspectRatio>
                    <AspectRatio ratio={1}>
                        <img src={model_1_A.src} alt="model"
                             className="h-full w-full object-cover rounded-md"/>
                    </AspectRatio>
                    <AspectRatio ratio={1}>
                        <div
                            className="bg-black flex items-center justify-center h-full w-full rounded-md">
                            <p className="text-gray-300 dark:text-gray-400 text-xs">View
                                more</p>
                        </div>
                    </AspectRatio>
                </div>
            </CardContent>
        </Card>
    );
};

export default UserCard;
