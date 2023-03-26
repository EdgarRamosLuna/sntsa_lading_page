import React, { useContext } from "react"
import Title from "./Title"
import "./priv.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { PageContext } from "../context/PageContext"
const Privacy = () => {
    const { refs} = useContext(PageContext)
  return (
    <div className="page-container m-t-b" >
      <div className="title-container" id="priv" ref={refs[5]}>
        <Title>Aviso de Privacidad</Title>
      </div>
      <div className="txt-container">
        <p>{`El Sindicato Nacional de Trabajadores de la Secretaría de Salud  (SNTSA), con domicilio ubicado en la avenida Oaxaca número 58, colonia Roma, delegación Cuauhtémoc, C.P. 06700 en la Ciudad de México, y con el portal de Internet www.sindicatodesalud.org.mx es el responsable del uso, tratamiento y protección de sus datos personales, dando cumplimiento a las disposiciones de la Ley Federal de Protección de Datos Personales en Posesión de Particulares.`}</p>
        <h3>¿FINALIDAD DE SUS DATOS PERSONALES?</h3>
        <p>{`Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son indispensables para la gestión que solicita:
`}</p>
        <ul>
          <li>
            Para el ejercicio de los beneficios contenidos en las Condiciones
            Generales de Trabajo de la Secretaría de Salud, así como del
            Estatuto General del SNTSA;
          </li>
          <li>
            Para las asesoría, orientación y comparecencia que se deberán
            observar en las disposiciones y ordenamientos de carácter laboral y
            administrativo respectivamente;
          </li>
          <li>
            Para gestionar prestaciones que se tienen derecho ante las
            autoridades del SSA, así como del propio ISSSTE;
          </li>
          <li>
            Mantener actualizado el padrón de los afiliados al Sindicato en el
            CEN, Sección, Subsección y Delegación;
          </li>
          <li>
            Para llevar a cabo el trámite correspondiente a las aportaciones de
            Fondo de Ayuda por Defunción en los casos establecidos en el propio
            Reglamento;
          </li>
          <li>
            Para tramitar los beneficiarios correspondientes al Fondo de Auxilio
            por Defunción (FAD);
          </li>
          <li>
            Para la afiliación a la Organización Sindical, así como de las
            aportaciones de las cuotas sindicales;
          </li>
          <li>
            Para la defensa legal ante las instancias administrativas, y/o
            jurisdiccionales;
          </li>
          <li>
            Para la elaboración de los informes de trabajo inherentes a la
            organización sindical;
          </li>
          <li>
            Para el registro de actividades deportivas, culturales y recreativas
            que realiza el SNTSA;
          </li>
          <li>
            Para tramitar el registro de contratación del Seguro de
            Responsabilidad Profesional para Médicos y Enfermeras;
          </li>
          <li>
            Para llevar a cabo el trámite referente a los concursos
            escalafonarios, del personal de las Rama Médica, Paramédica y Afín y
            Afín Administrativa;
          </li>
          <li>
            Para llevar a cabo el trámite correspondiente a la autorización por
            licencia por comisión sindical ante las respectivas áreas de
            recursos humanos de la Secretaría de Salud, o en su caso el
            Organismo Público Descentralizado de la entidad federativa de que se
            trate;
          </li>
          <li>
            Para el proceso de las Convocatorias previstas en las Condiciones
            Generales de Trabajo, el Estatuto General del SNTSA y demás
            disposiciones legales aplicables (Convivencia Infantil de Verano
            para los hijos de los trabajadores, Becas para los trabajadores y
            sus hijos, Actividades sociales, culturales y deportivas);
          </li>
          <li>
            Para llevar a cabo el reconocimiento de antigüedad, para el
            cumplimiento de las Condiciones Generales de Trabajo, el Reglamento
            Interior de la Secretaría de Salud, o en su caso de los Organismos
            Públicos Descentralizados de las entidades federativas;
          </li>
          <li>
            Para llevar a cabo el padrón de afiliados, referente a la renovación
            del CEN, Comités Ejecutivos Seccionales, Subsección y Delegación, de
            conformidad con el Estatuto General del SNTSA y el Reglamento de
            Procedimientos electorales;
          </li>
          <li>
            Para llevar a cabo cursos de capacitación impartidos en por el CEN,
            CES, Subsección o Delegación.
          </li>
          <li>¿LOS DATOS PERSONALES QUE UTILIZAREMOS SON?</li>
          <li>
            Para llevar a cabo los propósitos descritos en el presente aviso de
            privacidad, se requerirán los siguientes datos personales:
          </li>
        </ul>
        <h4>Datos de identificación del afiliado al SNTSA.</h4>
        <ul>
          <li>Nombre (s) y apellidos,</li>
          <li>Fotografía,</li>
          <li>Firma,</li>
          <li>Lugar y fecha de nacimiento,</li>
          <li>Estado civil,</li>
          <li>Domicilio,</li>
          <li>Teléfono (particular, celular y/o institucional),</li>
          <li>Correo electrónico,</li>
          <li>RFC, Clave del Registro Federal del Contribuyente,</li>
          <li>CURP, Clave Única del Registro de Población,</li>
          <li>Número de Afiliación en esta asociación,</li>
          <li>
            En algunos casos datos de familiares beneficiarios y/o
            derechohabientes, respecto al trámite del Fondo de Auxilio por
            Defunción, Becas y Convivencias Infantil de Verano,
          </li>
          <li>Firma autógrafa, de puño y letra.</li>
        </ul>
        <h4>Datos laborales.</h4>
        <ul>
          <li>
            Nombramiento en la Secretaría de Salud, o en su caso en los OPD en
            las entidades federativas, e Institutos Nacionales de Salud.
          </li>
          <li>Número de empleado</li>
          <li>Numero de Seguridad Social</li>
          <li>Clave presupuestal</li>
          <li>Descripción del puesto</li>
          <li>Centro de responsabilidad</li>
          <li>Descripción del centro de responsabilidad</li>
          <li>Número de unidad</li>
          <li>Descripción de la unidad</li>
        </ul>
        <h4>Datos académicos.</h4>
        <ul>
          <li>Nivel de escolaridad.</li>
        </ul>
        <p>{`
Lo anterior es información que en términos de la Ley, son datos personales clasificados como confidenciales en su afiliación sindical.`}</p>
        <h3>DATOS PERSONALES SENSIBLES</h3>
        <p>{`Se pueden solicitar datos personales sensibles, en cuyo caso se requerirá que el TITULAR otorgue su consentimiento expreso para el tratamiento de tales datos personales (datos personales de beneficiarios, menores de edad  o estado de incapacidad, salud, mismos que firman el consentimiento en el que se reconoce y acepta que dichos individuos están enterados del tratamiento que se llevará a cabo con sus datos personales).

Lo que, constituye la aceptación expresa del TITULAR respecto del tratamiento de sus datos personales sensibles, de conformidad con el artículo 8, párrafos segundo y cuarto; artículo 9, 12 y 13 respectivamente de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.

Los datos proporcionados por Usted, corresponden al CEN, CES, Subsección y/o Delegación su captura, trámite y transferencia al área de Recursos Humanos de la Secretaría de Salud y/o de los Organismos Públicos Descentralizados de las entidades federativas, como parte del procedimiento de inscripción y/o actualización del registro del Padrón de afiliados por cada una de las Áreas del SNTSA.

¿COMPARTIMOS SU INFORMACIÓN PERSONAL Y PARA QUÉ FINES?
  `}</p>
        <h3>TRANSFERENCIA DE DATOS PERSONALES.</h3>
        <p>{`Conforme a las actividades inherentes a la organización sindical y con el objeto de cumplir con las finalidades mencionadas, se podrán transferir, algunos de sus datos personales a terceros tales como:
`}</p>
        <ul>
          <li>
            Secretaría de Salud, a los Organismos Públicos Descentralizados de
            las entidades federativas;
          </li>
          <li>
            Prestamos del ISSSTE Gestión de prestaciones contenidas en las
            Condiciones Generales de Trabajo de la Secretaría de Salud;
          </li>
          <li>
            Autoridades laborales, administrativas o judiciales competentes;
          </li>
          <li>
            Instituto Nacional de Transparencia, Acceso a la Información Pública
            y Protección de Datos Personales;
          </li>
          <li>Seguros Afirme, S.A. DE C.V;</li>
          <li>
            Instituciones académicas, con las que se tiene celebrado un
            Convenio.
          </li>
        </ul>
        <p>{`
Quienes se encontrarán obligados a darle a conocer su propio Aviso de Privacidad; lo anterior a fin de evitar daño, pérdida, destrucción, alteración o un tratamiento no autorizado de sus datos personales.

Con relación a las transferencias que requieren de su consentimiento, si usted a continuación no manifiesta su negativa, el SNTSA entenderá que nos lo ha otorgado.

  `}</p>
        <h3>MEDIDAS DE SEGURIDAD</h3>
        <p>{`
Con el fin de evitar el uso o divulgación no autorizada de sus datos personales, se han adoptado las medidas físicas, administrativas y técnicas necesarias para garantizar el adecuado tratamiento de sus datos personales; únicamente el personal autorizado podrá participar en el tratamiento que se haga de sus datos personales, quienes tendrán estrictamente prohibido utilizar sus datos para fines distintos a los descritos y estarán obligados a guardar el deber de confidencialidad necesario, inclusive después de terminada la relación con el SNTSA.
  `}</p>
        <h3>
          ¿CÓMO PUEDE ACCEDER, RECTIFICAR O CANCELAR SUS DATOS PERSONALES, U
          OPONERSE A SU USO?
        </h3>
        <p>{`
Como TITULAR, tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Igualmente, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.

Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud a través del siguiente medio, en la oficina de la Unidad de Transparencia:
`}</p>
        <ul style={{ listStyle: "none" }} className="link-list">
          <li>
            {`a)`} Teléfono de contacto: <a href="tel:50808000">5080-8000</a>
          </li>
          <li>
            {`b)`} Correo electrónico:{" "}
            <a href="mailto:sntsa@sindicatodesalud.org.mx">
              sntsa@sindicatodesalud.org.mx
            </a>
          </li>
        </ul>
        <p>{`
Usted puede revocar su consentimiento para el uso de sus datos personales.

Como TITULAR, Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales.

Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con el SNTSA.

Para revocar su consentimiento deberá presentar su solicitud a través del siguiente medio:
`}</p>
        <ul style={{ listStyle: "none" }} className="link-list">
          <li>
            {`a)`} Correo electrónico:
            <a href="mailto:transparencia.sntsa@sindicatodesalud.org.mx">
              transparencia.sntsa@sindicatodesalud.org.mx
            </a>
          </li>
          <li>
            {`b)`} De manera escrita su solicitud ante la Unidad de
            Transparencia, de lo contrario quedará sin efectos la solicitud.
          </li>
        </ul>
        <h4>¿LIMITAR EL USO O DIVULGACIÓN DE SU INFORMACIÓN PERSONAL?</h4>
        <p>{`Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes medios:

`}</p>
        <ul style={{ listStyle: "none" }} className="link-list">
          <li>
            {`a)`} Correo electrónico:{" "}
            <a href="mailto:sntsa@sindicatodesalud.org.mx">
              sntsa@sindicatodesalud.org.mx
            </a>
          </li>
          <li>
            {`b)`} De manera escrita presentar su solicitud ante la responsable
            de la Unidad de Transparencia.
          </li>
        </ul>

        <h4>¿CONOCER LOS CAMBIOS EN ESTE AVISO DE PRIVACIDAD?</h4>
        <p>{`El presente Aviso de Privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de requerimientos legales; de nuestras propias necesidades o por otras causas.`}</p>

        <p>
          En caso de que exista alguna actualización de este aviso de
          privacidad, lo haremos de su conocimiento en esta misma oficina o para
          más información, puede consultar el aviso de privacidad, a través de
          nuestro portal de internet del sindicato: <AnchorLink to="/#home">www.sindicatodesalud.org.mx.</AnchorLink>
        </p>

        <p>
          Para obtener mayor información acerca de la Ley de Transparencia,
          favor de marcar a Telinai 01800-8354324, ó al correo electrónico;
          <a href="mailto:atención@inai.org.mx">atención@inai.org.mx</a> y la página <a href="https://inai.org.mx" target="_blank">www.inai.org.mx</a>
        </p>

        <center>
          <b>{`
ATENTAMENTE

 

 

“POR UN ESTADO AL SERVICIO DEL PUEBLO”

SINDICATO NACIONAL DE TRABAJADORES DE LA SECRETARÍA DE SALUD.`}</b>
        </center>
      </div>
    </div>
  )
}

export default Privacy
