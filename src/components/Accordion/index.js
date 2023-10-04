import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { BsArrowDownShort } from "react-icons/bs";


export default function MenuExpansivel() {
  return (
    <Accordion className='accordion'>
        
      <AccordionItem
      className='accordion-item'
        header={
          <div>
            <p className='title-accordion'>Quando um carro deve ser reparado?</p> 
          </div>
        }
      >
        Existem várias categorias de diagnósticos e reparos de veículos que precisam ser realizados em determinadas situações. Veja exemplos abaixos:
      </AccordionItem>

      <AccordionItem
       width={500}
        header={
          <div>
            <p className='title-accordion'>Reparação e diagnóstico de serralheria.</p>
          </div>
        }
      >
        Essas medidas são realizadas quando são detectadas avarias decorrentes do desgaste de peças e se manifestam por batidas, sons incomuns, fluxos de líquidos, folgas entre componentes ou alterações na controlabilidade do veículo.
      </AccordionItem>

      <AccordionItem
       
        header={
          <div>
            <p className='title-accordion'>Inspeção e manutenção sazonais</p>
          </div>
        }
      >
        Antes do início da estação fria ou quente, é necessário trocar os pneus, atualizar o fluido e realizar diagnósticos dos mecanismos.
      </AccordionItem>

      <AccordionItem
        header={
          <div>
            <p className='title-accordion'>Ao viajar ou comprar um carro novo?</p>
          </div>
        }
      >
        Ao efetuar a compra de um carro ou estiver planejando uma viagem, você precisa realizar toda uma revisão do mesmo, existe compoentes que podem ser cruciais para previnir acidentes e prejuizos no veicúlo.
      </AccordionItem>

      <AccordionItem
        header={
          <div>
            <p className='title-accordion'>Inspeção e manutenção sazonais</p>
          </div>
        }
      >
        Reparação de carroçarias para mossas ou riscos na carroçaria para devolver um aspeto apresentável e completo ao veículo.
      </AccordionItem>
      <AccordionItem
        header={
          <div>
            <p className='title-accordion'>Inspeção e manutenção sazonais</p>
          </div>
        }
      >
        Isso está longe de ser uma lista completa de diagnósticos de carros. Se não houver avarias visíveis ou sintomas de mau funcionamento, recomenda-se a manutenção programada anualmente ou a cada 10-15 km. quilometragem Isso permitirá que você mantenha o desempenho da máquina e detecte possíveis defeitos nos estágios iniciais.
      </AccordionItem>


    </Accordion>
  )};