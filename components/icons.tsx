export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M24 10c-3.5 0-6 2.6-6 6.2 0 2 .9 3.5 2.1 4.9-3.6 1.1-6.1 3.8-6.1 8.4V33c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3.5c0-4.6-2.5-7.3-6.1-8.4 1.2-1.4 2.1-2.9 2.1-4.9 0-3.6-2.5-6.2-6-6.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M17 27.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.02 2.667c-7.36 0-13.35 5.99-13.35 13.35 0 2.354.615 4.65 1.783 6.671L2.667 29.333l6.79-1.78a13.29 13.29 0 0 0 6.56 1.72h.006c7.36 0 13.35-5.99 13.35-13.353 0-3.567-1.39-6.921-3.912-9.442a13.26 13.26 0 0 0-9.441-3.811Zm0 24.436h-.005a11.08 11.08 0 0 1-5.652-1.548l-.405-.24-4.03 1.057 1.075-3.928-.264-.404a11.05 11.05 0 0 1-1.696-5.923c0-6.114 4.975-11.088 11.09-11.088a11.02 11.02 0 0 1 7.842 3.253 11.02 11.02 0 0 1 3.245 7.844c-.003 6.114-4.978 11.087-11.16 11.087Zm6.086-8.302c-.334-.167-1.976-.975-2.282-1.086-.306-.111-.529-.167-.752.167s-.863 1.086-1.058 1.31c-.194.222-.389.25-.723.083-.334-.167-1.409-.519-2.684-1.655-.992-.885-1.663-1.978-1.858-2.312-.194-.334-.021-.514.146-.68.15-.15.334-.39.5-.585.167-.194.222-.334.334-.556.111-.223.056-.417-.028-.584-.083-.167-.752-1.812-1.03-2.482-.271-.652-.546-.564-.752-.574l-.641-.011c-.222 0-.584.083-.89.417-.306.334-1.168 1.14-1.168 2.784 0 1.643 1.196 3.23 1.363 3.453.167.223 2.354 3.594 5.703 5.04.797.344 1.418.55 1.902.703.799.254 1.526.218 2.101.132.641-.096 1.976-.808 2.254-1.588.278-.78.278-1.448.194-1.588-.083-.14-.306-.223-.64-.39Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.5c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1-9 0-16.3-7.3-16.3-16.3 0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-2 1.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3.2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v6h3v-6h2.3l.7-3h-3v-1.5c0-.6.4-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function YoutubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 9.5v5l4-2.5-4-2.5Z" fill="currentColor" />
    </svg>
  );
}

export function TiktokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 3v10.8a2.6 2.6 0 1 1-2-2.53"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M14 3c.3 2.2 1.9 3.8 4 4v2.2c-1.5 0-2.9-.5-4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
