import EmailForm from './components/EmailForm'

function App() {


  return (
    <>
    <header className='text-white'>
    <h1 className="text-3xl font-bold underline flex items-center justify-center pt-[10px] ">
      Formulario para borrar cuenta H.U.E Heladeras
    </h1>
    </header>
    <main className='text-white'>
      <div className='flex flex-col pl-[100px] pt-[100px]'>
        <li className='pb-[10px] text-green-400'>Usted esta autenticado, tiene permisos para borrar su cuenta</li>
        <li className='pb-[10px]'>Para borrar su cuenta debe poner el mail de la misma en el siguiente formulario</li>
        <li className='pb-[10px]'>Al cabo de unas horas luego de enviar el formulario se eliminara su cuenta</li>
      </div>
    <EmailForm/>
    </main>
    </>
  )
}

export default App
