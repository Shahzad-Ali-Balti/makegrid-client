"use client"
import React from 'react';
import PageHeader from "@/components/page-header/page-header";
import {Button} from "@/components/ui/button";
import {CheckIcon, CoinsIcon, RocketIcon} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {
    AppUsageHistoryTable
} from "@/components/tables/app-usage-history-table";

const SubscriptionPage = () => {
    return (
        <>
            <PageHeader title="Subscription"/>
            <div className="flex flex-col gap-8 p-5">
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
                                    className="relative overflow-hidden bg-gradient-to-r to-sky-400 from-blue-700 text-white flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg hover:shadow-sky-500/50 active:scale-95"
                                >
                                    <RocketIcon/>
                                    Upgrade
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div>
                    <h2 className="text-xl font-semibold">Subscription
                        plans</h2>
                    <div className="flex gap-4 py-6">
                        <FreeSubscriptionCard/>
                        <ProSubscriptionCard/>
                        <MaxSubscriptionCard/>
                        <UnlimitedSubscriptionCard/>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">
                        Purchase Extra Credits (Subscriber only)
                    </h2>
                    <div className="flex gap-4 py-6">
                        <ExtraCreditsCard/>
                        <ExtraCreditsCard/>
                        <ExtraCreditsCard/>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">
                        App Usage History
                    </h2>
                    <div className="flex gap-4 py-6">
                        <Card className="flex flex-col flex-grow p-0">
                            <CardContent className="p-4">
                                <AppUsageHistoryTable/>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

const ExtraCreditsCard = () => {
    return (
        <Card className="flex flex-col flex-grow p-0">
            <CardContent className="flex flex-col gap-4 p-4">
                <div
                    className="flex flex-col gap-1 justify-center items-center">
                    <h3 className="text-3xl font-semibold">
                        $8
                    </h3>
                    <p className="font-semibold">200 credits</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-sm text-muted-foreground">Please
                        subscribe first</p>
                </div>
                {/*<Button className="w-full">*/}
                {/*    Purchase*/}
                {/*</Button>*/}
            </CardContent>
        </Card>
    )
}

const FreeSubscriptionCard = () => {
    return (
        <Card className="flex flex-col flex-grow">
            <CardHeader className="py-4">
                <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent w-fit">
                        Free
                    </h3>
                    <span className="text-sm text-muted-foreground">No credit card required</span>
                </div>
                <div>
                    <p className="text-xl font-semibold">$0</p>
                </div>
            </CardHeader>
            <Separator/>
            <CardContent className="flex flex-col flex-grow">
                <ul className="py-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                200
                            </span>
                            {' '}
                            credits per month
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                1
                            </span>
                            {' '}
                            task waiting in queue
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            Limited queue priority
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            Assets are under CC BY 4.0 license
                        </p>
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
                <div className="flex flex-grow items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                        Current plan
                    </p>
                </div>
            </CardFooter>
        </Card>
    )
}

const ProSubscriptionCard = () => {
    return (
        <Card className="flex-grow">
            <CardHeader className="py-4">
                <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent w-fit">
                        Pro
                    </h3>
                    <span className="text-sm text-primary">Best for individual creators</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <p className="text-xl font-semibold line-through text-muted-foreground">$20</p>
                        <p className="text-xl font-semibold">
                            $16
                            <span className="text-sm">
                            /month
                        </span>
                        </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        $1.60/100 credits $192.00/ year
                    </p>
                </div>
            </CardHeader>
            <Separator/>
            <CardContent>
                <ul className="py-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                1,000
                            </span>
                            {' '}
                            credits per month
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                10
                            </span>
                            {' '}
                            tasks waiting in queue
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                Standard
                            </span>
                            {' '}
                            queue priority
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                4
                            </span>
                            {' '}
                            free retries
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            Assets are private & customer owned
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            Download community models
                        </p>
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
                <div className="flex flex-grow items-center justify-center">
                    <Button
                        className="relative w-full overflow-hidden bg-gradient-to-r to-purple-600 from-blue-500 text-white flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95"
                    >
                        <RocketIcon/>
                        Subscribe now
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

const MaxSubscriptionCard = () => {
    return (
        <Card className="flex-grow">
            <CardHeader className="py-4">
                <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent w-fit">
                        Max
                    </h3>
                    <span className="text-sm text-primary">Best for studios and teams</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <p className="text-xl font-semibold line-through text-muted-foreground">$60</p>
                        <p className="text-xl font-semibold">
                            $48
                            <span className="text-sm">
                            /month
                        </span>
                        </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        $1.20/100 credits $576.00/ year
                    </p>
                </div>
            </CardHeader>
            <Separator/>
            <CardContent>
                <ul className="py-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                4,000
                            </span>
                            {' '}
                            credits per month
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                20
                            </span>
                            {' '}
                            tasks waiting in queue
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                Standard
                            </span>
                            {' '}
                            queue priority
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                4
                            </span>
                            {' '}
                            free retries
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            Assets are private & customer owned
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            Download community models
                        </p>
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
                <div className="flex flex-grow items-center justify-center">
                    <Button
                        className="relative w-full overflow-hidden bg-gradient-to-r from-lime-500 to-emerald-500 text-white flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg hover:shadow-lime-500/50 active:scale-95"
                    >
                        <RocketIcon/>
                        Subscribe now
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
};

const UnlimitedSubscriptionCard = () => {
    return (
        <Card className="flex-grow">
            <CardHeader className="py-4">
                <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent w-fit">
                        Unlimited
                    </h3>
                    <span
                        className="text-sm text-primary">Unlock Makegrid&apos;s full potential</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <p className="text-xl font-semibold line-through text-muted-foreground">$120</p>
                        <p className="text-xl font-semibold">
                            $96
                            <span className="text-sm">
                            /month
                        </span>
                        </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        $1,152.00/ year
                    </p>
                </div>
            </CardHeader>
            <Separator/>
            <CardContent>
                <ul className="py-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                               4,000
                            </span>
                            {' '}
                            credits per month
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                20
                            </span>
                            {' '}
                            tasks waiting in queue
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                Standard
                            </span>
                            {' '}
                            queue priority
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            <span
                                className=" font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                                4
                            </span>
                            {' '}
                            free retries
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            Assets are private & customer owned
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckIcon height={14} width={14}/>
                        <p className="text-sm text-muted-foreground">
                            Download community models
                        </p>
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
                <div className="flex flex-grow items-center justify-center">
                    <Button
                        className="relative w-full overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg hover:shadow-amber-500/50 active:scale-95"
                    >
                        <RocketIcon/>
                        Subscribe now
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default SubscriptionPage;
