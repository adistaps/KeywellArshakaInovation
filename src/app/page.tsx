'use client'

import { HeroSection } from '@/components/Homepage/HeroSection'
import { IntroSection } from '@/components/Homepage/IntroSection'
import { FeaturesSection } from '@/components/Homepage/FeaturesSection'
import { QuoteFormSection } from '@/components/Homepage/QuoteFormSection'
import { SolutionsSection } from '@/components/Homepage/SolutionsSection'
import { LocationMapSection } from '@/components/Homepage/LocationMapSection'
import { TimelineSection } from '@/components/Homepage/TimelineSection'
import { MarqueeSection } from '@/components/Homepage/MarqueeSection'
import { TestimonialsSection } from '@/components/Homepage/TestimonialsSection'
import { BrandsSection } from '@/components/Homepage/BrandsSection'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <QuoteFormSection />
      <SolutionsSection />
      <LocationMapSection />
      <TimelineSection />
      <MarqueeSection />
      <TestimonialsSection />
      <BrandsSection />
    </main>
  )
}
