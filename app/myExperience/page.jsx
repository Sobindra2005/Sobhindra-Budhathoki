import ExperienceTimeline from '../../components/experience-timeline'
import { Button } from '../../components/ui/button'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6 sm:mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">My Experience</h1>
        <ExperienceTimeline />
      </div>
    </div>
  )
}

