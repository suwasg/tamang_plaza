import { createFileRoute } from '@tanstack/react-router'
import VenueBookingForm from '../sections/booking/VenueBookingForm'
import MainLayout from '../ui/templates/MainLayout'

export const Route = createFileRoute('/booking')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <MainLayout>
      <VenueBookingForm/>
    </MainLayout>
  </div>
}
