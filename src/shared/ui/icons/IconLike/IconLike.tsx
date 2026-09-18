interface IconLikeProps {
  className?: string;
}

export default function IconLike({ className }: IconLikeProps) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_32_495)">
        <path
          d="M21.25 2.5C18.8016 2.5 16.5881 3.50555 15 5.12619C13.412 3.50571 11.1984 2.5 8.75 2.5C3.91754 2.5 9.53674e-07 6.41754 9.53674e-07 11.25C9.53674e-07 16.0825 5 20 15 27.5C25 20 30 16.0825 30 11.25C30 6.41754 26.0825 2.5 21.25 2.5Z"
          fill="currentFill"
        />
      </g>
      <defs>
        <clipPath id="clip0_32_495">
          <rect width="30" height="30" fill="currentFill" />
        </clipPath>
      </defs>
    </svg>
  );
}
