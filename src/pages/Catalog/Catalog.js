import React, { useContext } from 'react'
import { CustomContext } from '../../utils/Context'

const Catalog = () => {
  const context = useContext(CustomContext)
  return <div>{context.count}</div>
}

export default Catalog
