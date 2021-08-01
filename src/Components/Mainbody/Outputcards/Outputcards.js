import React, { useState } from "react";
import { Card } from "./Outputcards.style";
import { Text2 } from "../Mainbody.style";
import { Button } from "../../Button.style";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Outputcards({ output }) {
  const [copied, setcopied] = useState(false);
  let cards = "loading....";
  if (output.length > 0) {
    cards = output.map((o) => {
      return (
        <Card key={o.code}>
          <Text2
            colormobile="#232127"
            fontsize="20px"
            fontsizemobile="16px"
            textalignmobile="left"
          >
            {o.original_link}
          </Text2>
          <hr />
          <div>
            <Text2
              marginmobile=".5rem"
              fontsize="20px"
              fontsizemobile="16px"
              textalignmobile="left"
              color="#2acfcf"
            >
              {o.full_short_link}
            </Text2>
            <CopyToClipboard
              text={o.full_short_link}
              onCopy={() => setcopied(true)}
            >
              <Button
                // key={o.code}
                padding="12px 40px"
                fontweight="700"
                fontsize="17px"
                backgroundcolor="#2acfcf"
                radius="10px"
                color="white"
                widthmobile="100%"
                marginleft="1.4rem"
                marginleftmobile="0"
                backgroundcolorfocus="#3b3054"
              >
                Copy
              </Button>
            </CopyToClipboard>
          </div>
        </Card>
      );
    });
  }
  return <>{cards}</>;
}

export default Outputcards;
