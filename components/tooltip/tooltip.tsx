import React from 'react';
import {
    Tooltip as ToolTipPrimitive,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip";

const Tooltip = ({children, text, side, align}: {
    children: React.ReactNode,
    text: string
    side?: "top" | "bottom" | "left" | "right"
    align?: "start" | "center" | "end"
}) => {
    return (
        <ToolTipPrimitive>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} align={align}>
                <p className="text-white">{text}</p>
            </TooltipContent>
        </ToolTipPrimitive>
    );
};

export default Tooltip;
