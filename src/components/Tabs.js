import React, { useState } from 'react'

const Tabs = ({tabProp}) => {

    const [content, setContent] = useState('');

  return (
    <div>
      {/* <h1>{tabProp.length} Tabs</h1> */}
      <ul>
        {tabProp.map((tab) =>(
            <li onClick={() => setContent(tab.content)}>{tab.title}</li>
        ))}
      </ul>
      <p>{content}</p>
    </div>
  )
}

export default Tabs
