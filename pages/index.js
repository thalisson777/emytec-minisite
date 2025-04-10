
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <Head>
        <title>Emytec | Controle Financeiro</title>
      </Head>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Veja a saúde financeira do seu negócio em segundos
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sistema simples e direto: entradas, saídas, lucros e relatórios em PDF. Sem planilhas complicadas.
        </p>
        <div className="shadow-xl rounded-2xl p-6 mb-6 bg-gray-100">
          <div className="space-y-4">
            <div>✔ Gráficos de saldo mês a mês</div>
            <div>✔ Relatórios em PDF</div>
            <div>✔ Use grátis com até 20 lançamentos</div>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md text-lg">
          Quero testar grátis
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Plano completo: R$29/mês com lançamentos ilimitados
        </p>
      </div>
    </div>
  )
}
