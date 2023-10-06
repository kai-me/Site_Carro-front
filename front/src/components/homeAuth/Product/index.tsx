import Image from 'next/image'

interface ProductProps {
  nome: string
  preco: number
  precoPromocao: number
  validade: string
}

export function Product(data: ProductProps) {
  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-md border border-gray-400/20 px-4 py-4 shadow-lg">
      <div className="flex items-center justify-center">
        <Image
          src={
            'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym94fGVufDB8fDB8fHww&w=1000&q=80'
          }
          alt="teste"
          width={200}
          height={200}
          className="rounded-md bg-cover bg-center"
        />
      </div>
      <div className="mt-1 flex flex-col gap-2">
        <span className="text-xl">{data.nome}</span>
        <span className="text-gray-500/70 line-through">
          R$ {data.preco.toFixed(2)}
        </span>
        <span className="from-neutral-300 text-xl text-green-800">
          R$: {data.precoPromocao.toFixed(2)}
        </span>
        <span className="text-gray-500/70">
          Validade: {new Date(data.validade).toLocaleDateString('pt-BR')}
        </span>
      </div>
    </div>
  )
}
