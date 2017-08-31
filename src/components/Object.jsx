import React from 'react'
import Attribute from "./Attribute"
const Object = ({id}) => (
	<div>
		<div style={{backgroundColor:'#ddd', padding:20}}>
			definition:
		</div>
		<div style={{backgroundColor:'#ddd', padding:20}}>
			value:
			<Attribute attributeId='abc' values={['x', 'y']}></Attribute>
		</div>
	</div>

)

export default Object
