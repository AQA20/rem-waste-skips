import ListItems from '@/components/ListItems'
import { useEffect, useState } from 'react'
import { fetchSkips } from '@/lib/skips'
import LoadingIndicator from '@/components/LoadingIndicator'
import VerticalStepper from '@/components/VerticalStepper'
import MobileStepper from '@/components/MobileStepper'


function App() {
  const [skips, setSkips] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSkips()
        setSkips(data)
      } catch (err) {
        setError(err.message || 'Error fetching skips')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <LoadingIndicator />
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-6">
        {/* Desktop Stepper */}
        <div className="hidden lg:block lg:col-span-4">
          <VerticalStepper />
        </div>

        {/* Mobile Stepper + ListItems */}
        <div className="col-span-1 lg:col-span-8">
          <MobileStepper className="block lg:hidden mb-4" />
          <section className="px-4">
            <h2>Choose Your Skip Size</h2>
            <p className="text-muted-foreground">
              Select the skip size that best suits your needs
            </p>
          </section>

          <ListItems skips={skips} />
        </div>
      </section>
    </main>
  )
}

export default App
