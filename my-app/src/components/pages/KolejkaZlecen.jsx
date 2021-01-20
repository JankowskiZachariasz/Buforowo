import React, {useEffect } from "react";
import NaviagtionMenu from "../NaviagtionMenu";
import { useHistory } from "react-router-dom";
import Layout from "../Layout";
import Window from "../Window";

import "./KolejkaZlecen.css";


function KolejkaZlecen({section}) {
  let history = useHistory();

  useEffect(() => {
    section.updateBoth(2,1);
  });


  const updateHistory = (path) => {
    history.push(path);
  };

  return(
  <div>
    <Layout>
        <NaviagtionMenu updateHistory={updateHistory} section={section}></NaviagtionMenu>
        
          <Window gridArea="okno1" text="KOLEJKA ZLECEŃ"> ius excepturi praesentium blanditiis in!</Window>
          <Window gridArea="okno2" text="SZCZEGÓŁY ZLECENIA" >przykładowy tekst</Window>

    </Layout>
  </div>);
}
  
 

  export default KolejkaZlecen;
  

