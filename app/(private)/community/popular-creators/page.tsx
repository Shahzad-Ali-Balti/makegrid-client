import React from 'react';
import PageHeader from "@/components/page-header/page-header";
import UserCard from "@/components/cards/user-card";
import {Input} from "@/components/ui/input";

const PopularCreatorsPage = () => {
    return (
        <>
            <PageHeader title="Popular Creators">
                <Input type="search" placeholder="Search"/>
            </PageHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap p-5 gap-5">
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
            </div>
        </>
    );
};

export default PopularCreatorsPage;
