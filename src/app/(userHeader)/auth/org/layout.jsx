import React from 'react'
import '@/styles/orgForm.scss'

const layout = ({ children }) => {
	return (
		<>
			<div className='orgForm'>
				<h3 className='mb-4'>Organização</h3>
				{children}
			</div>
		</>
	)
}

export default layout
