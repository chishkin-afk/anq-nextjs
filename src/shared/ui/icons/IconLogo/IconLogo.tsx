interface IconLogoProps {
  className?: string;
}

export default function IconLogo({ className }: IconLogoProps) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_18_271)">
        <mask
          id="mask0_18_271"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="40"
        >
          <path
            d="M40 40L40 1.74846e-06L1.74846e-06 0L0 40L40 40Z"
            fill="currentFill"
          />
        </mask>
        <g mask="url(#mask0_18_271)">
          <path
            d="M20 39.2188C20 39.6502 19.65 40.0016 19.2189 39.9847C15.5371 39.8409 11.9608 38.6822 8.88862 36.6294C5.59971 34.4317 3.03612 31.3081 1.52237 27.6536C0.0086181 23.9992 -0.387321 19.9778 0.384244 16.0981C1.15596 12.2186 3.06081 8.65493 5.85784 5.85787C8.65487 3.06082 12.2186 1.15601 16.0982 0.384303C19.9778 -0.3874 23.9992 0.00866667 27.6537 1.52242C31.3082 3.03617 34.4318 5.59962 36.6294 8.8886C38.6822 11.9607 39.8409 15.537 39.9848 19.2189C40.0016 19.65 39.6502 20 39.2188 20L20.7813 20C20.3499 20 20 20.3499 20 20.7813L20 39.2188Z"
            fill="currentFill"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_18_271">
          <rect
            width="40"
            height="40"
            fill="currentFill"
            transform="translate(40 1.74846e-06) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
