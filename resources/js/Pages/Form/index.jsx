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

  const [formState,setFormState] = useState(2)

  const facultades = [
    {
        id: 1,
        facultad: 'Facultad de Ingenieria',
    },
    {
        id: 2,
        facultad: 'Facultad de Ciencias de la Salud',
    },
    {
        id: 3,
        facultad: 'Facultad de Ciencias Administrativas y Contables',
    },
    {
        id: 4,
        facultad: 'Facultad de Derecho y Ciencias Políticas',
    },
    {
        id: 5,
        facultad: 'Facultad de Medicina Humana',
    },
  ]

  const carreras = [
    {
        id:1,
        facultad:1,
        carrera:'asdasd'
    },
  ]

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
                <form action="" className='w-full'>
                    {
                        formState == 1 && (
                            <div className='w-full'>
                                <h1 className='my-6 text-center uppercase text-cyan-800 text-xl font-bold'>
                                    ¿En qué modalidad te gustaría estudiar?
                                </h1>
                                <p className='px-12'>
                                    En la universidad te ofrecemos XASJKDHKAJSDHKJASHDKJHASDKJ
                                </p>
                                <div className='flex items-center w-full'>
                                    <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                        <ul className={`flex mx-auto flex-wrap items-center justify-around w-full`}>
                                            <li className='relative my-1 w-1/3'>
                                                <input className="sr-only peer" type="radio" value="1" name="area" id="area_i"
                                                    
                                                />
                                                <label className="flex pr-12 py-5 pl-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-cyan-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="area_i">
                                                    PRESCENCIAL
                                                </label>
                                                <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                                    <div className='rounded-full border-2 bg-cyan-600 w-[25px] h-[25px] text-center'>
                                                    <FontAwesomeIcon icon={faCheck} className='text-white'/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='relative my-1 w-1/3'>
                                                <input className="sr-only peer" type="radio" value="2" name="area" id="area_ii"
                                                    
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
                                    La universidad tiene un total de asdasd areas facultades askdjhasdh
                                </p>
                                <div className='flex items-center w-full'>
                                    <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                        <ul className={`flex mx-auto flex-wrap items-center justify-around w-full`}>
                                            {
                                                facultades.map((facultad,index) =>
                                                    <li key={index} className='relative my-1'>
                                                        <input className="sr-only peer" type="radio" value="1" name="facultad" id={'facultad_'+facultad.id}
                                                            
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
                                    En la universidad te ofrecemos XASJKDHKAJSDHKJASHDKJHASDKJ
                                </p>
                                <div className='flex items-center w-full'>
                                    <div className='items-center my-2 sm:px-6 flex flex-col w-full'>
                                        <div className='flex flex-wrap'>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Apellido Paterno'} className={'uppercase'}/>
                                                
                                                <TextInput 
                                                    className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('apellido_paterno',e.target.value)}
                                                />
                                            </div>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Apellido Materno'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('apellido_materno',e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-wrap'>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Primer Nombre'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('primer_nombre',e.target.value)}
                                                />
                                            </div>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Segundo Nombre'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2'
                                                    onChange={e=>setData('segundo_nombre',e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-wrap'>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Correo Electrónico'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2' type={'email'}
                                                    onChange={e=>setData('correo_electronico',e.target.value)}
                                                />
                                            </div>
                                            <div className='items-center my-2 sm:w-1/2 sm:px-6 max-sm:w-[95%]'>
                                                <InputLabel value={'Número de Celular'} className={'uppercase'}/>
                                                
                                                <TextInput className='h-8 w-full text-gray-500 ml-2' type={'number'}
                                                    onChange={e=>setData('numero_celular',e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex justify-center'>
                                    <PrimaryButton
                                        className='!bg-gray-600'
                                    >
                                        Contáctame
                                    </PrimaryButton>
                                </div>
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