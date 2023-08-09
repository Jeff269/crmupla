import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import { faArrowLeft, faArrowRight, faCheck, faCircleInfo, faLeftRight, faPaperPlane, faPlaneArrival, faRing, faWarning, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

const index = (props) => {

    console.log(props.errors)
    

  const { data, setData, post, get, put, delete: destroy, processing, reset, errors, progress } = useForm({
        modalidad: '',
        facultad: '',
        carrera:'',
        subcarrera:'',
        nombre_p:'',
        nombre_s:'',
        apellido_p:'',
        apellido_m:'',
        celular:'',
        correo:'',
        dni:'',
        edad:'',
    });

    console.log(data)

  const [formState,setFormState] = useState(1)

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

  const submit = (e) => {
    e.preventDefault();
    post(route('form.store'), { onSuccess: () => {reset();}  });
  };

  return (
    <div className='bg-gray-500/90 flex justify-center min-h-[100vh] min-w-[100vw] bg-cover bg-center p-12'>
        <div className='backdrop-blur-xl w-[80vw] p-0 flex bg-cyan-100 rounded-xl'>
            <div className='flex flex-col bg-gray-600 sm:w-1/3 p-6 items-center justify-center'>
                <p className='text-white font-black text-xl'>
                    CONSULTAS
                </p>
                <div className='border-l-2 border-gray-400 pl-[50px] p-2'>
                    <div className='flex justify-center items-center my-6'>
                        <div className={`transition ease-in-out rounded-full -ml-[61px] `+((formState == 1)?'w-[20px] h-[20px] border-[2px] bg-gray-600 border-white':'bg-gray-400 w-[15px] h-[15px]')}>
                        </div>
                        <h1 className={`transition ease-in-out pl-4 w-[150px] `+((formState == 1)?'text-white':'text-gray-400')}>
                            Modalidad
                        </h1>
                    </div>
                    <div className='flex justify-center items-center my-6'>
                        <div className={`transition ease-in-out rounded-full -ml-[61px] `+((formState == 2)?'w-[20px] h-[20px] border-[2px] bg-gray-600 border-white':'bg-gray-400 w-[15px] h-[15px]')}>
                        </div>
                        <h1 className={`transition ease-in-out pl-4 w-[150px] `+((formState == 2)?'text-white':'text-gray-400')}>
                            Área
                        </h1>
                    </div>
                    <div className='flex justify-center items-center my-6'>
                        <div className={`transition ease-in-out rounded-full -ml-[61px] `+((formState == 3)?'w-[20px] h-[20px] border-[2px] bg-gray-600 border-white':'bg-gray-400 w-[15px] h-[15px]')}>
                        </div>
                        <h1 className={`transition ease-in-out pl-4 w-[150px] `+((formState == 3)?'text-white':'text-gray-400')}>
                            Datos Personales
                        </h1>
                    </div>
                    <div className='flex justify-center items-center my-6'>
                        <div className={`transition ease-in-out rounded-full -ml-[61px] `+((formState == 4)?'w-[20px] h-[20px] border-[2px] bg-gray-600 border-white':'bg-gray-400 w-[15px] h-[15px]')}>
                        </div>
                        <h1 className={`transition ease-in-out pl-4 w-[150px] `+((formState == 4)?'text-white':'text-gray-400')}>
                            Finalizado
                        </h1>
                    </div>
                </div>
            </div>
            <div className='flex col sm:w-2/3 rounded-xl p-6 justify-center items-center'>
                <form onSubmit={submit} className='w-full'>
                    {
                        formState == 1 && (
                            <div className='w-full'>
                                <h1 className='my-6 text-center uppercase text-cyan-800 text-xl font-bold'>
                                    ¿En qué modalidad te gustaría estudiar?
                                </h1>
                                <p className='px-12'>
                                En esta universidad te ofrecemos el poder de elegir tu camino hacia el éxito educativo con nuestras dos modalidades innovadoras: presencial y semipresencial. ¿Estás listo para descubrir todas las razones por las cuales somos la elección perfecta para tu formación superior?
                                </p>
                                <div className='flex items-center w-full'>
                                    <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                        <ul className={`flex mx-auto flex-wrap items-center justify-around w-full`}>
                                            <li className='relative my-1 w-1/3'>
                                                <input className="sr-only peer" type="radio" value="1" name="area" id="area_i"
                                                    onChange={(e)=>{
                                                      setData('modalidad',e.target.value)
                                                    }}
                                                />
                                                <label className="flex pr-12 py-5 pl-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-cyan-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="area_i">
                                                    PRESENCIAL
                                                </label>
                                                <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                                    <div className='rounded-full border-2 bg-cyan-600 w-[25px] h-[25px] text-center'>
                                                    <FontAwesomeIcon icon={faCheck} className='text-white'/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='relative my-1 w-1/3'>
                                                <input className="sr-only peer" type="radio" value="2" name="area" id="area_ii"
                                                    onChange={(e)=>{
                                                        setData('modalidad',e.target.value)
                                                      }}
                                                />
                                                <label className="flex pr-12 py-5 pl-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-cyan-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="area_ii">
                                                    SEMIPRESCENCIAL
                                                </label>
                                                <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                                    <div className='rounded-full border-2 bg-cyan-600 w-[25px] h-[25px] text-center'>
                                                    <FontAwesomeIcon icon={faCheck} className='text-white'/>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {
                                    data.modalidad && (
                                        <SecondaryButton
                                            className='absolute bottom-4 right-4'
                                            onClick={(e)=>{
                                                e.preventDefault()
                                                setFormState(formState+1)
                                            }}
                                        >
                                            Continuar
                                            <FontAwesomeIcon icon={faArrowRight} className='mx-2'/>
                                        </SecondaryButton>
                                    )
                                }
                                
                            </div>
                        )
                    }
                    {
                        formState == 2 && (
                            <div className='w-full'>
                                <h1 className='my-6 text-center uppercase text-cyan-800 text-xl font-bold'>
                                    ¿En qué Facultad te gustaría estudiar?
                                </h1>
                                <p className='px-12'>
                                    ¡Prepárate para un viaje de descubrimiento y crecimiento en nuestras emocionantes facultades! En esta universidad, te brindamos la oportunidad de explorar y expandir tus horizontes en una variedad de campos académicos de alto prestigio. ¡Echa un vistazo a lo que cada facultad tiene para ofrecer!
                                </p>
                                <h1 className='my-2 mx-12 text-cyan-800 text-xl font-bold'>
                                    Selecciona tu Facultad
                                </h1>
                                <div className='flex items-center w-full'>
                                    <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                        <ul className={`flex mx-auto flex-wrap items-center justify-around w-full`}>
                                            {
                                                facultades.filter(fac => fac.modalidad == data.modalidad).map((facultad,index) =>
                                                    <li key={index} className='relative my-1'>
                                                        <input className="sr-only peer" type="radio" value={facultad.id} name="facultad" id={'facultad_'+facultad.id}
                                                            onChange={(e)=>{
                                                                setData('facultad',e.target.value)
                                                              }}
                                                        />
                                                        <label className="flex pr-12 py-5 pl-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-cyan-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={'facultad_'+facultad.id}>
                                                            {facultad.facultad}
                                                        </label>
                                                        <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                                            <div className='rounded-full border-2 bg-cyan-600 w-[25px] h-[25px] text-center'>
                                                            <FontAwesomeIcon icon={faCheck} className='text-white'/>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                                
                                {   carreras.filter(car => car.facultad == data.facultad).length > 0 && 
                                    <>
                                        <h1 className='my-2 mx-12 text-cyan-800 text-xl font-bold'>
                                        Selecciona tu Carrera
                                        </h1>
                                        <div className='flex items-center w-full'>
                                            <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                                <ul className={`flex mx-auto flex-wrap items-center justify-around w-full`}>
                                                    {
                                                        carreras.filter(car => car.facultad == data.facultad).map((carrera,index) =>
                                                            <li key={index} className='relative my-1'>
                                                                <input className="sr-only peer" type="radio" value={carrera.id} name="carrera" id={'carrera_'+carrera.id}
                                                                    onChange={(e)=>{
                                                                        setData('carrera',e.target.value)
                                                                    }}
                                                                />
                                                                <label className="flex pr-12 py-5 pl-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-cyan-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={'carrera_'+carrera.id}>
                                                                    {carrera.carrera}
                                                                </label>
                                                                <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                                                    <div className='rounded-full border-2 bg-cyan-600 w-[25px] h-[25px] text-center'>
                                                                    <FontAwesomeIcon icon={faCheck} className='text-white'/>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                
                                }

                                {   subCarreras.filter(scar => scar.carrera == data.carrera).length > 0 && 
                                    <>
                                        <h1 className='my-2 mx-12 text-cyan-800 text-xl font-bold'>
                                        Selecciona tu Especialidad
                                        </h1>
                                        <div className='flex items-center w-full'>
                                            <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                                <ul className={`flex mx-auto flex-wrap items-center justify-around w-full`}>
                                                    {
                                                        subCarreras.filter(scar => scar.carrera == data.carrera).map((subcarrera,index) =>
                                                            <li key={index} className='relative my-1'>
                                                                <input className="sr-only peer" type="radio" value={subcarrera.id} name="subcarrera" id={'subcarrera_'+subcarrera.id}
                                                                    onChange={(e)=>{
                                                                        setData('subcarrera',e.target.value)
                                                                    }}
                                                                />
                                                                <label className="flex pr-12 py-5 pl-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-cyan-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={'subcarrera_'+subcarrera.id}>
                                                                    {subcarrera.subcarrera}
                                                                </label>
                                                                <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                                                    <div className='rounded-full border-2 bg-cyan-600 w-[25px] h-[25px] text-center'>
                                                                    <FontAwesomeIcon icon={faCheck} className='text-white'/>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                }
                                
                                <p className='px-12'>
                                Cada facultad en nuestra universidad se dedica a brindarte una educación excepcional, un apoyo integral y oportunidades para crecer tanto académica como personalmente. Ya sea que tu pasión se encuentre en la salud, los negocios, el derecho, la ingeniería o la medicina, estamos aquí para ayudarte a alcanzar tus metas y convertir tus sueños en realidad. ¡Únete a nosotros y comienza tu viaje hacia un futuro brillante y exitoso!
                                </p>
                                <SecondaryButton
                                    className='absolute bottom-4'
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        setFormState(formState-1)
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className='mx-2'/>
                                    Volver
                                </SecondaryButton>
                                {
                                    data.facultad && (
                                        <SecondaryButton
                                            className='absolute bottom-4 right-4'
                                            onClick={(e)=>{
                                                e.preventDefault()
                                                setFormState(formState+1)
                                            }}
                                        >
                                            Continuar
                                            <FontAwesomeIcon icon={faArrowRight} className='mx-2'/>
                                        </SecondaryButton>
                                    )
                                }
                                
                            </div>
                        )
                    }
                    {
                        formState == 3 && (
                            <div className='w-full'>
                                <h1 className='my-6 text-center uppercase text-cyan-800 text-xl font-bold'>
                                    Datos Personales
                                </h1>
                                <p className='px-12'>
                                    Para poder ayudarte de la mejor manera posible, necesitamos algunos detalles adicionales. ¿Podrías proporcionarnos algunos datos sobre tí? Con esta información, estaremos en condiciones de brindarte la información que buscas y responder a todas tus preguntas de manera efectiva. Ten en cuenta que tratamos tu información con confidencialidad y solo la utilizaremos con el propósito de asistirte en tu búsqueda educativa. ¡Esperamos con ansias poder conectarnos contigo y proporcionarte toda la información que necesitas!
                                </p>
                                <div className='flex items-center w-full'>
                                    <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                        <div className='flex flex-wrap'>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Apellido Paterno'} className={'uppercase'}/>
                                                <TextInput 
                                                    className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('apellido_p',e.target.value)}
                                                />
                                            </div>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Apellido Materno'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('apellido_m',e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-wrap'>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Primer Nombre'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('nombre_p',e.target.value)}
                                                />
                                            </div>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Segundo Nombre'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('nombre_s',e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-wrap'>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Número de DNI'} className={'uppercase'}/>
                                                
                                                <TextInput type={'number'} className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('dni',e.target.value)}
                                                />
                                            </div>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Edad'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('edad',e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className='flex flex-wrap'>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Número de Celular'} className={'uppercase'}/>
                                                
                                                <TextInput type={'number'} className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('celular',e.target.value)}
                                                />
                                            </div>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Correo Electrónico'} className={'uppercase'}/>
                                                
                                                <TextInput type={'email'} className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('correo',e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    data.apellido_m && data.apellido_p && data.celular && data.dni && data.correo && (
                                        <div className='w-full flex justify-center'>
                                            <PrimaryButton
                                                className='!bg-gray-600'
                                            >
                                                Contáctame
                                            </PrimaryButton>
                                        </div>
                                    )
                                }
                                <SecondaryButton
                                    className='absolute bottom-4'
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        setFormState(formState-1)
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className='mx-2'/>
                                    Volver
                                </SecondaryButton>
                                
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    </div>
  )
}

export default index