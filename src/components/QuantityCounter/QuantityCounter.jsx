import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./QuantityCounter.module.css";

const QuantityCounter = forwardRef(function QuantityCounter(props, ref) {
  const [value, setValue] = useState(1);

  const handleDecrement = () => {
    if (value - 1 > 0) {
      setValue(value - 1);
    }
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        getChildValue: () => {
          return value;
        },
      };
    },
    [value]
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.decrement} onClick={handleDecrement}>
          &minus;
        </div>
        <div className={styles.value}>{value}</div>
        <div className={styles.increment} onClick={handleIncrement}>
          {" "}
          +{" "}
        </div>
      </div>
    </>
  );
});

export default QuantityCounter;
