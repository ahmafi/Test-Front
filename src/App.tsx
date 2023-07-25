/* eslint-disable */
import { ChangeEventHandler, useCallback, useState } from "react";
import "./App.css";
import Dialog from "./Dialog";

function App() {
    const [type, setType] = useState("");
    const [count, setCount] = useState(1);
    const [dialogOpen, setDialogOpen] = useState(false);
    const typeChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        setType(e.target.value);
    }, []);
    const showAlert = useCallback(() => {
        alert(`نوع: ${type}`);
    }, [type]);
    const closeDialog = useCallback(() => {
        setDialogOpen(false);
    }, []);

    return (
        <div>
            <span>نوع:</span>
            <input value={type} onChange={typeChange} />
            <button onClick={showAlert}>پیغام</button>
            <button>تأیید</button>

            <div id="output" style={{ padding: "1em", border: "1px solid black" }}>
                خروجی:
            </div>

            <Dialog isOpen={dialogOpen} onClose={closeDialog}>
                <span>نوع: {type}</span>
                <br />
                <span>تعداد:</span>
                <input type="number" value={count} />
                <br />
                <button onClick={closeDialog}>تأیید</button>
            </Dialog>
        </div>
    );
}

export default App;
