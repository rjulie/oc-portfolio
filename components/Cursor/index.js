import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
// import CustomCursor from "custom-cursor-react";
// import "custom-cursor-react/dist/index.css";

import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState();

  const getCusomColor = () => {
    if (theme.theme === "dark") {
      return "#fff";
    } else if (theme.theme === "light") {
      return "#000";
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      {mount && (
        // <CustomCursor
        //   targets={[".link"]}
        //   customClass="custom-cursor"
        //   dimensions={30}
        //   fill={getCusomColor()}
        //   smoothness={{
        //     movement: 0.2,
        //     scale: 0.1,
        //     opacity: 0.2,
        //   }}
        //   targetOpacity={0.5}
        //   targetScale={2}
        // />

        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color={getCusomColor()}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />


      )}
    </>
  );
};

export default Cursor;
