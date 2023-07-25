/* eslint-disable */
import {
    ChangeEventHandler,
    forwardRef,
    Ref,
    useCallback,
    useImperativeHandle,
    useState,
} from "react";
import Dialog from "./Dialog";
import styles from "./test.module.css";

type Props = {
    type: string;
    setDialogChanged: React.Dispatch<React.SetStateAction<boolean>>;
    initCount: number;
};

function CountEditor({ type, setDialogChanged, initCount }: Props, ref: Ref<number>) {
    const [count, setCount] = useState(initCount);
    const [dialogOpen, setDialogOpen] = useState(false);
    const countChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        const numberInput = Number(e.target.value);
        if (isNaN(numberInput)) return;
        setCount(numberInput);
    }, []);
    const openDialog = useCallback(() => {
        setDialogOpen(true);
        setDialogChanged(false);
    }, []);
    const closeDialog = useCallback(() => {
        setDialogOpen(false);
        setDialogChanged(true);
    }, []);

    useImperativeHandle(ref, () => count, [count]);

    return (
        <>
            <button onClick={openDialog} className={`${styles.button} ${styles.submitBtn}`}>
                تأیید
            </button>

            <Dialog isOpen={dialogOpen} onClose={closeDialog}>
                <span>نوع: {type}</span>
                <br />
                <span>تعداد:</span>
                <input type="number" value={count} onChange={countChange} />
                <br />
                <button onClick={closeDialog}>تأیید</button>
            </Dialog>
        </>
    );
}

export default forwardRef(CountEditor);
