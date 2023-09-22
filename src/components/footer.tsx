import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  MessageCircleIcon,
} from 'lucide-react'

export function Footer() {
  return (
    <div className="bg-default text-secondary flex flex-wrap flex-row justify-between p-12  ">
      <div className="mt-2">
        <img src="../src/assets/logo.svg" alt="Logo da empresa" />
      </div>

      <div>
        <h2 className="text-xl font-semibold font-sans">Fale conosco</h2>
        <p className="mt-2 text-sm">adastore@gmail.com</p>
        <p className="text-sm">(00) 00000-0000</p>
        <p className="mt-2 text-sm">Atendimento presencial das 08h às 17h </p>
        <p className="text-sm">Atendimento online 24 horas</p>
      </div>

      <div>
        <h2 className=" text-xl text-roundedGreen font-semibold font-sans">
          Nos acompanhe nas redes
        </h2>
        <div className="flex mt-6">
          <span className="rounded-full mr-4 bg-roundedGreen p-2">
            <Facebook size={32} fill="dark" />
          </span>
          <span>
            <MessageCircleIcon />
          </span>
          <span className="rounded-full mr-4 bg-roundedGreen p-2">
            <Instagram size={32} fill="dark" />
          </span>
          <span className="rounded-full mr-4 bg-roundedGreen p-2">
            <Youtube size={32} />
          </span>
          <span className="rounded-full bg-roundedGreen mr-4 p-2">
            <Twitter size={32} fill="dark" />
          </span>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold font-sans">Baixe o APP</h2>
        <div className="flex mt-6">
          <img className="mr-2.5" src="../src/assets/appStore.svg" alt="" />
          <img src="../src/assets/playstore.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
