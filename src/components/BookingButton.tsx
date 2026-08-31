import type { ReactNode } from 'react';
import { bookingUrl, trackBookingClick, type CtaLocation } from '../lib/attribution';

type BookingButtonProps = {
  location: CtaLocation;
  className?: string;
  children: ReactNode;
  tabIndex?: number;
};

export function BookingButton({ location, className, children, tabIndex }: BookingButtonProps) {
  return (
    <a
      href={bookingUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-cta={location}
      tabIndex={tabIndex}
      onClick={() => trackBookingClick(location)}
    >
      {children}
    </a>
  );
}
