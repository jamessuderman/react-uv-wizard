import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Card from "./card/card";
import * as styles from "./styles";

const ReactWizard = (props) => {
  const wizardRef = useRef(null);
  const childrenArray = [...props.children];
  const [wizard, setWizard] = useState({
    cards: props.children.length,
    current: 1,
    from: 0,
    to: 0,
  });

  const onScroll = (direction) => {
    let scrollAmount = wizard.to;
    if (direction === "forward") {
      scrollAmount -= wizardRef.current.offsetWidth;
      if (wizard.current < wizard.cards) {
        setWizard({
          ...wizard,
          current: wizard.current + 1,
          from: wizard.to,
          to: scrollAmount,
        });
      }
    } else {
      if (wizard.current !== 1) {
        scrollAmount += wizardRef.current.offsetWidth;
        setWizard({
          ...wizard,
          current: wizard.current - 1,
          from: wizard.to,
          to: scrollAmount,
        });
      }
    }
  };

  return (
    <div ref={wizardRef} style={styles.mainContainer}>
      <motion.div
        style={{
          ...styles.scollableContainer,
          width: `${100 * wizard.cards}%`,
        }}
        inition={{ x: wizard.from }}
        animate={{ x: wizard.to }}
        transition={{ duration: 0.25 }}
      >
        {childrenArray.map((child, index) => {
          return (
            <Card
              current={wizard.current}
              length={wizard.cards}
              background={props.background}
              color={props.color}
              content={child}
              scroll={onScroll}
              key={index}
              identifier={index}
              dots={props.dots}
              shadow={props.shadow}
              submit={props.submit}
              titlePosition={props.titlePosition ? props.titlePosition : null}
              title={props.titles ? props.titles[index] : null}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default ReactWizard;
