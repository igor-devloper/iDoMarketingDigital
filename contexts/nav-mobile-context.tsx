"use client"

import { createContext, useState, useContext } from 'react'
import { Dispatch, SetStateAction } from "react";



const NavMobileContext = createContext<INavMobileContext>(null!);

interface INavMobileContext {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export function NavMobileProvider({children} : {children: React.ReactNode}) {
  const [isVisible, setIsVisible] = useState(false)
  return(
   <NavMobileContext.Provider value={{isVisible, setIsVisible}}>{children}</NavMobileContext.Provider>
  )
}

export function useNavMobileContext() {
  return useContext(NavMobileContext);
}