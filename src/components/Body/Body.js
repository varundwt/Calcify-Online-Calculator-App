import React, {useState} from 'react'
import './Body.css'

const Body = () => {
    const [value, setValue] = useState('');
  return (
    <div className='container'>
        <div className="calculator">
            <form action="">
                <div className='display'>
                    <input type="text" value={value}/>
                </div>
                <div>
                    <input type="button" value="AC" onClick={(e)=>setValue("")} className='ac'/>
                    <input type="button" value="⌫" onClick={(e)=>setValue(value.slice(0,-1))} className='delete'/>
                    <input type="button" value="." onClick={(e)=>setValue(value + e.target.value)} className='decimal'/>
                    <input type="button" value="/" onClick={(e)=>setValue(value + e.target.value)} className='divide'/>
                </div>
                <div>
                    <input type="button" value="7" onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="8" onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="9" onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="*" onClick={(e)=>setValue(value + e.target.value)} className='multiply'/>
                </div>
                <div>
                    <input type="button" value="4" onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="5" onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="6"onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="-" onClick={(e)=>setValue(value + e.target.value)} className='divide'/>
                </div>
                <div>
                    <input type="button" value="1" onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="2" onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="3" onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="+" onClick={(e)=>setValue(value + e.target.value)} className='add'/>
                </div>
                <div>
                    <input type="button" value="00" onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="0" onClick={(e)=>setValue(value + e.target.value)}/>
                    <input type="button" value="=" className='equal' onClick={(e)=>setValue(eval(value))}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Body