'use client'

import { RevealWrapper } from 'next-reveal'
import {
  FaqDetails,
  FaqDetailsParagraph,
  FaqH1,
  FaqParagraph,
  FaqSectionsRoot,
  FaqSpace,
  FaqSpan,
  FaqSummary,
  FaqSummaryH1,
  FaqSummarySpanIcon,
} from './FaqComponents'

export function Faq() {
  const faqFeatures = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Não temos orçamento para isso',
      desc: 'Nossa consultoria é um investimento inteligente que resulta em economia a longo prazo, reduzindo custos com acidentes e melhorando a eficiência operacional.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Já temos medidas básicas de segurança implementadas',
      desc: ' Ainda que tenha medidas básicas, a segurança do trabalho é um campo complexo que requer atualização constante e análise especializada para garantir a máxima eficácia.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Não acreditamos que teremos muitos acidentes',
      desc: 'Prevenir é sempre melhor que remediar. Nossa consultoria visa evitar acidentes antes mesmo que aconteçam, protegendo seus colaboradores e seu negócio.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Pra quem é recomendado nossos serviços?',
      desc: 'Atendemos empresários, profissionais de RH, setor Administrativo, Técnicos, Engenheiros de Segurança, Advogados, entre outros.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Qual é o prazo para a entrega dos serviços?',
      desc: 'O prazo é determinado após uma avaliação de cada necessidade do cliente.',
    },
  ]

  return (
    <>
      <RevealWrapper delay={500} reset={true}>
        <FaqH1>
          Perguntas <FaqSpan>frequentes</FaqSpan>
        </FaqH1>
        <FaqParagraph>Dúvidas sobre os serviços</FaqParagraph>
      </RevealWrapper>
      <FaqSectionsRoot>
        <FaqSpace>
          {faqFeatures.map((item, idx) => (
            <FaqDetails key={idx}>
              <FaqSummary>
                <FaqSummaryH1>{item.title}</FaqSummaryH1>
                <FaqSummarySpanIcon>{item.icon}</FaqSummarySpanIcon>
              </FaqSummary>
              <FaqDetailsParagraph>{item.desc}</FaqDetailsParagraph>
            </FaqDetails>
          ))}
        </FaqSpace>
      </FaqSectionsRoot>
    </>
  )
}
