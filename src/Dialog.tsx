import { MouseEventHandler, ReactNode } from "react";

const stopPropagation: MouseEventHandler = (e) => e.stopPropagation();

export default function Dialog(props: {
    isOpen: boolean;
    onClose?: () => void;
    children?: ReactNode;
}) {
    if (!props.isOpen) {
        return null;
    }
    return (
        <div
            style={{ position: "fixed", display: "flex", inset: 0, background: "#0008" }}
            onClick={props.onClose}
        >
            <div
                style={{ margin: "auto", padding: "3em", background: "white" }}
                onClick={stopPropagation}
            >
                {props.children}
            </div>
        </div>
    );
}
