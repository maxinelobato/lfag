import {
  BenefitsGridLi,
  BenefitsGridLiDiv,
  BenefitsGridLiH1,
  BenefitsGridLiIcon,
  BenefitsGridLiParagraph,
  BenefitsGridSection,
  BenefitsGridUl,
  BenefitsH1,
  BenefitsParagraph,
  BenefitsSpan,
  BenefitsSection,
} from './BenefitsComponents'

export function Benefits() {
  const featuresBenefits = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#32485F"
          viewBox="0 0 256 256"
        >
          <path d="M232,88.86V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H152v24a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14a55.87,55.87,0,0,0,0-78.28ZM128,144H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm88,99.06-20.42-10.22a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0ZM192,168a40,40,0,1,1,40-40A40,40,0,0,1,192,168Z"></path>
        </svg>
      ),
      title: 'Expertise Especializada',
      desc: 'Conte com uma profissional altamente qualificada e experiente em segurança do trabalho, pronta para personalizar soluções eficazes para sua empresa.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#32485F"
          viewBox="0 0 256 256"
        >
          <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"></path>
        </svg>
      ),
      title: 'Redução de Riscos e Custos',
      desc: 'Minimize acidentes e consequentes custos com tratamento médico, indenizações e paralisações, aumentando a rentabilidade do seu negócio.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#32485F"
          viewBox="0 0 256 256"
        >
          <path d="M52.69,99.31a16,16,0,0,1,0-22.63l64-64a16,16,0,0,1,22.63,22.63l-64,64a16,16,0,0,1-22.63,0Zm190.63,17.37a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.62h0a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.68ZM205.66,98.34l-48-48a8,8,0,0,0-11.31,0l-56,56a8,8,0,0,0,0,11.31L103,130.34,28.69,204.69a16,16,0,0,0,22.62,22.62L125.66,153l12.69,12.69a8,8,0,0,0,11.31,0l56-56A8,8,0,0,0,205.66,98.34Z"></path>
        </svg>
      ),
      title: 'Conformidade Legal Garantida',
      desc: 'Mantenha-se em conformidade com todas as normas e regulamentações de segurança ocupacional, evitando multas e penalidades.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#32485F"
          viewBox="0 0 256 256"
        >
          <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-15.08,15.09-40,40a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm18.24-18.24L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Z"></path>
        </svg>
      ),
      title: 'Cultura de Prevenção',
      desc: 'Promova uma cultura organizacional focada na prevenção de acidentes, melhorando o moral e a satisfação dos colaboradores.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#32485F"
          viewBox="0 0 256 256"
        >
          <path d="M240,160v24a16,16,0,0,1-16,16H115.93a4,4,0,0,1-3.24-6.35L174.27,109a8.21,8.21,0,0,0-1.37-11.3,8,8,0,0,0-11.37,1.61l-72,99.06A4,4,0,0,1,86.25,200H32a16,16,0,0,1-16-16V161.13c0-1.79,0-3.57.13-5.33a4,4,0,0,1,4-3.8H48a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,47.73,136H23.92a4,4,0,0,1-3.87-5c12-43.84,49.66-77.13,95.52-82.28a4,4,0,0,1,4.43,4V80a8,8,0,0,0,8.53,8A8.17,8.17,0,0,0,136,79.73V52.67a4,4,0,0,1,4.43-4A112.18,112.18,0,0,1,236.23,131a4,4,0,0,1-3.88,5H208.27a8.17,8.17,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h27.92a4,4,0,0,1,4,3.86C240,157.23,240,158.61,240,160Z"></path>
        </svg>
      ),
      title: 'Aumento da Produtividade',
      desc: 'Com um ambiente de trabalho seguro e saudável, observe um aumento significativo na produtividade e na qualidade do trabalho realizado.',
    },
  ]
  return (
    <>
      <BenefitsH1>
        Como você irá se beneficiar ao{' '}
        <BenefitsSpan>contratar a LFAG</BenefitsSpan>
      </BenefitsH1>
      <BenefitsParagraph>
        São mais de 20 anos de Expertise em Segurança do Trabalho
      </BenefitsParagraph>
      <BenefitsSection>
        <BenefitsGridSection>
          <BenefitsGridUl>
            {featuresBenefits.map((item, idx) => (
              <BenefitsGridLi key={idx}>
                <BenefitsGridLiIcon>{item.icon}</BenefitsGridLiIcon>
                <BenefitsGridLiDiv>
                  <BenefitsGridLiH1>{item.title}</BenefitsGridLiH1>
                  <BenefitsGridLiParagraph>{item.desc}</BenefitsGridLiParagraph>
                </BenefitsGridLiDiv>
              </BenefitsGridLi>
            ))}
          </BenefitsGridUl>
        </BenefitsGridSection>
      </BenefitsSection>
    </>
  )
}
