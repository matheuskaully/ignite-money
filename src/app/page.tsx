import Header from '@/components/header'
import { PriceHighlight } from '@/components/price-highlight'
import SearchForm from '@/components/search-form'
import Summary from '@/components/summary'

export default function Home() {
  return (
    <div>
      <Header />
      <Summary />

      <main className="w-full max-w-6xl mt-16 px-6 mx-auto space-y-6">
        <SearchForm />

        <table className="w-full border-collapse border-spacing-2">
          <tbody className="space-y-2">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <tr
                  key={index}
                  className="flex bg-zinc-800 hover:bg-zinc-800/80 rounded-md"
                >
                  <td className="py-5 px-8 flex-1">Desenvolvimento de site</td>
                  <td className="py-5 px-8">
                    <PriceHighlight variant="income">
                      R$ 32.001,00
                    </PriceHighlight>
                  </td>
                  <td className="py-5 px-8">Venda</td>
                  <td className="py-5 px-8 ">28/06/2024</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </div>
  )
}
