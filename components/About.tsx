import Image from 'next/image';

export default function About() {
  return (
    <section id='sobre' className='section-padding bg-white'>
      <div className='container-custom'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
            Nossos profissionais
          </h2>
          <p className='text-lg text-neutral-gray max-w-2xl mx-auto'>
            Profissionalismo, acolhimento e excelência em odontologia
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
          {/* Dra. Beatriz */}
          <div className='text-center'>
            <div className='relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl'>
              <Image
                src='/images/beatriz.png'
                alt='Dra. Beatriz Alvarenga - BS Odonto'
                fill
                className='object-cover'
              />
            </div>
            <h3 className='text-2xl font-bold text-primary mb-2'>
              Dra. Beatriz Gomes de Alvarenga
            </h3>
            <p className='text-neutral-gray mb-4'>
              Especialista em dentística restauradora (estética, clareamento,
              próteses e implantes)
            </p>
            <p className='text-sm text-neutral-gray'>CRO: [25292]</p>
          </div>

          {/* Dra. Sílvia */}
          <div className='text-center'>
            <div className='relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl'>
              <Image
                src='/images/silvia.png'
                alt='Dra. Sílvia Santos - BS Odonto'
                fill
                className='object-cover'
              />
            </div>
            <h3 className='text-2xl font-bold text-primary mb-2'>
              Dra. Sílvia Regina Batista dos Santos
            </h3>
            <p className='text-neutral-gray mb-4'>
              Especialista em endodontia Realiza também tratamento de DTM e
              bruxismo, tratamento de apnéia e atendimento de crianças.
            </p>
            <p className='text-sm text-neutral-gray'>CRO: [24836]</p>
          </div>

          <div className='text-center'>
            <div className='relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl'>
              <Image
                src='/images/afonso-lara.jpeg'
                alt='Dr. Afonso Lara - BS Odonto'
                fill
                className='object-cover'
              />
            </div>
            <h3 className='text-2xl font-bold text-primary mb-2'>
              Dr. Afonso Lara
            </h3>
            <p className='text-neutral-gray mb-4'>
              Especialista em cirurgia (implantes e cisos) e periodontia
              (tratamento de gengiva)
            </p>
            {/* <p className='text-sm text-neutral-gray'>CRO: [25292]</p> */}
          </div>

          {/* Dra. Cíntia Mota */}
          <div className='text-center'>
            <div className='relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl'>
              <Image
                src='/images/cintia.jpg'
                alt='Dra. Cíntia Mota'
                fill
                className='object-cover'
              />
            </div>
            <h3 className='text-2xl font-bold text-primary mb-2'>
              Dra. Cíntia Mota
            </h3>
            <p className='text-neutral-gray mb-4'>Especialista em ortodontia</p>
            {/* <p className='text-sm text-neutral-gray'>CRO: [Número do CRO]</p> */}
          </div>

          {/* Dra. Mara Cristina Amorim */}
          <div className='text-center'>
            <div className='relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl'>
              <Image
                src='/images/mara.jpg'
                alt='Dra. Mara Cristina Amorim'
                fill
                className='object-cover'
              />
            </div>
            <h3 className='text-2xl font-bold text-primary mb-2'>
              Dra. Mara Cristina Amorim
            </h3>
            <p className='text-neutral-gray mb-4'>
              Especialista em estomatologia (doenças da cavidade oral)
            </p>
            {/* <p className='text-sm text-neutral-gray'>CRO: [Número do CRO]</p> */}
          </div>
        </div>

        {/* Texto Institucional */}
        <div className='max-w-4xl mx-auto'>
          <div className='bg-neutral-offWhite p-8 md:p-12 rounded-2xl shadow-md'>
            <p className='text-lg text-neutral-gray leading-relaxed mb-6'>
              Nosso consultório é um{' '}
              <strong className='text-primary'>espaço acolhedor</strong> onde
              você encontra{' '}
              <strong className='text-primary'>
                profissionais especializados
              </strong>{' '}
              em todas as áreas da odontologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
