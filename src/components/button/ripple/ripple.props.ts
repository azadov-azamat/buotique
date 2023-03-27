import React, {ReactNode} from "react";

export interface RippleProps {
    children: ReactNode;
    onClick: () => void;
    color?: string;
    disable?: boolean;
    outline?: boolean;
}