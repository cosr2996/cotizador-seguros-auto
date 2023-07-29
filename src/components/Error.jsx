import useCotizador from "../hooks/useCotizador"

const Error = () => {
    const {error} = useCotizador()
  return (
    <div className="text-center bg-red-500 rounded-md p-5 text-white text-xl">{error}</div>
  )
}

export default Error