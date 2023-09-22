import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { WhatsappLogo } from './WhatsappLogo'

export function Footer() {
  return (
    <div className="bg-default relative text-secondary flex flex-wrap flex-row justify-between p-12 sherink-1  ">
      <div className="mt-2">
        <img src="../src/assets/logo.svg" alt="Logo da empresa" />
      </div>

      <div className="text-zinc-50">
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
            <Facebook size={24} style={{ color: 'black' }} />
          </span>
          <span className="rounded-full mr-4 bg-roundedGreen p-2">
            <WhatsappLogo />
          </span>
          <span className="rounded-full  mr-4 bg-roundedGreen p-2">
            <Instagram size={24} style={{ color: 'black' }} />
          </span>
          <span className="rounded-full  mr-4 bg-roundedGreen p-2">
            <Youtube size={24} style={{ color: 'black' }} />
          </span>
          <span className="rounded-full  bg-roundedGreen mr-4 p-2">
            <Twitter size={24} style={{ color: 'black' }} />
          </span>
        </div>
      </div>

      <div>
        <h2 className="text-xl text-white font-sans">Baixe o APP</h2>
        <div className="flex mt-6">
          <img className="mr-2.5" src="../src/assets/appStore.svg" alt="" />
          <img src="../src/assets/playstore.svg" alt="" />
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0 w-[32rem] "
        src="../src/assets/img-fundo-footer.svg"
        alt=""
      />
    </div>
  )
}
