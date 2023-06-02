import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({children}) =>{
   const [isOpen,setIsOpen] = useState(false);
   const handleClone =() =>{
    setIsOpen(false)
   }
    return(
        <SidebarContext.Provider value={{isOpen,setIsOpen,handleClone}}>
            {children}
        </SidebarContext.Provider>
    )
}