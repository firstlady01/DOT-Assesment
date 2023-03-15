 
import { useMemo, useState } from 'react';
export function useReactState(initialState: any){

   const [state, setState] = useState(initialState);

   const proxy = useMemo( () =>{
       return new Proxy(initialState, {
           set(obj, prop, value) {
               obj[prop] = value;
               

               setState(value);
               return true;
           }
       })
   }, [])

   return proxy
}