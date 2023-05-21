import { useEffect } from "react"

const useTitlte=title=>{
    useEffect(()=>{
        document.title=`KidsZones|${title}`
    },[title])
}

export default useTitlte;