import HomeUserButtons from '@/components/HomeUserButtons'
import Image from 'next/image'

const Faq = () => {
	return (
		<>
			<div className='fixed h-screen w-screen top-0 left-0'>
				<Image
					src='/authPageBackground.svg'
					fill
					style={{ objectFit: 'cover' }}
					alt='background'
				/>
			</div>
			<div className='absolute right-4 top-4 z-50'>
				<HomeUserButtons />
			</div>
			<section className='relative w-full my-16'>
				<h3 className='text-primary text-center font-bold text-5xl mt-24'>
					Perguntas Frequentes
				</h3>
				<div className='lg:max-w-[60vw] bg-trueWhite shadow-lg rounded-2xl overflow-hidden mx-4 lg:mx-auto mt-8'>
					<article className='relative border-b border-gray'>
						<label htmlFor='question1' className='w-full cursor-pointer'>
							<div className='px-12 py-4 flex justify-between'>
								<span>Quem pode usar o PETIDEAL?</span>
								<span className='text-pastel font-bold text-xl'>{'>'}</span>
							</div>
						</label>
						<input
							type='radio'
							name='selection'
							id='question1'
							className='peer hidden'
						/>
						<div className='peer-checked:bg-gray w-5 h-5 bg-primary absolute top-7 left-6 transform -translate-x-1/2 -translate-y-1/2 rounded-full'></div>
						<div className='peer-checked:h-auto overflow-hidden w-full h-0 bg-white transition-all duration-300 ease-in-out shadow-inner px-4 peer-checked:py-2 text-justify'>
							A plataforma está disponível para:
							<ul className='list-disc px-4'>
								<li>
									Pessoas físicas interessadas em adotar ou apadrinhar animais.
								</li>
								<li>
									Organizações e ONGs que desejam cadastrar seus animais para
									adoção
								</li>
							</ul>
						</div>
					</article>
					<article className='relative border-b border-gray'>
						<label htmlFor='question2' className='w-full cursor-pointer'>
							<div className='px-12 py-4 flex justify-between'>
								<span>Quais são os requisitos para adotar um animal?</span>
								<span className='text-pastel font-bold text-xl'>{'>'}</span>
							</div>
						</label>
						<input
							type='radio'
							name='selection'
							id='question2'
							className='peer hidden'
						/>
						<div className='peer-checked:bg-gray w-5 h-5 bg-primary absolute top-7 left-6 transform -translate-x-1/2 -translate-y-1/2 rounded-full'></div>
						<div className='peer-checked:h-auto overflow-hidden w-full h-0 bg-white transition-all duration-300 ease-in-out shadow-inner px-4 peer-checked:py-2 text-justify'>
							Os requisitos podem variar conforme as políticas das organizações
							parceiras, mas geralmente incluem:
							<ul className='list-disc px-4'>
								<li>Ter mais de 18 anos.</li>
								<li>
									Comprovar disponibilidade para cuidados básicos e bem-estar do
									animal.
								</li>
								<li>
									Concordar com termos de adoção responsável definidos pela ONG.
								</li>
							</ul>
						</div>
					</article>
					<article className='relative border-b border-gray'>
						<label htmlFor='question3' className='w-full cursor-pointer'>
							<div className='px-12 py-4 flex justify-between'>
								<span>Como funciona após a conexão entre pessoa e animal?</span>
								<span className='text-pastel font-bold text-xl'>{'>'}</span>
							</div>
						</label>
						<input
							type='radio'
							name='selection'
							id='question3'
							className='peer hidden'
						/>
						<div className='peer-checked:bg-gray w-5 h-5 bg-primary absolute top-7 left-6 transform -translate-x-1/2 -translate-y-1/2 rounded-full'></div>
						<div className='peer-checked:h-auto overflow-hidden w-full h-0 bg-white transition-all duration-300 ease-in-out shadow-inner px-4 peer-checked:py-2 text-justify'>
							Após a conexão ser estabelecida pela plataforma, cabe ao adotante
							entrar em contato diretamente com a instituição responsável pelo
							animal. As informações de contato da organização estarão
							disponíveis no perfil do pet selecionado.
							<br />É importante destacar que o PETIDEAL não realiza o processo
							de adoção diretamente. Nosso objetivo é facilitar a conexão entre
							pessoas interessadas em adotar e organizações que possuem animais
							disponíveis para adoção. Garantimos que você terá acesso às
							informações necessárias para seguir com o processo junto à
							instituição parceira .
						</div>
					</article>
					<article className='relative border-b border-gray'>
						<label htmlFor='question4' className='w-full cursor-pointer'>
							<div className='px-12 py-4 flex justify-between'>
								<span>Não apareceu nenhum animal para mim, o que fazer?</span>
								<span className='text-pastel font-bold text-xl'>{'>'}</span>
							</div>
						</label>
						<input
							type='radio'
							name='selection'
							id='question4'
							className='peer hidden'
						/>
						<div className='peer-checked:bg-gray w-5 h-5 bg-primary absolute top-7 left-6 transform -translate-x-1/2 -translate-y-1/2 rounded-full'></div>
						<div className='peer-checked:h-auto overflow-hidden w-full h-0 bg-white transition-all duration-300 ease-in-out shadow-inner px-4 peer-checked:py-2'>
							Se nenhum animal foi indicado como compatível no momento, isso
							pode significar que:
							<ul className='list-disc px-4'>
								<li>
									Não há ONGs cadastradas na sua região: Como o sistema depende
									das informações fornecidas pelas organizações parceiras, pode
									ser que não existam ONGs próximas a você registradas na
									plataforma no momento.
								</li>
								<li>
									Falta de compatibilidade: Pode não haver nenhum animal
									atualmente cadastrado que atenda aos critérios que você
									informou no questionário.
								</li>
							</ul>
							<h6 className='font-bold'>Mas não desanime!</h6>
							Novas organizações estão sempre se cadastrando na plataforma,
							ampliando as possibilidades de conexão entre adotantes e animais.
							Além disso, os animais disponíveis são constantemente atualizados
							pelas ONGs já cadastradas.
						</div>
					</article>
					<article className='relative'>
						<label htmlFor='question5' className='w-full cursor-pointer'>
							<div className='px-12 py-4 flex justify-between'>
								<span>Posso adotar mais de um animal?</span>
								<span className='text-pastel font-bold text-xl'>{'>'}</span>
							</div>
						</label>
						<input
							type='radio'
							name='selection'
							id='question5'
							className='peer hidden'
						/>
						<div className='peer-checked:bg-gray w-5 h-5 bg-primary absolute top-7 left-6 transform -translate-x-1/2 -translate-y-1/2 rounded-full'></div>
						<div className='peer-checked:h-auto overflow-hidden w-full h-0 bg-white transition-all duration-300 ease-in-out shadow-inner px-4 peer-checked:py-2'>
							Sim, é possível adotar mais de um animal. No entanto, recomendamos
							que você espere um tempo para observar a adaptação do primeiro
							animal ao novo lar antes de considerar uma nova adoção.
							<br />
							Após esse período, você pode refazer o formulário, atualizando
							algumas informações com base na experiência com o primeiro animal.
							Isso ajudará a garantir que você e seu pet tenham maior sucesso ao
							encontrar um novo companheiro compatível, promovendo um ambiente
							harmonioso para todos.
						</div>
					</article>
				</div>
			</section>
		</>
	)
}

export default Faq
