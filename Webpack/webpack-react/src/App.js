import React, { component, useEffect } from 'react'
import Hello from '@/components/Hello/index'
import _ from 'lodash';
import "./index.css";
function App () {

  const str = _.capitalize('FRED');
  const a = 1;
  return (
    <div className="wrapper">
      Hello44 World122 {str}
      <Hello/>
    </div>
  )
}

export default App