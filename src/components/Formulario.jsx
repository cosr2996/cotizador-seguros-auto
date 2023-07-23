import {MARCAS,YEARS,PLANES} from '../constants/index'
import { Fragment } from 'react'
const Formulario = () => {
  return (
    <>
    <form action="">
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="">
                 Marca
            </label>
            <select name="marca" className="w-full p-3 bg-white border border-gray-200">
                <option value="">-- Selecciona Marca --</option>

                {MARCAS.map(marca =>(
                    <option
                    key={marca.id}
                    value={marca.id}>
                        {marca.nombre}
                    </option>
                ))}
            </select>
           
        </div>


        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="">
                 Año
            </label>
            <select name="marca" className="w-full p-3 bg-white border border-gray-200">
                <option value="">-- Selecciona Año --</option>

                {YEARS.map(year =>(
                    <option
                    key={year}
                    value={year}>
                        {year}
                    </option>
                ))}
            </select>
           
        </div>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="">
                 Elige un Plan
            </label>
           <div className='flex gap-3 items-center'>
                    {PLANES.map(plan=>(
                        <Fragment key={plan.id}>
                            <label>
                                {plan.nombre}
                            </label>
                            <input type="radio" name='plan' value={plan.id} />
                        </Fragment>
                    ))}
           </div>
           
        </div>

        <input value="Cotizar" type="submit" className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'/>
    </form>
    </>
  )
}

export default Formulario