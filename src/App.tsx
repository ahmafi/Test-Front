/* eslint-disable */
import { ChangeEventHandler, useCallback, useRef, useState } from "react";
import "./App.css";
import CountEditor from "./CountEditor";
import styles from "./test.module.css";

const INIT_COUNT = 1;

function App() {
    const countStateRef = useRef(INIT_COUNT);
    const [type, setType] = useState("");
    const [dialogChanged, setDialogChanged] = useState(false);
    const typeChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        setType(e.target.value);
    }, []);
    const showAlert = useCallback(() => {
        alert(`نوع: ${type}`);
    }, [type]);

    return (
        <div className={styles.container}>
            <span className={styles.label}>نوع:</span>
            <input value={type} onChange={typeChange} className={styles.input} />
            <div className={styles.buttonsWrapper}>
                <button onClick={showAlert} className={`${styles.button} ${styles.messageBtn}`}>
                    پیغام
                </button>
                <CountEditor
                    ref={countStateRef}
                    initCount={INIT_COUNT}
                    type={type}
                    setDialogChanged={setDialogChanged}
                />
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
                        <div>{countStateRef.current}</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
