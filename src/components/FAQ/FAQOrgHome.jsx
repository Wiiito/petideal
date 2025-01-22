import Image from 'next/image'
import Link from 'next/link'
import './faqButtonStyles.scss'

const FAQOrgHome = () => {
	return (
		<div className='bg-darker pt-36'>
			<div className='lg:max-w-[60vw] px-8 lg:px-0 mx-auto text-center text-white font-bold text-2xl'>
				Consulte nossa seção de Perguntas Frequentes para encontrar respostas às
				dúvidas mais comuns. Se a sua pergunta não estiver lá, entre em contato
				conosco e ficaremos felizes em ajudar.
			</div>
			<div className='flex justify-center mt-20'>
				<Link href='/faq'>
					<div className='px-8 py-4 text-white font-bold text-xl bg-lightPastel rounded-full box-shadow'>
						Perguntas Frequentes
					</div>
				</Link>
			</div>
			<footer className='mt-24'>
				<Image
					src='footerOrg.svg'
					width={1366}
					height={185}
					className='w-full'
					alt='footer'
				/>
			</footer>
		</div>
	)
}

export default FAQOrgHome
