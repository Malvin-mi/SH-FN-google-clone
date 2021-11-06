import React from "react"

import "./shortcut-widgets.css"
import DATA from "./data"

function ShortcutWidgets() {
   return (
      <div className="parent">
         <div className="shortcut-box">
            {DATA.map(item => (
               <div className="content-box">
                  <div className="icon-box">
                     <img src={item.imageUrl} alt="" />
                  </div>
                  <p>{item.title}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default ShortcutWidgets;