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

    const [formState,setFormState] = useState(4)

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
                {
                    formState == 4 && (
                        <div className='w-full'>
                            <h1 className='my-6 text-center uppercase text-cyan-800 text-xl font-bold'>
                                Registro Finalizado
                            </h1>
                            <p className='px-12'>
                            ¡Gracias por completar el formulario y mostrarnos tu interés! Valoramos mucho tu tiempo y tu interés en nuestra universidad. Tus detalles nos permitirán brindarte la información precisa y detallada que necesitas para tomar decisiones informadas sobre tu educación. Estamos emocionados de tener la oportunidad de acompañarte en tu camino educativo y responder a todas tus preguntas. Siéntete libre de contactarnos en cualquier momento si surge algo más en lo que podamos ayudarte. ¡Esperamos tener la oportunidad de ser parte de tu futuro académico!
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default index