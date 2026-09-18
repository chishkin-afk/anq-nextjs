interface IconMailProps {
  className?: string;
}

export default function IconMail({ className }: IconMailProps) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.4444 8.125H3.55556C1.59187 8.125 0 9.34023 0 10.8393V29.1608C0 30.6598 1.59187 31.875 3.55556 31.875H36.4444C38.4081 31.875 40 30.6598 40 29.1608V10.8393C40 9.34023 38.4081 8.125 36.4444 8.125Z"
        fill="currentColor"
      />
      <path
        d="M0.435498 10.9715C0.168797 10.8399 -0.012815 10.5642 0.0591853 10.2756C0.364527 9.05192 1.81375 8.125 3.55551 8.125H36.4443C38.1862 8.125 39.6354 9.05192 39.9407 10.2756C40.0128 10.5642 39.831 10.8399 39.5643 10.9715L20.3456 20.4544C20.1278 20.562 19.8721 20.562 19.6543 20.4544L0.435498 10.9715Z"
        fill="currentFill"
      />
    </svg>
  );
}
