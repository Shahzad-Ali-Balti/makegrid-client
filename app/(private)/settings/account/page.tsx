"use client"
import React from 'react';
import PageHeader from "@/components/page-header/page-header";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {CoinsIcon, RocketIcon, SquarePenIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import image from "@/assets/background.jpg"
import {Separator} from "@/components/ui/separator";
import {useRouter} from "next/navigation";

const AccountPage = () => {
    const router = useRouter()
    return (
        <>
            <PageHeader title="Account"/>
            <div className="flex flex-col gap-8 p-5">
                <Card>
                    <CardContent className="grid grid-cols-6 p-0">
                        <div className="col-span-2 p-6 flex flex-col gap-2">
                            <span
                                className="text-xl font-semibold">Profile</span>
                            <span
                                className="text-xs text-muted-foreground">Description</span>
                        </div>
                        <div className="col-span-4 flex gap-6 flex-col p-6">
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-semibold">Avatar</label>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-20 w-20">
                                        <AvatarImage
                                            src="https://github.com/shadcn.png"
                                            alt="@shadcn"/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Button size="sm" variant="ghost">
                                        <SquarePenIcon/>
                                        Edit
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-semibold">Background</label>
                                <div className="flex items-center gap-2">
                                    <div
                                        className="h-40 w-full rounded-xl overflow-hidden">
                                        <img src={image.src}
                                             className="h-full w-full object-cover"
                                             alt=""/>
                                    </div>

                                    <Button size="sm" variant="ghost">
                                        <SquarePenIcon/>
                                        Edit
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold"
                                       htmlFor='name'>Name</label>
                                <Input type="text" id="name" name="name"
                                       placeholder="John Doe"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold"
                                       htmlFor='email'>Email</label>
                                <Input type="email" id="email" name="email"
                                       placeholder="john.doe@example.com"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold"
                                       htmlFor='bio'>Bio</label>
                                <Textarea id="bio" name="bio"
                                          rows={5}
                                          placeholder="Tell us a little about yourself—your interests, passions, or what makes you unique!"/>
                            </div>
                        </div>
                    </CardContent>
                    <Separator/>
                    <CardFooter className="flex justify-end gap-4 pt-4">
                        <Button variant="secondary">
                            Cancel
                        </Button>
                        <Button>
                            Update
                        </Button>

                    </CardFooter>
                </Card>
                <Card>
                    <CardContent className="flex flex-col p-6 gap-6">
                        <div className=" flex flex-col gap-2">
                            <span
                                className="text-xl font-semibold">Current plan</span>
                        </div>
                        <div className="flex gap-3">
                            <div
                                className="w-1/3 flex flex-col gap-1 justify-start items-start">
                                <div className="text-sm text-muted-foreground">
                                    Tier
                                </div>
                                <span
                                    className="text-4xl font-black bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                    Free
                                </span>
                            </div>
                            <div className="flex w-full items-center">
                                <div className="flex flex-col w-full gap-4">
                                    <div className="flex flex-col gap-1">
                                        <div
                                            className="text-sm text-muted-foreground">
                                            Credit left
                                        </div>
                                        <div
                                            className="flex items-center gap-2 text-2xl font-semibold">
                                            <CoinsIcon fill='gold'
                                                       height={20}
                                                       width={20}
                                                       className='text-amber-700'/>
                                            200
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex gap-1">
                                            <div
                                                className="text-sm font-semibold">
                                                200
                                            </div>
                                            <div
                                                className="text-sm text-muted-foreground">
                                                Monthly credits
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <div
                                                className="text-sm font-semibold">
                                                0
                                            </div>
                                            <div
                                                className="text-sm text-muted-foreground">
                                                Permanent credits
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    onClick={() => router.push('/settings/subscription')}
                                    className="relative overflow-hidden bg-gradient-to-r to-sky-400 from-blue-700 text-white flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg hover:shadow-sky-500/50 active:scale-95"
                                >
                                    <RocketIcon/>
                                    Upgrade
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="grid grid-cols-6 p-0">
                        <div className="col-span-2 p-6 flex flex-col gap-2">
                            <span
                                className="text-xl font-semibold">Delete account</span>
                            <span
                                className="text-xs text-muted-foreground">Description</span>
                        </div>
                        <div className="col-span-4 flex gap-3 p-6 items-center">
                            <div className="flex flex-col gap-2 flex-grow">
                                <h6 className="text-sm font-semibold">Permanently
                                    delete account</h6>
                                <p className="text-sm text-muted-foreground">Deleting
                                    your account will permanently remove
                                    all of your assets and cannot be undone.</p>
                            </div>
                            <Button variant="destructive">
                                Delete my account
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default AccountPage;
