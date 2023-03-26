import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { useRef } from "react"
import { PageContext } from "../context/PageContext"
import Button from "./Button"
import Card from "./Card"
import Title from "./Title"
const tabItemsArray = [
  {
    id: 1,
    text: (
      <>
        <p>{`Por más de siete décadas, el Sindicato de Salud ha cumplido los propósitos y objetivos de su fundación. Aquella organización constituida en 1944 por la firme determinación de los trabajadores de dos dependencias extintas del gobierno federal, es en la actualidad, un sindicato vigoroso, vanguardista, eficaz, unido, prestigiado y democrático, con la membresía más numerosa de toda su existencia, con mayor presencia nacional y renovados objetivos, claros y precisos, con proyecto gremial de justicia laboral y social para sus afiliados.

        El S.N.T.S.A. ha sabido equilibrar con sensibilidad los derechos y conquistas laborales de sus afiliados en el ejercicio de la práctica profesional de la salud, el cumplimiento ejemplar de los deberes laborales y el respeto a las instituciones públicas, que ha permitido a la dirigencia sindical asumir firme, responsable y plenamente en todas las etapas de la Secretaría de Salud, como el Acuerdo Nacional para la Descentralización de los Servicios de Salud de 1996, los Acuerdos de Regularización Laboral de 2008 y 2009 y la Formalización Laboral de 2014, 2015 y 2016. Reconociendo, así, al Comité Ejecutivo Nacional y su estructura territorial como el representante legal, legítimo y único de los derechos laborales de los trabajadores, como lo disponen los Artículos 1 y 2 de las Condiciones Generales de Trabajo de la Dependencia.
        
        Con el propósito de conmemorar el LXX aniversario de la puesta en vigor de las primeras Condiciones Generales de Trabajo de la Secretaría de Salud, acordadas entre las autoridades de la Dependencia y el Sindicato de Salud en diciembre de 1947, de celebrar el inicio de la vigencia de este mismo instrumento laboral colectivo suscrito recientemente en el mes de junio de 2016, se ha dispuesto la elaboración de este Compendio, con el propósito de reseñar los perfiles y características más significativos que dan identidad a la organización, tales como datos históricos, fundamentos y objetivos de existencia, estructura organizacional, bases normativas, documentos básicos, programas y actividades relevantes, compromiso social y resultados del trabajo de los afiliados, entre otros.
        
        Tengo la convicción de que este Compendio cumple con su propósito de ofrecer un panorama de lo que ha sido y es el Sindicato de Salud, los principios y bases sobre los cuales se estructura y de lo que será en el futuro: firme a su proyecto de justicia, reivindicación y mejoramiento social, laboral y profesional de los trabajadores de la salud y que, por lo tanto, será de utilidad para las personas, integrantes o no de la organización, interesadas o involucradas en el quehacer del S.N.T.S.A.`}</p>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <div className="tab-item-cont">
        <div className="img-tab">
          <StaticImage
            src={`../../images/ant.png`}
            loading="eager"
            placeholder="blurred"
            layout="fixed"
            height={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <p>{`En el Congreso constituyente celebrado en la ciudad de México, Distrito Federal, durante los días 13, 14 y 15 de marzo de 1944
        
      los trabajadores de base al servicio de la Secretaría de Salubridad y Asistencia, constituyeron el SINDICATO NACIONAL DE TRABAJADORES DE LA SECRETARÍA DE SALUBRIDAD Y ASISTENCIA, ACTUALMENTE DENOMINADO SINDICATO NACIONAL DE TRABAJADORES DE LA SECRETARÍA DE SALUD que usará indistintamente las siglas SNTSA
      `}</p>
      </div>
    ),
  },
  {
    id: 3,
    text: (
      <div className="tab-item-cont">
        <div className="img-tab">
          <StaticImage
            src={`../../images/sembl.png`}
            loading="eager"
            placeholder="blurred"
            layout="fixed"
            height={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <p
          style={{ textAlign: "left" }}
        >{`En octubre de 1943, el Presidente de la República, Manuel Ávila Camacho, emitió el decreto para crear la Secretaría de Salubridad y Asistencia, a partir de la fusión de la entonces Secretaría de Asistencia Pública y del Departamento de Salubridad. Ante esta determinación presidencial, los trabajadores de ambas Dependencias, por medio de sus respectivos sindicatos, suscribieron un Convenio, con el aval de la F.S.T.S.E., para coordinarse y seguir atendiendo sus tareas como representantes laborales, y “elaborar la Convocatoria para el Congreso de los trabajadores de Asistencia Pública y de Salubridad”.

      El Congreso fundador de la organización se llevó a cabo los días 13, 14 y 15 de marzo de 1944 en el Teatro de los Cinematografistas de la Ciudad de México, bajo su primera denominación: Sindicato Nacional de Trabajadores de la Secretaría de Salubridad y Asistencia.
      
      El último día del Congreso Constituyente fueron aprobados: el Estatuto General, el Programa de Acción, el Emblema Sindical y electo el primer Comité Ejecutivo Nacional, iniciando funciones desde el mismo 15 de marzo, con Alfonso Peña Palafox como Secretario General. Desde el principio, en la historia de esta organización, la participación entusiasta, permanente, vanguardista y creciente de las mujeres en cargos de dirigencia sindical ha sido determinante, tal fue el caso de la electa Celia Sánchez de León al frente de la Secretaría de Actas y Acuerdos. La historia del Sindicato de Salud se ha escrito con eficacia y sentido de nación a partir de dos principios íntimamente ligados: por un lado, el ejemplar cumplimiento de los deberes laborales de sus integrantes, y por el otro, la lucha constante por mejores condiciones de trabajo y de justicia laboral y social para sus afiliados.
      
      De esta manera, transcurridas siete décadas de existencia sindical, es posible contabilizar la celebración de 20 Congresos Nacionales, la integración de 30 Comités Ejecutivos Nacionales, el incremento de la membresía y la conquista y consolidación de los niveles de estabilidad y derechos laborales con los que cuentan los afiliados. También es necesario apreciar los enormes logros que ha tenido nuestro país en la prevención y combate a las enfermedades, así como en el mantenimiento de la salubridad y la higiene, gran parte de lo cual se debe, indiscutiblemente, a los resultados del esfuerzo laboral de los trabajadores agremiados en el S.N.T.S.A.
      
      Indudablemente, la historia de la organización es la de mujeres y hombres que lo han integrado, la mayoría de ellos participando en la obtención de admirables resultados en el campo de la salud. Otros de sus integrantes, han tenido el honor de ser dirigentes sindicales en sus diversos niveles, y les ha correspondido por ello, atender el también meritorio esfuerzo de asumir la representación de sus compañeras y compañeros trabajadores, momento que es propicio para recordar y reconocer el empeño y dedicación que entregaron al Sindicato de Salud.
      
      Diversas determinaciones del Estado mexicano en el transcurso de su existencia, han influido en la evolución sindical, de la misma manera que la creación de la Secretaría de Salubridad y Asistencia en 1943, la transformación de esta Dependencia en Secretaría de Salud en 1985, condujo a la adecuación de la denominación del S.N.T.S.A., fecha en la cual, adoptó el nombre que actualmente tiene: Sindicato Nacional de Trabajadores de la Secretaría de Salud.
      
      De la misma manera, otras decisiones de los diversos órganos de gobierno de nuestro país, también han marcado el devenir sindical, entre ellas, se puede referir aquellas que han creado programas de salud o unidades de atención médica. De estas acciones destacan, por los efectos que han tenido en las dimensiones de la membresía o en la organización seccional, las que han llevado a la creación de los Institutos Nacionales de Salud, de los Hospitales Federales de Referencia y Regionales de Alta Especialidad, los Hospitales Civiles o Generales en los estados del país, los Hospitales Psiquiátricos, así como diversas unidades administrativas de la Secretaría de Salud.`}</p>
      </div>
    ),
  },
  {
    id: 4,
    text: (
      <div className="tab-item-cont">
        <div className="img-tab">
          <StaticImage
            src={`../../images/dec.webp`}
            loading="eager"
            placeholder="blurred"
            layout="fixed"
            height={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <p
          style={{ textAlign: "left" }}
        >{`El Sindicato Nacional de Trabajadores de la Secretaría de Salud fue constituido hace 70 años, con el propósito de conjuntar, conducir y representar a los trabajadores de la Secretaría de Salud, en el contexto de una situación nacional y mundial en el que se desarrollaron importantes transformaciones sociales, políticas, económicas, culturales y, por supuesto, también en el campo de la salud.
  
        El impulso organizador que venía predominando en toda la orbe de los movimientos obreros y de trabajadores, tuvo en nuestro país una aceptación generalizada, lo que, para el caso de los empleados públicos, permitió, a través del ejercicio libre, democrático y convencido de las garantías individuales postuladas en la Constitución Política de nuestro país, la institución de la Federación de Sindicatos de Trabajadores al Servicio del Estado y más adelante, los días 13, 14 y 15 de marzo de 1944, la creación del Sindicato Nacional de Trabajadores de la Secretaría de Salud, a partir de la fusión de dos pedestales históricos del sindicalismo burocrático: el Sindicato de Trabajadores de Asistencia Pública y el Sindicato Nacional de Trabajadores de Salubridad.
        
        Desde entonces, el SNTSA ha perfilado con claridad un proyecto sindical sustentando en principios ideológicos irrenunciables como son la autonomía sindical, la democracia interna, la unidad sindical, la fortaleza de gestión, la presencia nacional de la organización, el aumento de su presencia social y política, el progreso laboral y profesional de sus afiliados, la solidaridad con las causas de la clase trabajadora, la identidad con el movimiento histórico de los trabajadores al servicio del Estado, su compromiso con la salud de los mexicanos, la conciencia nacionalista y el desarrollo del país, que ahora, actualiza y confirma en el marco de la realización de su XX Congreso Nacional Ordinario y de la celebración del 70 Aniversario de su fundación.
        `}</p>
        <b>Por ello se pronuncia:</b>
        <p style={{ textAlign: "left" }}>{`
         Por la observancia irrestricta de las garantías individuales y los postulados sociales establecidos en la Constitución General de la República, de manera particular, en lo que se refiere al Apartado B del Artículo 123 constitucional.
         
         Por el respeto absoluto a la autonomía sindical, como un principio de legalidad fundamental para las organizaciones obreras y de trabajadores, que permite el acuerdo social, la convivencia ciudadana armónica, la gobernabilidad nacional y el funcionamiento adecuado de las instituciones públicas y políticas del país.
         
         Por la solidaridad de clase y la afinidad de acciones entre obreros, trabajadores y sus organizaciones sindicales, como instrumentos que permitan el reconocimiento, la dignidad, el progreso y la justicia social.
         
         Por el respeto a las organizaciones sindicales y a la libre determinación de sus procesos que dan sustento para que el SNTSA exija recíprocamente el respeto a su personalidad, a su organización, a sus funciones y decisiones, sin admitir, aceptar ni permitir que  fuerzas ajenas interfieran o influyan en su naturaleza sindical ni mucho menos en sus objetivos y funcionamiento.
         
         Por la defensa de la integridad sindical y su presencia nacional, lo que será promovido y defendido ante toda institución, organización o persona de manera enérgica e indudable, conducta que será adoptada ante cualquier pretensión de desestabilizar o fragmentar al Sindicato, así como cuando se busque impedir la realización de sus objetivos o se pretendan promover acciones que sean contrarias a ellos.
         
         Por un sindicalismo activo e inteligente, que de manera sólida y estratégica se posiciona para gestionar sus demandas, para hacer valer su importancia, para acrecentar sus derechos y conquistas, para procurar sus ideales sociales, para hacer valer los resultados de su trabajo y dedicación, para ejercer en beneficio de los demás el llamado de su vocación por la salud, sin desgastar ociosamente sus energías y su capacidad de acción, dirigiéndolas hacia lo verdaderamente importante.
         
         Por la unidad e integración del movimiento de los trabajadores al servicio del Estado y de los Sindicatos hermanos, aglutinados eficazmente en torno a la Federación de Sindicatos de Trabajadores al Servicio del Estado (FSTSE). Por el fortalecimiento y la libre manifestación de la identidad y pertenencia de los afiliados a su Sindicato, como un requisito indispensable de la firmeza, unidad y eficacia de la organización.
         
         Por el respeto y la observancia al Estatuto General, como una expresión manifiesta de la autonomía sindical, que permite el funcionamiento de la organización y la búsqueda contundente y firme de sus propósitos.
         
         Por un ejercicio responsable y democrático de los derechos sindicales, que permiten la libre y sana convivencia sindical de todos sus afiliados, la acción sindical correctamente dirigida, la fortaleza de las capacidades de gestión de la organización y la búsqueda de los intereses superiores gremiales.
         
         Por el fortalecimiento de la democracia sindical y el cumplimiento de las obligaciones gremiales y la observancia de la disciplina sindical, a través de los cuales es posible la construcción legítima de las dirigencias sindicales y la toma de acuerdos y decisiones sindicales en el Congreso, Consejos, Plenos del CEN, Órganos Nacionales Autónomos y Asambleas Seccionales, a fin de que siempre prevalezca el interés general de los afiliados.
         
         Por la ampliación y consolidación de la unidad e identidad de los trabajadores afiliados al Sindicato como una expresión genuina y legítima de sus aspiraciones y necesidades personales, profesionales, familiares y sociales, que le han permitido demostrar, a lo largo de muchos años, su templanza, convicciones y solidaridad en la defensa del país, de las instituciones nacionales, de sus compromisos solidarios con el movimiento sindical organizado del país y, de manera particular, en la realización del derecho supremo de toda persona de buscar, por medio del trabajo, sus ideales, progreso y felicidad.
         
         Por el reconocimiento al gigantesco esfuerzo y la sensible solidaridad y comprensión que los trabajadores han aportado ante los graves problemas nacionales, particularmente de carácter económico, lo que, conjuntamente con su aportación a las grandes reformas nacionales y a las renovadas perspectivas de progreso y bienestar, los deben convertir en sujetos prioritarios de las políticas y programas que tienen como propósito elevar el nivel de vida de la población.
         
         Por una legislación laboral que respetando los postulados constitucionales, garanticen siempre la estabilidad en el trabajo, seguridad social, ingreso justo, prestaciones y conquistas laborales, sin distingos de ninguna especie en su otorgamiento puntual e integral para todos los trabajadores.
         
         Por el mejoramiento efectivo y pronto de las condiciones generales de trabajo, así como de los sueldos, salarios, prestaciones e ingresos económicos de los afiliados, no sólo como un acto de justicia a los resultados que permanentemente obtienen en el cumplimiento de sus tareas laborales y de los cuales informan de manera constante los diversos niveles de gobierno federal, estatales y del Distrito Federal, sino como resultado de una política pública de genuino compromiso con la justicia y el desarrollo social.
         
         Por la aplicación puntual, ampliación y actualización permanente de las Condiciones Generales de Trabajo, sus Reglamentos, Manuales y otros instrumentos normativos similares y aplicables, como instrumentos básicos de defensa y equilibrio laboral, que garantizan la integridad y personalidad laboral económica, social y cultural de los afiliados.
         
         Por la ampliación y consolidación de los programas y actividades sindicales en materia de becas educativas, capacitación y actualización profesional y vocacional, fomento y promoción social, cultural, deportiva y recreativa, que permitan ofrecer a los afiliados opciones que procuren su superación y bienestar personal, familiar y social.
         
         Por la fortaleza política del Sindicato, que significa, por un lado, el respeto a las ideologías y afinidades que de manera personal tenga cada afiliado, pero que al mismo tiempo, promueve la presencia de la organización en la vida política del país, así como el fomento y apoyo hacia sus afiliados que tengan aspiraciones políticas o que se encuentren en el ejercicio de alguna responsabilidad de esta naturaleza, a partir del reconocimiento de la importancia que tiene la vida política en los objetivos y quehacer  del Sindicato.
         
          Por la equidad de género en la vida sindical y en el trabajo, que significan, ante todo, la garantía de igualdad de oportunidades y condiciones para hombres y mujeres, el respeto absoluto a su condición de personas y a su individualidad, sus necesidades y aspiraciones personales y sociales, así como a la obtención del reconocimiento logrado por sus capacidades, talento y empeño en su superación.
         
         Por la puesta en marcha de políticas y programas de salud en todo el país que garanticen el acceso a sus servicios en los términos establecidos en el artículo 4º constitucional, sin que signifiquen, de ninguna manera, demagogia en su implementación y objetivos, y que se traduzcan, efectivamente, en la atención de las demandas de más y mejores instalaciones, medicamentos, insumos, mobiliario y equipo para la salud que los afiliados al SNTSA han venido exigiendo en todo el país para una correcta y oportuna prestación de los servicios.
         
         Por la implementación de medidas efectivas que promuevan el fortalecimiento institucional de la Secretaría de Salud en todo el país y de los servicios que ofrece, que permita, con ello, garantizar su naturaleza pública, así como la obligación del Estado mexicano de hacer efectivo el derecho a la protección a la salud de todos los mexicanos.
         
         Por el incremento del presupuesto público a la Secretaría de Salud y por su aplicación efectiva, transparente y vigilada en los servicios a su cargo.
         
         Por la cancelación definitiva de contrataciones de personal sin la estabilidad laboral, la seguridad social, el nivel salarial, las Condiciones de trabajo y prestaciones que por Ley les corresponden. El SNTSA exige la formalización laboral de los trabajadores que laboran en los servicios de salud en condiciones irregulares e inequitativas.
         
         Por la mejora de los servicios y prestaciones del ISSSTE y por el fortalecimiento de esta Institución nacional del Estado Mexicano, de gran significado e importancia para los trabajadores al servicio del Estado, para lo cual reitera su compromiso de mantener su alianza con la FSTSE en torno a este propósito.
         
         Por un México próspero, fuerte, libre, unido, democrático y justo, cuyas instituciones nacionales sirvan a las personas y tengan por objeto su desarrollo y bienestar, en un marco de certeza jurídica, de respeto a los derechos humanos, a la dignidad de las personas y al esfuerzo laboral de los trabajadores.`}</p>
      </div>
    ),
  },
  {
    id: 5,
    text: (
      <div className="tab-item-cont">
        <div className="img-tab">
          <StaticImage
            src={`../../images/obj.webp`}
            loading="eager"
            placeholder="blurred"
            layout="fixed"
            height={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <p
          style={{ textAlign: "left" }}
        >{`Es el estudio, mejoramiento y defensa de los intereses laborales de sus afiliados, en los términos establecidos por la Ley y las disposiciones legales de carácter supletorio.      `}</p>
      </div>
    ),
  },
  {
    id: 6,
    text: (
      <div className="cards-container">
        <Card
          image={
            <>
              <StaticImage
                src={`../../images/logo2.png`}
                loading="eager"
                placeholder="blurred"
                layout="fixed"
                width={125}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </>
          }
          title="Escudo del SNTSA"
        >
          <p>{`Reseña del Escudo del SNTSA
 

 Desde 1936, los Sindicatos de Trabajadores de Asistencia Pública (STAP) y el Sindicato Nacional de Trabajadores de Salubridad, experimentaron una aceleración y unificación que finalmente se concreto en 1944, tras la determinación presidencial de unir la Secretaria de Asistencia Pública y el Departamento de Salubridad en 1943.
 
 
  El 15 de marzo de 1944 tras celebrar el congreso constituyente del SNTSA quedo elegido el Comité Ejecutivo Nacional del SNTSA con Estatuto General y Reglamento Interno aprobados.A partir de esta fecha el Escudo también fue fusionado: Del Sindicato de Trabajadores de Asistencia Pública y del Sindicato de Trabajadores de Salubridad.`}</p>
        </Card>
        <Card
          image={
            <>
              <StaticImage
                src={`../../images/logos/logo2.gif`}
                loading="eager"
                placeholder="blurred"
                layout="fixed"
                width={125}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </>
          }
          title="Escudo del Sindicato de Trabajadores Salubridad"
        >
          <p>{`El escudo del Sindicato de Trabajadores de Salubridad representado por una mano con una cadena en la mu&ntilde;eca sosteniendo fuertemente una serpiente.

Elementos:

– La Serpiente: Representa las enfermedades
– La mano: La salud que las detiene Con un lazo alrededor en forma de escudo y la leyenda de “Sindicato Nacional de Trabajadores de Salubridad”

Los colores negro, rojo, blanco y amarillo.`}</p>
        </Card>
        <Card
          image={
            <>
              <StaticImage
                src={`../../images/logos/logo3.gif`}
                loading="eager"
                placeholder="blurred"
                layout="fixed"
                width={125}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </>
          }
          title="Escudo del Sindicato de la Secretaria de Asistencia Pública"
        >
          <p>{`El escudo de la Secretaria de Asistencia Pública representado por una especie de pequeño estandarte con una estrella roja en el centro y una mano levantada con el puño cerrado.
Lo cual significa:

– La Mano : La unidad y fuerza de los trabajadores.

Los colores usados negro, rojo, blanco y amarillo.`}</p>
        </Card>
        <Card
          image={
            <>
              <StaticImage
                src={`../../images/logo2.png`}
                loading="eager"
                placeholder="blurred"
                layout="fixed"
                width={125}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </>
          }
          title="Escudo tras la Fusión"
        >
          <p>{`La mano levantada sosteniendo la serpiente fuertemente, sin la cadena en la muñeca, teniendo como fondo la estrella roja y a manera
de estandarte en la parte superior de la leyenda SNTSA.

Los colores usados negro, rojo, blanco y amarillo.`}</p>
        </Card>
      </div>
    ),
  },
]
const AboutUs = () => {
  const rippleRef = useRef(null)
  const [rippleStyle, setRippleStyle] = useState({})

  
  const [activeItem, setActiveItem] = useState(1)

  const [totalW, setTotalW] = useState(1101)
  useEffect(() => {
    const tabItems = document.querySelectorAll(".tab-item")
    let sum2 = 0

    if (activeItem > 0) {
      for (let i = 0; i < tabItems.length; i++) {
        // Access the current element using its index
        const element = tabItems[i]
        sum2 += element.offsetWidth
        //   console.log(element.offsetWidth)
        // Perform an action on the element
        //console.log()
      }
      setTotalW(sum2)
    }
   // console.log(sum2)
  }, [activeItem])
  //console.log(sum);
  /*useEffect(() => {
    // Loop through each element in the NodeList
   
    setTotalW(Number(sum));
    return () => {}
  }, [])*/
  const { refs } = useContext(PageContext)
  return (
    <div className="page-container m-t-b" >
      <div className="title-container" id="about" ref={refs[1]}>
        <Title>Quienes Somos</Title>
      </div>
      <div className="tab-container">
        <div className="tab-item">
          <Button
            activeTab={activeItem === 1 ? "activeTab" : ""}
            onClickE={() => setActiveItem(1)}
          >
            Presentación
          </Button>
        </div>
        <div className="tab-item">
          <Button
            activeTab={activeItem === 2 ? "activeTab" : ""}
            onClickE={() => setActiveItem(2)}
          >
            Antecedentes
          </Button>
        </div>
        <div className="tab-item">
          <Button
            activeTab={activeItem === 3 ? "activeTab" : ""}
            onClickE={() => setActiveItem(3)}
          >
            Semblanza Histórica
          </Button>
        </div>
        <div className="tab-item">
          <Button
            activeTab={activeItem === 4 ? "activeTab" : ""}
            onClickE={() => setActiveItem(4)}
          >
            Declaración de Principios
          </Button>
        </div>
        <div className="tab-item">
          <Button
            activeTab={activeItem === 5 ? "activeTab" : ""}
            onClickE={() => setActiveItem(5)}
          >
            Objetivos
          </Button>
        </div>
        <div className="tab-item">
          <Button
            activeTab={activeItem === 6 ? "activeTab" : ""}
            onClickE={() => setActiveItem(6)}
          >
            Escudo del SNTSA
          </Button>
        </div>
        <div
          className="line-bottom"
          style={{
            width: totalW,
            position: "absolute",
            height: "1px",
            background: "#efefef",
            alignSelf: "end",
          }}
        />
      </div>
      <div className="active-tab-container">
        {tabItemsArray.map(tab => {
          return (
            <div key={tab.id}>{tab.id === activeItem && <>{tab.text}</>}</div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutUs
