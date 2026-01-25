import React from "react";

export default function Results() {
  return (
    <section id="resultados" className="section-padding bg-gradient-to-b from-neutral-offWhite to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Resultados que Transformam
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Veja a transformação dos nossos pacientes
          </p>
        </div>

        {/* Placeholder para galeria Antes e Depois */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-neutral-offWhite rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 aspect-[4/3] flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="text-4xl mb-4">📸</div>
                <p className="text-neutral-gray font-medium">
                  Antes e Depois
                </p>
                <p className="text-sm text-neutral-gray mt-2">
                  Em breve
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
