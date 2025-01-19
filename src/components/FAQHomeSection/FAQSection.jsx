import Link from 'next/link'
import './faqButtonStyles.scss'
import Image from 'next/image'

const FAQSection = () => {
	return (
		<div className='bg-reallyLight pt-40 text-center'>
			<p className='font-bold px-10 md:px-40 lg:px-60 text-xl mb-12'>
				Consulte nossa seção de Perguntas Frequentes para encontrar respostas às
				dúvidas mais comuns. Se a sua pergunta não estiver lá, entre em contato
				conosco e ficaremos felizes em ajudar.
			</p>
			<div className='flex justify-center mb-36'>
				<Link href='FAQ'>
					<div className='px-12 py-4 bg-lightPastel font-bold rounded-full box-shadow text-xl text-white'>
						Perguntas frequentes
					</div>
				</Link>
			</div>
			<footer className='w-full'>
				<Image
					src='footer.svg'
					height={173}
					width={1366}
					className='w-full'
					alt='footer'
				/>
			</footer>
		</div>
	)
}

export default FAQSection
