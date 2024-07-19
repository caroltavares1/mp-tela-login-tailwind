import "./App.css"
import img from "./assets/background.png"

function App() {
  return (
    <main className="w-screen h-screen bg-gradient-to-r from-[#0E0D10] to-[#121216] flex flex-row justify-center items-center">
      <section className="w-full md:w-11/12 lg:w-[1106px] h-[654px] bg-bgcolor flex flex-row justify-between m-5 rounded-[34px] ">
        <section className="flex flex-col items-start w-full md:w-full lg:w-[400px] justify-center gap-5 p-10">
          <h1 className="md:text-[40px] lg:text-[48px] text-[38px]  text-h1Color font-[700] w-full">
            Faça seu login{/* */}
            <span className="bg-gradient-three-colors bg-clip-text text-transparent">.</span>
          </h1>
          <form action="" method="post" className="flex flex-col gap-5 w-full">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-textColor mb-2">
                Email
              </label>
              <div className="p-[1px] rounded-[14px] bg-none focus-within:bg-gradient-three-colors focus-within:shadow-[2px_6px_19px_0px_#2d3748,0px_-2px_19px_0px_#805ad5]">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full h-[55px] foucus:outline-none focus:border-transparent focus:ring-0 border-0 border-transparent appearance:none rounded-[14px] bg-inputArea text-textColor"
                />
              </div>
            </div>
            <div>
              <label htmlFor="senha" className="block text-sm font-medium leading-6 text-textColor mb-2">
                Senha
              </label>
              <div className="p-[1px] rounded-[14px] bg-none focus-within:bg-gradient-three-colors focus-within:shadow-[2px_6px_19px_0px_#2d3748,0px_-2px_19px_0px_#805ad5]">
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  className="w-full h-[55px] outline-none foucus:outline-none border-0 border-transparent  focus:border-transparent focus:ring-0 rounded-[14px] bg-inputArea text-textColor"
                />
              </div>
            </div>

            <button
              type="button"
              className="flex flex-row justify-end text-textColor text-[13px] underline font-[400] mb-2"
            >
              Esqueci minha senha
            </button>

            <button
              type="submit"
              className="w-full h-[55px] text-white text-[23px] bg-gradient-three-colors rounded-[14px] font-[700]"
            >
              Entrar
            </button>

            <button
              type="button"
              className="flex flex-row justify-center text-textColor text-[13px] underline font-[400] mt-2"
            >
              Ainda não tenho uma conta
            </button>
          </form>
        </section>
        <img className="w-[499px] h-[654px] md:w-1/2 opacity-75 hidden md:block lg:block" src={img} alt="imagem" />
      </section>
    </main>
  )
}

export default App
