/* eslint-disable */
import { ChangeEventHandler, useCallback, useState } from "react";
import "./App.css";
import Dialog from "./Dialog";
import styles from "./test.module.css";

function App() {
    const [type, setType] = useState("");
    const [count, setCount] = useState(1);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogChanged, setDialogChanged] = useState(false);
    const typeChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        setType(e.target.value);
    }, []);
    const countChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        const numberInput = Number(e.target.value);
        if (isNaN(numberInput)) return;
        setCount(numberInput);
    }, []);
    const showAlert = useCallback(() => {
        alert(`نوع: ${type}`);
    }, [type]);
    const openDialog = useCallback(() => {
        setDialogOpen(true);
        setDialogChanged(false);
    }, []);
    const closeDialog = useCallback(() => {
        setDialogOpen(false);
        setDialogChanged(true);
    }, []);

    return (
        <div className={styles.container}>
            <span className={styles.label}>نوع:</span>
            <input value={type} onChange={typeChange} className={styles.input} />
            <div className={styles.buttonsWrapper}>
                <button onClick={showAlert} className={`${styles.button} ${styles.messageBtn}`}>
                    پیغام
                </button>
                <button onClick={openDialog} className={`${styles.button} ${styles.submitBtn}`}>
                    تأیید
                </button>
            </div>

            <div
                id="output"
                style={{ padding: "1em", border: "1px solid black" }}
                className={styles.output}
            >
                خروجی:
                {dialogChanged && (
                    <>
                        <div>{type}</div>
                        <div>{count}</div>
                    </>
                )}
            </div>

            <Dialog isOpen={dialogOpen} onClose={closeDialog}>
                <span>نوع: {type}</span>
                <br />
                <span>تعداد:</span>
                <input type="number" value={count} onChange={countChange} />
                <br />
                <button onClick={closeDialog}>تأیید</button>
            </Dialog>
        </div>
    );
}

export default App;
