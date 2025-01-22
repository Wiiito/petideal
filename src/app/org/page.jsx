import Companheiro from '@/components/Companheiro'
import FAQOrgHome from '@/components/FAQ/FAQOrgHome'
import Funcionamento from '@/components/funcionamento/funcionamento'
import OrgHeader from '@/components/OrgHeader'
import OrgHero from '@/components/OrgHero'

const Org = () => {
	return (
		<>
			<OrgHeader />
			<OrgHero />
			<div className='min-h-[90vh] flex items-center py-8 bg-ultraLight'>
				<Funcionamento
					dados='Ao inserir um novo animal, você fornecerá
                    as informações necessárias e responderá a perguntas para
                    analisar o perfil do animal e seu estilo de vida. Esses
                    dados são essenciais para encontrar o humano ideal para ele.'
					pesquisa='Com as informações fornecidas, começamos a buscar. 
                    Nossos "detetives do bem" (não peludos, mas nossos algoritmos) vão
                     encontrar os adotantes na sua região que se encaixam 
                     perfeitamente com os animais disponíveis, como queijo e goiabada!'
					par='Finalmente, é hora do match perfeito! Seus animais se conectam 
                    com adotantes ideais, prontos para oferecer um lar cheio de amor. 
                    Ao se conectar com a PetIdeal, você facilita essa união e ajuda a 
                    escrever uma nova história para cada um. Então, vamos lá, seus animais
                     estão prontos para embarcar em uma jornada de amor e cuidado!'
				/>
			</div>
			<Companheiro />
			<FAQOrgHome />
		</>
	)
}

export default Org
