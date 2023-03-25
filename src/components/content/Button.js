import React, { Children, useState } from "react";
import "./Button.css";

function Ripple({ x, y, size, onDestroy }) {
  const [animate, setAnimate] = useState(true);

  function handleAnimationEnd() {
    setAnimate(false);
    onDestroy();
  }

  return (
    animate && (
      <span
        className="ripple"
        style={{
          left: `${x - size / 2}px`,
          top: `${y - size / 2}px`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        onAnimationEnd={handleAnimationEnd}
      />
    )
  );
}

function Button({children, activeTab, onClickE}) {
  const [ripples, setRipples] = useState([]);

  function createRipple(event) {
    onClickE();
    const button = event.currentTarget;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const x = event.clientX - button.getBoundingClientRect().left;
    const y = event.clientY - button.getBoundingClientRect().top;

    const newRipple = {
      key: Date.now(),
      x,
      y,
      size: radius * 2,
    };

    setRipples([...ripples, newRipple]);
  }

  function handleRippleDestroy(key) {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key));
  }

  return (
    <button className={`buttonS ${activeTab}`} onClick={createRipple}>
      {ripples.map((ripple) => (
        <Ripple
          key={ripple.key}
          {...ripple}
          onDestroy={() => handleRippleDestroy(ripple.key)}
        />
      ))}
      <span>{children}</span>
    </button>
  );
}

export default Button;
