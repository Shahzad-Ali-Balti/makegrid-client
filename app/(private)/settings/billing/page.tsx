"use client"
import React from 'react';
import PageHeader from "@/components/page-header/page-header";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {ChevronRightIcon, RocketIcon} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {BillingHistoryTable} from "@/components/tables/billing-history-table";

const BillingPage = () => {
    return (
        <>
            <PageHeader title="Billing"/>
            <div className="flex flex-col gap-8 p-5">
                <div>
                    <h2 className="text-2xl font-semibold">
                        Overview
                    </h2>
                    <div className="flex gap-4 py-6">
                        <Card className="flex flex-grow flex-col p-0">
                            <CardContent className="p-0">
                                <div className="p-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-xl font-semibold">
                                            Current billing period
                                        </h3>
                                        <Button size="sm" variant="ghost">
                                            View plan
                                            <ChevronRightIcon/>
                                        </Button>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span
                                            className="text-2xl font-bold flex gap-2 items-end">
                                            $0.00
                                            <span
                                                className="text-sm font-normal leading-7  text-muted-foreground">
                                                per month
                                            </span>
                                        </span>
                                        <p className="text-sm text-muted-foreground">
                                            You&apos;re currently on a Free
                                            plan.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <Separator/>
                            <CardFooter className="p-4 flex justify-between">
                                <span
                                    className="text-xs text-muted-foreground">
                                    Looking to get more? Upgrade to enjoy additional credits, enhanced task priority, the ability to download community models and access to more advanced features.
                                </span>
                                <Button
                                    className="relative overflow-hidden bg-gradient-to-r to-sky-400 from-blue-700 text-white flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg hover:shadow-sky-500/50 active:scale-95"
                                >
                                    <RocketIcon/>
                                    Upgrade
                                </Button>
                            </CardFooter>

                        </Card>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">
                        Payment method
                    </h2>
                    <div className="flex gap-4 py-6">
                        <Card className="flex flex-grow flex-col p-0">
                            <CardContent className="p-0">
                                <div className="p-4">
                                    <p className="text-sm text-muted-foreground">
                                        No payment method.You can add one with a
                                        subscription.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">
                        Billing details
                    </h2>
                    <div className="flex gap-4 py-6">
                        <Card className="flex flex-grow flex-col p-0">
                            <CardContent className="p-0">
                                <div className="p-4 flex flex-col gap-6">
                                    <div className="grid w-1/2 gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            type="text"
                                            placeholder="John doe"
                                            id="name"/>
                                    </div>
                                    <div className="grid w-1/2 gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            type="email"
                                            placeholder="john.doe@example.com"
                                            id="email"/>
                                    </div>
                                    <div className="grid w-1/2 gap-2">
                                        <Label htmlFor="address">Address</Label>
                                        <Input
                                            type="text"
                                            placeholder="Your billing address"
                                            id="address"/>
                                    </div>
                                    <div className="grid w-1/2 gap-2">
                                        <Label htmlFor="taxID">Tax ID</Label>
                                        <Input
                                            type="text"
                                            placeholder="Your tax ID"
                                            id="taxID"/>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">
                        Billing history
                    </h2>
                    <div className="flex gap-4 py-6">
                        <Card className="flex flex-grow flex-col p-0">
                            <CardContent className="p-4">
                                <BillingHistoryTable/>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BillingPage;
