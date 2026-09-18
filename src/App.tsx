import { useState } from 'react';
import Hero from '@/components/Hero';
import Quiz from '@/components/Quiz';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openBooking = (service?: string) => {
    setSelectedService(service);
    setBookingOpen(true);
  };

  const closeBooking = () => {
    setBookingOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Hero onBookClick={() => openBooking()} />
      <Quiz onBookClick={(service) => openBooking(service)} />
      <Services onBookClick={(service) => openBooking(service)} />
      <Gallery />
      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={closeBooking}
        preselectedService={selectedService}
      />
    </div>
  );
}

export default App;
