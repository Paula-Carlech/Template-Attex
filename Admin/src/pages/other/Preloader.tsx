import { useEffect, useState } from 'react'

import Ecommerce from '../dashboard/ecommerce'

const PreloaderPages = () => {

  const [loadind, setLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 1500)
  },[])

  return (
    <>
      {
        loadind ? <div id="preloader">
          <div id="status">
            <div className="bouncing-loader"><div></div><div></div><div></div></div>
          </div>
        </div> : <Ecommerce pageTitle='Preloader' />
      }
    </>

  )
}

export default PreloaderPages