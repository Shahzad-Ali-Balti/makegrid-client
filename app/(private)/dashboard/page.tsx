"use client"
import React from 'react';
import PageHeader from "@/components/page-header/page-header";
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
import bg from '@/assets/6854056.jpg'
import {BoxesIcon, ImageIcon, PaintbrushIcon} from "lucide-react";
import {motion} from "motion/react"
import {useRouter} from "next/navigation";

const DashboardPage = () => {
    const router = useRouter()
    return (
        <>
            <PageHeader title="Dashboard"/>
            <div className="px-5 py-4 pb-2">
                <div style={{backgroundImage: `url(${bg.src})`}}
                     className="h-80 bg-center bg-cover rounded-xl overflow-hidden">
                    <div
                        className="flex flex-col items-center justify-center gap-4 bg-black/25 backdrop-blur-sm h-full w-full rounded-xl overflow-hidden">
                        <div
                            className='flex flex-col gap-1 justify-center items-center'>
                            <p className="text-white text-xl font-semibold">
                                Welcome username!
                            </p>
                            <p className="text-gray-300 text-sm">
                                How can makegrid help you today?
                            </p>
                        </div>
                        <motion.div
                            transition={{duration: 0.75, ease: "anticipate"}}
                            initial={{scale: 0, opacity: 0}}
                            animate={{
                                background: "linear-gradient(90deg, oklch(0.623 0.214 259.815) 0%, oklch(0.789 0.154 211.53) 100%)",
                                scale: 1,
                                opacity: 1
                            }}
                            whileHover={{background: "linear-gradient(270deg, oklch(0.623 0.214 259.815) 0%, oklch(0.789 0.154 211.53) 100%)"}}
                            className='flex flex-col sm:flex-row rounded-xl px-1 lg:px-3 py-1'>
                            <button
                                onClick={() => router.push('/workspace')}
                                className="flex flex-col items-center justify-center gap-2 px-4 py-2 text-gray-200">
                                <BoxesIcon/>
                                Text to 3D
                            </button>
                            {/*<Separator orientation="vertical"/>*/}
                            <button
                                onClick={() => router.push('/workspace')}
                                className="flex flex-col items-center justify-center gap-2 px-4 py-2 text-gray-200">
                                <ImageIcon/>
                                Image to 3D
                            </button>
                            {/*<Separator orientation="vertical"/>*/}
                            <button
                                onClick={() => router.push('/workspace')}
                                className="flex flex-col items-center justify-center gap-2 px-4 py-2 text-gray-200">
                                <PaintbrushIcon/>
                                AI Texturing
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <h2 className="px-5 py-2 text-xl font-semibold">
                Community
            </h2>
            <div
                className='px-5 py-4 pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 flex-wrap'>
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

export default DashboardPage;
