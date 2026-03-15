import React from 'react'
import { LuUserCheck, LuActivity, LuClipboardList, LuMapPin } from 'react-icons/lu'

const differentials = [
  {
    Icon: LuUserCheck,
    title: 'Atendimento conduzido pelas próprias dentistas',
    description:
      'Nada de equipe rotativa. Cada paciente é acompanhado diretamente pelas profissionais responsáveis.',
  },
  {
    Icon: LuActivity,
    title: 'Especialização em DTM e dor orofacial',
    description:
      'Experiência clínica no diagnóstico e tratamento das disfunções da ATM, bruxismo e dores faciais.',
  },
  {
    Icon: LuClipboardList,
    title: 'Planejamento individualizado',
    description:
      'Cada caso é avaliado com critério técnico, priorizando função, estabilidade e previsibilidade.',
  },
  {
    Icon: LuMapPin,
    title: 'Experiência consolidada em Belo Horizonte',
    description:
      'Mais de 20 anos de atuação no mesmo local, com acompanhamento contínuo dos pacientes.',
  },
]

function IconCircle({ Icon }: { Icon: React.ComponentType<React.SVGAttributes<SVGElement>> }) {
  return (
    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mx-auto mb-4">
      <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
    </div>
  )
}

export default function Differentials() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-offWhite">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por que escolher nosso consultório?
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Experiência, especialização e acompanhamento direto pelas próprias dentistas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
            >
              <IconCircle Icon={differential.Icon} />
              <h3 className="text-xl font-bold text-primary mb-3">
                {differential.title}
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
