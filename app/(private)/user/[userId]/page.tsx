"use client"
import React, {use} from 'react';
import bg from "@/assets/andy-he-PuJc2Sodi94-unsplash.jpg"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {
    AwardIcon,
    ClockFadingIcon,
    EyeIcon,
    FlagIcon,
    Share2,
    StarIcon,
    UserPlusIcon
} from "lucide-react";
import Tooltip from "@/components/tooltip/tooltip";
import {TipMenu} from "@/components/menu/tip-menu";
import ModelCard from "@/components/cards/model-card";
import model_1_A from "@/assets/models/model-1-a.jpg";
import model_1_B from "@/assets/models/model-1-b.jpg";
import model_2_A from "@/assets/models/model-2-a.jpg";
import model_2_B from "@/assets/models/model-2-b.jpg";
import model_3_A from "@/assets/models/model-3-a.jpg";
import model_3_B from "@/assets/models/model-3-b.jpg";
import model_4_A from "@/assets/models/model-4-a.jpg";
import model_4_B from "@/assets/models/model-4-b.jpg";
import model_5_A from "@/assets/models/model-5-a.jpg";
import model_5_B from "@/assets/models/model-5-b.jpg";
import model_6_A from "@/assets/models/model-6-a.jpg";
import model_6_B from "@/assets/models/model-6-b.jpg";
import model_7_A from "@/assets/models/model-7-a.jpg";
import model_7_B from "@/assets/models/model-7-b.jpg";

const UserDetailsPage = ({params}: { params: Promise<{ userId: string }> }) => {
    const {userId} = use(params);
    console.log(userId);

    return (
        <>
            <div style={{backgroundImage: `url(${bg.src})`}}
                 className="h-80 w-full bg-cover bg-center bg-no-repeat">
                <div
                    className="flex flex-col justify-between p-4 bg-black h-full w-full bg-opacity-40 backdrop-blur">
                    <div
                        className="flex items-center gap-4 my-auto">
                        <Avatar className="h-24 w-24">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4 items-center">
                                <p className="text-lg font-semibold text-white">Username</p>
                                <span
                                    className="flex justify-center items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-600 to-blue-500 w-fit">
                                    <span className="text-white">
                                    Pro
                                    </span>
                                </span>
                            </div>
                            <div
                                className="flex text-sm text-gray-300 gap-2 items-center">
                                <ClockFadingIcon height={14} width={14}/>
                                <span>Joined Nov 12, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <Tooltip text="Views">
                                <Button variant='ghost' size='sm'
                                        className='text-white hover:text-white cursor-default hover:bg-transparent dark:hover:bg-transparent'>
                                    <EyeIcon size={2}/>
                                    26
                                </Button>
                            </Tooltip>
                            <Tooltip text="Collections">
                                <Button variant='ghost' size='sm'
                                        className='text-white hover:text-white cursor-default hover:bg-transparent dark:hover:bg-transparent'>
                                    <StarIcon size={2}/>
                                    26
                                </Button>
                            </Tooltip>
                            <Tooltip text="Featured">
                                <Button variant='ghost' size='sm'
                                        className='text-white hover:text-white cursor-default hover:bg-transparent dark:hover:bg-transparent'>
                                    <AwardIcon size={2}/>
                                    26
                                </Button>
                            </Tooltip>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost"
                                    className="text-white hover:text-white hover:bg-white/10">
                                15 Following
                            </Button>
                            <Button variant="ghost"
                                    className="text-white hover:text-white hover:bg-white/10">
                                15867 Followers
                            </Button>
                            <Button>
                                <UserPlusIcon/>
                                Follow
                            </Button>
                            <TipMenu withDarkBackGround/>
                            <Button variant="ghost" size="icon"
                                    className="text-white hover:text-white hover:bg-white/10">
                                <FlagIcon/>
                            </Button>
                            <Button variant="ghost" size="icon"
                                    className="text-white hover:text-white hover:bg-white/10">
                                <Share2/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 flex-wrap'>
                <ModelCard image={model_1_A.src} hoverImage={model_1_B.src}/>
                <ModelCard image={model_2_A.src} hoverImage={model_2_B.src}/>
                <ModelCard image={model_3_A.src} hoverImage={model_3_B.src}/>
                <ModelCard image={model_4_A.src} hoverImage={model_4_B.src}/>
                <ModelCard image={model_5_A.src} hoverImage={model_5_B.src}/>
                <ModelCard image={model_6_A.src} hoverImage={model_6_B.src}/>
                <ModelCard image={model_7_A.src} hoverImage={model_7_B.src}/>
            </div>
        </>
    );
};

export default UserDetailsPage;
