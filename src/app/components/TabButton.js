import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active ? "text-custom-pink border-b border-custom-pink" : "text-black ";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-custom-pink ${buttonClasses}`}>
      {children}
      </p>
        
    </button>
  )
}

export default TabButton;
