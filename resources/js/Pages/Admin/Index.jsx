import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Index(props) {

    const modalidades = [
        {
            id: 1,
            modalidad: 'Presencial'
        },
        {
            id: 2,
            modalidad: 'Semipresencial'
        }
    ]

    const facultades = [
        {
            id: 1,
            modalidad:1,
            facultad: 'Facultad de Ciencias de la Salud',
            frase:'¿Tienes una pasión por el cuidado de la salud y el bienestar de las personas? Nuestra Facultad de Ciencias de la Salud te ofrece programas innovadores en medicina, enfermería, terapia física y más. Con instructores expertos y tecnología de vanguardia, te prepararás para convertirte en un profesional de la salud altamente capacitado y comprometido con el servicio.'
        },
        {
            id: 2,
            modalidad:1,
            facultad: 'Facultad de Ciencias Administrativas y Contables',
            frase:'¿El mundo de los negocios te llama? En la Facultad de Ciencias Administrativas y Contables, podrás adentrarte en el emocionante campo de la gestión empresarial, la contabilidad y el emprendimiento. Nuestros programas te brindarán las habilidades necesarias para liderar equipos, tomar decisiones estratégicas y contribuir al éxito de diversas organizaciones.'
        },
        {
            id: 3,
            modalidad:1,
            facultad: 'Facultad de Derecho y Ciencias Políticas',
            frase: '¿Eres un defensor de la justicia y la equidad? En la Facultad de Derecho y Ciencias Políticas, te sumergirás en el estudio del sistema legal y la política. Aprenderás a analizar problemas complejos, argumentar de manera efectiva y comprender el impacto de las leyes en la sociedad. Prepárate para convertirte en un agente de cambio y defensor de los derechos fundamentales.'
        },
        {
            id: 4,
            modalidad:1,
            facultad: 'Facultad de Ingenieria',
            frase:'¿Tienes curiosidad por cómo funcionan las cosas y cómo puedes crear soluciones innovadoras? La Facultad de Ingeniería te ofrece programas desafiantes en campos como la ingeniería eléctrica, mecánica, civil y más. A través de proyectos prácticos y colaborativos, desarrollarás habilidades técnicas y creativas para enfrentar los desafíos del mundo moderno.'
        },
        {
            id: 5,
            modalidad:1,
            facultad: 'Facultad de Medicina Humana',
            frase:'¿Sueñas con convertirte en médico y marcar una diferencia directa en la vida de las personas? En la Facultad de Medicina Humana, te brindamos una educación médica de primera clase. Aprenderás a diagnosticar, tratar y prevenir enfermedades, y te prepararás para una carrera en constante evolución en el campo de la medicina.'
        },
        {
            id: 6,
            modalidad:2,
            facultad: 'Administración y Sistemas',
        },
        {
            id: 7,
            modalidad:2,
            facultad: 'Contabilidad y Finanzas',
        },
        {
            id: 8,
            modalidad:2,
            facultad: 'Derecho',
        },
        {
            id: 9,
            modalidad:2,
            facultad: 'Educación Inicial',
        },
        {
            id: 10,
            modalidad:2,
            facultad: 'Educación Primaria',
        },
        {
            id: 11,
            modalidad:2,
            facultad: 'Psicologia',
        },
    ]

    const carreras = [
        {
            id: 1,
            facultad:1,
            carrera: 'Enfermeria',
        },
        {
            id: 2,
            facultad:1,
            carrera: 'Farmacia y Bioquimica',
        },
        {
            id: 3,
            facultad:1,
            carrera: 'Medicina Veterinaria y Zootecnia',
        },
        {
            id: 4,
            facultad:1,
            carrera: 'Nutrición Humana',
        },
        {
            id: 5,
            facultad:1,
            carrera: 'Obstetricia',
        },
        {
            id: 6,
            facultad:1,
            carrera: 'Odontologia',
        },
        {
            id: 7,
            facultad:1,
            carrera: 'Psicologia',
        },
        {
            id: 8,
            facultad:1,
            carrera: 'TECNOLOGÍA MÉDICA',
        },
        {
            id: 9,
            facultad:2,
            carrera: 'Administración y Sistemas',
        },
        {
            id: 10,
            facultad:2,
            carrera: 'Contabilidad y Finanzas',
        },
        {
            id: 11,
            facultad:3,
            carrera: 'Derecho',
        },
        {
            id: 12,
            facultad:3,
            carrera: 'Educación Inicial',
        },
        {
            id: 13,
            facultad:3,
            carrera: 'Educación Primaria',
        },
        {
            id: 14,
            facultad:4,
            carrera: 'Arquitectura',
        },
        {
            id: 15,
            facultad:4,
            carrera: 'Ingenieria Civil',
        },
        {
            id: 16,
            facultad:4,
            carrera: 'Ingenieria de Sistemas y Computación',
        },
        {
            id: 17,
            facultad:4,
            carrera: 'Ingenieria del Medio Ambiente y Desarrollo',
        },
        {
            id: 18,
            facultad:4,
            carrera: 'Ingenieria Industrial',
        },
    ]

    const subCarreras = [
        {
            id: 1,
            carrera: 8,
            subcarrera: 'Laboratorio Clinico y Anatomia Patológica'
        },
        {
            id: 2,
            carrera: 8,
            subcarrera: 'Optometria'
        },
        {
            id: 3,
            carrera: 8,
            subcarrera: 'Radiologia'
        },
        {
            id: 4,
            carrera: 8,
            subcarrera: 'Terapia Fisica y de Rehabilitaci6n'
        },
    ]
    console.log(props.registros)
    const [showDetails,setShowDetails] = useState(false)
    const [showUpdateState,setShowUpdateState] = useState(false)
    const [registroData,setRegistroData] = useState({
      modalidad: '',
      facultad: '',
      carrera: '',
      subcarrera: '',
      nombre_p: '',
      nombre_s: '',
      apellido_p: '',
      apellido_m: '',
      celular: '',
      correo: '',
      dni: '',
      edad: '',
    })

    const { data, setData, post, get, put, delete: destroy, processing, reset, errors, progress } = useForm({
      registro: '',
    });


      const submitUpdate = (e) => {
        e.preventDefault();
        put(route('consulta.update',data.registro), { onSuccess: () => {reset();setShowUpdateState(false) }  });
      };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Estudiantes Registrados</h2>}
        >
            <Head title="Registros" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className='w-full'>
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>Nombres</th>
                                        <th>DNI</th>
                                        <th>Celular</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.registros.map((registro,index)=>
                                            <tr key={index}>
                                                <th>
                                                    {index+1}
                                                </th>
                                                <th>
                                                    {registro.nombre_p+' '+registro.nombre_s+' '+registro.apellido_p+' '+registro.apellido_m+' '}
                                                </th>
                                                <th>
                                                    {registro.dni}
                                                </th>
                                                <th>
                                                    {registro.celular}
                                                </th>
                                                <th>
                                                    {
                                                        registro.atendido == 0 && (
                                                            <p className='m-0 p-0 text-sm text-white bg-red-600 rounded-md'>
                                                                No atendido
                                                            </p>
                                                        )
                                                    }
                                                    {
                                                        registro.atendido == 1 && (
                                                            <p className='m-0 p-0 text-sm text-white bg-green-600 rounded-md'>
                                                                Atendido
                                                            </p>
                                                        )
                                                    }
                                                </th>
                                                <th>
                                                    <button
                                                        className='w-1/4 mx-1 bg-amber-500 pt-[6px] p-1 text-white text-sm rounded-md'
                                                        onClick={(e)=>{
                                                            e.preventDefault
                                                            setRegistroData({
                                                                modalidad: registro.modalidad?modalidades.find(m=>m.id==registro.modalidad).modalidad:'-',
                                                                facultad: registro.facultad?facultades.find(f=>f.id==registro.facultad).facultad:'-',
                                                                carrera: registro.carrera?carreras.find(c=>c.id==registro.carrera).carrera:'-',
                                                                subcarrera: registro.subcarrera?subCarreras.find(s=>s.id==registro.subcarrera).subcarrera:'-',
                                                                nombre_p: registro.nombre_p?registro.nombre_p:'-',
                                                                nombre_s: registro.nombre_s?registro.nombre_s:'-',
                                                                apellido_p: registro.apellido_p?registro.apellido_p:'-',
                                                                apellido_m: registro.apellido_m?registro.apellido_m:'-',
                                                                celular: registro.celular?registro.celular:'-',
                                                                correo: registro.correo?registro.correo:'-',
                                                                dni: registro.dni?registro.dni:'-',
                                                                edad: registro.edad?registro.edad:'-',
                                                            })
                                                            setShowDetails(true)
                                                        }}
                                                        >
                                                        <FontAwesomeIcon icon={faEye} />
                                                    </button>
                                                    {
                                                        registro.atendido == 0 && (
                                                            <button
                                                                className='w-1/4 mx-1 bg-blue-600 pt-[6px] p-1 text-white text-sm rounded-md'
                                                                onClick={(e)=>{
                                                                    e.preventDefault;
                                                                    setData('registro',registro.id)
                                                                    setShowUpdateState(true)
                                                                }}
                                                                   >
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </button>
                                                        )
                                                    }
                                                    <button
                                                        className='w-1/4 mx-1 bg-green-500 pt-[6px] p-1 text-white text-sm rounded-md'
                                                        onClick={(e)=>{
                                                            e.preventDefault;
                                                            window.open('https://wa.me/+51'+registro.celular,"_blank")
                                                        }}
                                                        >
                                                        <FontAwesomeIcon icon={faWhatsapp} />
                                                    </button>
                                                    
                                                </th>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
            show={showDetails}
            maxWidth = '2xl'
            >
                <div className='flex justify-end w-full'>
                    <h2 className='w-11/12 text-center border-b uppercase p-2'>
                        Detalles del Registro
                    </h2>
                    <button
                        onClick={() => setShowDetails(false)}
                        className='w-1/12 text-white bg-red-600 border-b'
                        >
                        X
                    </button>
                </div>
                <div className='text-center p-4 overflow-auto max-h-[80vh] flex justify-center flex-col w-full uppercase'>
                    <h2 className='text-red-600 border-b-red-600 underline-offset-4 mx-2'>Datos Personales</h2>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Apellido Paterno
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.apellido_p}
                        </div>
                    </div>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Apellido Materno
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.apellido_m}
                        </div>
                    </div>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Primer Nombre
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.nombre_p}
                        </div>
                    </div>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Segundo Nombre
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.nombre_s}
                        </div>
                    </div>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            DNI
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.dni}
                        </div>
                    </div>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Celular
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.celular}
                        </div>
                    </div>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Correo Electrónico
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.correo}
                        </div>
                    </div>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Edad
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.edad}
                        </div>
                    </div>
                    <h2 className='text-red-600 border-b-red-600 underline-offset-4 mx-2'>Carrera de Interes</h2>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Modalidad
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.modalidad}
                        </div>
                    </div>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Facultad
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.facultad}
                        </div>
                    </div>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Carrera
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.carrera}
                        </div>
                    </div>
                    <div className='flex w-full border-b-2'>
                        <div className='w-2/5 text-end px-2'>
                            Especialidad
                        </div>
                        <div className='w-3/5 text-start px-2 uppercase'>
                            {registroData.subcarrera}
                        </div>
                    </div>
                </div>
                <div className='flex justify-end p-2'>
                    <SecondaryButton className={'dark:bg-red-600 text-white m-1'} onClick={()=>setShowDetails(false)}>
                        Cerrar
                    </SecondaryButton>
                </div>
            </Modal>

            <Modal
            show={showUpdateState}
            maxWidth = '2xl'
            >
                <div className='flex justify-end w-full'>
                    <h2 className='w-11/12 text-center border-b uppercase p-2'>
                        Actualizar Registro
                    </h2>
                    <button
                        onClick={() => setShowUpdateState(false)}
                        className='w-1/12 text-white bg-red-600 border-b'
                        >
                        X
                    </button>
                </div>
                <form onSubmit={submitUpdate}>
                    <div className='text-center p-4 overflow-auto max-h-[80vh] flex justify-center flex-col'>
                        <h1>
                            ¿Está seguro que ya atendió el registro?
                        </h1>
                    </div>
                    
                    <div className='flex justify-end p-2'>
                        <SecondaryButton className={'dark:bg-red-600 text-white m-1'} onClick={()=>setShowUpdateState(false)}>
                            Cerrar
                        </SecondaryButton>
                        <PrimaryButton>
                            Sí
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
