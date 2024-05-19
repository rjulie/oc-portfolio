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
          <AnimatedCursor
            innerStyle={{
              backgroundColor: '#cdb4db'
            }}
            // color='255, 255, 255'
            color='255, 200, 221'
            innerSize={10}
            outerSize={10}
            outerAlpha={0.2}
            innerScale={1}
            outerScale={5}
            clickables={[
              'a',
              'button',
              '.link'
            ]}
          />

      )}
    </>
  );
};

export default Cursor;
