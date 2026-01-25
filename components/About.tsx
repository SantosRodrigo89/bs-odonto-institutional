import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sobre a BS Odonto
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Profissionalismo, acolhimento e excelência em odontologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Dra. Beatriz */}
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/beatriz.png"
                alt="Dra. Beatriz Alvarenga - BS Odonto"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Dra. Beatriz Alvarenga
            </h3>
            <p className="text-neutral-gray mb-4">
              Especialista em DTM, Dor Orofacial e Odontologia do Sono
            </p>
            <p className="text-sm text-neutral-gray">
              CRO: [Número do CRO]
            </p>
          </div>

          {/* Dra. Sílvia */}
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/silvia.png"
                alt="Dra. Sílvia Santos - BS Odonto"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Dra. Sílvia Santos
            </h3>
            <p className="text-neutral-gray mb-4">
              Especialista em Odontologia Estética e Reabilitação Oral
            </p>
            <p className="text-sm text-neutral-gray">
              CRO: [Número do CRO]
            </p>
          </div>
        </div>

        {/* Texto Institucional */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-offWhite p-8 md:p-12 rounded-2xl shadow-md">
            <p className="text-lg text-neutral-gray leading-relaxed mb-6">
              Na <strong className="text-primary">BS Odonto</strong>, acreditamos que cada sorriso conta uma história única. 
              Com anos de experiência e dedicação, oferecemos tratamentos personalizados que vão além da estética, 
              focando na sua saúde, bem-estar e qualidade de vida.
            </p>
            <p className="text-lg text-neutral-gray leading-relaxed mb-6">
              Nossa clínica é um espaço acolhedor onde você encontra profissionais especializados em{' '}
              <strong className="text-primary">DTM</strong>, <strong className="text-primary">bruxismo</strong>,{' '}
              <strong className="text-primary">ronco/apneia</strong> e <strong className="text-primary">odontologia estética</strong>. 
              Utilizamos tecnologia de ponta e técnicas modernas para garantir resultados excepcionais.
            </p>
            <p className="text-lg text-neutral-gray leading-relaxed">
              Nosso compromisso é com o seu conforto, segurança e satisfação. Venha conhecer a diferença que fazemos 
              na vida dos nossos pacientes em <strong className="text-primary">Belo Horizonte</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
