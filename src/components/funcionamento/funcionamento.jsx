import Image from 'next/image'

import './styles.scss'

const Funcionamento = ({ dados, pesquisa, par }) => {
	return (
		<section>
			<h3 className='text-3xl md:text-5xl uppercase font-bold text-primary text-center mt-4'>
				Funcionamento
			</h3>
			<div className='flex flex-col lg:flex-row mt-10 px-8 md:px-16 lg:px-24 gap-9 lg:gap-12'>
				<article className='article'>
					<div className='articleHeader'>
						<div className='articleHeaderIcon'>
							<div className='articleHeaderIconBackground'>
								<Image
									src='/icons/file.svg'
									height={48}
									width={48}
									alt='fileIcon'
								/>
							</div>
						</div>
						<h4>Coleta de dados</h4>
					</div>
					<div className='articleText'>{dados}</div>
				</article>
				<article className='article'>
					<div className='articleHeader'>
						<div className='articleHeaderIcon'>
							<div className='articleHeaderIconBackground'>
								<Image
									src='/icons/search.svg'
									height={48}
									width={48}
									alt='searchIcon'
								/>
							</div>
						</div>
						<h4>Análise e pesquisa detalhada</h4>
					</div>
					<div className='articleText'>{pesquisa}</div>
				</article>
				<article className='article'>
					<div className='articleHeader'>
						<div className='articleHeaderIcon'>
							<div className='articleHeaderIconBackground'>
								<Image
									src='/icons/paw.svg'
									height={52}
									width={48}
									alt='pawIcon'
								/>
							</div>
						</div>
						<h4>O par ideal</h4>
					</div>
					<div className='articleText'>{par}</div>
				</article>
			</div>
		</section>
	)
}

export default Funcionamento
