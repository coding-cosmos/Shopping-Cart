import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./QuantityCounter.module.css";
import PropTypes from "prop-types";

const QuantityCounter = forwardRef(function QuantityCounter(
  { quantity = 1, onClick },
  ref
) {
  const [value, setValue] = useState(quantity);

  const handleDecrement = () => {
    if (value - 1 > 0) {
      onClick(value - 1);
      setValue(value - 1);
    }
  };

  const handleIncrement = () => {
    onClick(value + 1);
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

QuantityCounter.propTypes = {
  quantity: PropTypes.number,
  onClick: PropTypes.func,
};

export default QuantityCounter;
