import React, {useEffect } from "react";
import NaviagtionMenu from "../NaviagtionMenu";
import { useHistory } from "react-router-dom";
import Layout from "../Layout";
import Window from "../Window";

import "./Dashboard.css";

function Dashboard({section}) {
  let history = useHistory();

  useEffect(() => {
    section.updateBoth(1,1);
  });

  const updateHistory = (path) => {
    history.push(path);
  };

  return(
  <div>
    {/* <Layout> */}
      {/* <NaviagtionMenu updateHistory={updateHistory} section={section}></NaviagtionMenu> */}
      
      <Window gridArea="okno1" text="ZLECENIA">
        ius excepturi praesentium blanditiis in!
      </Window>
      <Window gridArea="okno2" text="PRACA MASZYN">
        przykładowy tekst
      </Window>
      <Window gridArea="okno3" text="WIDOK LINII">
        przykładowy tekst
      </Window>
    {/* </Layout> */}
  </div>);
}

export default Dashboard;
