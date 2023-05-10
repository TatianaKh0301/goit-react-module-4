import { useState, useEffect } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const counterAIncrement = () => {
        setCounterA(prevState => prevState + 1);
    };

    const counterBIncrement = () => {
        setCounterB(prevState => prevState + 1);
    }
    
    useEffect(() => {
        const totalClicks = counterA + counterB;
        document.title = `Всего кликнули ${totalClicks} раз`;

        // console.log('totalClick', totalClicks);
    }, [counterA, counterB]);    

    return(
        <>
            <button
                    className={styles.btn}
                    type="button"
                    onClick={counterAIncrement}
                >
                    Кликнули counterA {counterA} раз
                </button>
                <button
                    className={styles.btn}
                    type="button"
                    onClick={counterBIncrement}
                >
                    Кликнули counterB {counterB} раз
                </button>
        </>
    );
}

// export default function Counter() {
//     const [counterA, setCounterA] = useState(0);
//     const [counterB, setCounterB] = useState(0);

//     const handleCounterAIncrement = () => {
//         setCounterA(prevState => prevState + 1);
//     }

//     const handleCounterBIncrement = () => {
//         setCounterB(prevState => prevState + 1);
//     }

//     useEffect(() => {
//         const totalClicks = counterA + counterB;
//         document.title = `Всего кликнули ${totalClicks} раз`;
//     }, [counterA, counterB]); 


//     return (
//         <>
//             <button
//                 className={styles.btn}
//                 type="button"
//                 onClick={handleCounterAIncrement}
//             >
//                 Кликнули counterA {counterA} раз
//             </button>

//             <button
//                 className={styles.btn}
//                 type="button"
//                 onClick={handleCounterBIncrement}
//             >
//                 Кликнули counterB {counterB} раз
//             </button>
//         </>
//     );
// };

// }
