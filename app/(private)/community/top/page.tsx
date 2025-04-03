import React from 'react';
import PageHeader from "@/components/page-header/page-header";
import {Input} from "@/components/ui/input";
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

const TopPage = () => {
    return (
        <>
            <PageHeader title="Top">
                <Input type="search" placeholder="Search"/>
            </PageHeader>
            <div
                className='px-5 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 flex-wrap'>
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

export default TopPage;
