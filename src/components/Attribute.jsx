import React from 'react'
import Object from './Object'


const Attribute = ({attributeId, values}) => {
	const valueObjects = values.map((valueId)=>(
		<Object id={valueId} key={valueId}>{valueId}</Object>
	))
	return  (
		<div>
			<Object id={attributeId}></Object> :
			<div>
				{valueObjects}
			</div>
		</div>

	)
}

export default Attribute
