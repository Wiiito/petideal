import React from 'react'

const layout = ({ children }) => {
	return (
		<div className='form'>
			<div className='formContent'>
				<h3>Organização</h3>
				{children}
			</div>
		</div>
	)
}

export default layout
