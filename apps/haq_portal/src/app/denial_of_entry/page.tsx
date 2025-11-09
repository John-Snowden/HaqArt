import { DenialOfEntryScreen } from "@/screens/denialOfEntry";
import { DenialOfEntryContext } from "@/context/DenialOfEntry";

import stylesGlobal from "../../stylesGlobal.module.css";

export default function DenialOfEntry() {
  return (
    <DenialOfEntryContext>
      <div className={stylesGlobal.window}>
        <DenialOfEntryScreen />
      </div>
    </DenialOfEntryContext>
  );
}
