import Image from 'next/image'

import './styles.scss'

const Funcionamento = () => {
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
					<div className='articleText'>
						Iniciamos com uma série de perguntas estudadas para entender suas
						preferências e estilo de vida. Esses dados são essenciais para
						encontrar o pet ideal para você.
					</div>
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
					<div className='articleText'>
						Com as suas respostas em mãos (ou melhor, em patas), começamos a
						investigar. Nossos detetives do bem (não os peludos, mas nossos
						algoritmos) vão procurar os pets disponíveis na sua vizinhança que
						combinam com você como queijo combina com goiabada - perfeitamente!
					</div>
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
					<div className='articleText'>
						Finalmente, é hora do match perfeito! Você conhece seu novo amigo de
						quatro patas, e eles encontram um lar para chamar de seu. Adotar um
						pet através do PetIdeal não é só ganhar um companheiro fiel, é ser o
						herói da história de um bichinho. Então, vamos lá, seu futuro
						mascote está esperando para fazer uma entrada triunfal na sua vida!
					</div>
				</article>
			</div>
		</section>
	)
}

export default Funcionamento
