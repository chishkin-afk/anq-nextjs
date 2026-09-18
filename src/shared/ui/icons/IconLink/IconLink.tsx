interface IconLinkProps {
  className?: string;
}

export default function IconLink({ className }: IconLinkProps) {
  return (
    <svg
      className={className}
      width="43"
      height="43"
      viewBox="0 0 43 43"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_32_497)">
        <path
          d="M22.981 19.4456C25.4217 21.8864 25.4217 25.8437 22.981 28.2845L21.2132 30.0522C18.7724 32.493 14.8151 32.493 12.3744 30.0522C9.9336 27.6115 9.9336 23.6542 12.3744 21.2134L12.8163 20.7715M19.4454 22.9812C17.0047 20.5404 17.0047 16.5831 19.4454 14.1423L21.2132 12.3746C23.654 9.9338 27.6113 9.93379 30.052 12.3746C32.4928 14.8153 32.4928 18.7726 30.052 21.2134L29.6101 21.6553"
          stroke="currentFill"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_32_497">
          <rect
            width="30"
            height="30"
            fill="currentFill"
            transform="translate(0 21.2134) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
