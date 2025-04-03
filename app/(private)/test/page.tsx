import React from 'react';
import ModelViewer from "@/components/canvas/model-viewer";

const TestPage = () => {
    return (
        <div>
            <ModelViewer height="h-[calc(100vh-140px)]"
                         modelPath="/LittlestTokyo.glb"/>
        </div>
    );
};

export default TestPage;
