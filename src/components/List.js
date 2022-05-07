import React, { useEffect, useState } from 'react'

export default function List({getItems}) {
    const [items,setItem] = useState([]);
    useEffect(() => {
      setItem(getItems())
      console.log('Updating Item')//(toggle) will also invoke when theme change because whole file is rerendered when theme is cahnged using toggle but this can be avoided using usecallback with toggle theme function and passing nu,ber as change parameter that will make function recretion only when number is changed
        //usememo may appear same as useCallback bbut major difference is that use memo setup function value in it but usecallback take up whole function and let us pass value to internal function means inside use callback
        //usecallback is used if the function inside usecallback is making application really slow and making page rerender time long so based on parameter passed in usecallbak it will be only rendered when parameter changes hence its value is memod/cached liked useMemo
    }
    , [getItems])
    

  return (
    items.map(item=><div key={item}>{item}</div>)
  )
}

