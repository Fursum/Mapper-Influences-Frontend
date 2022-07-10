import { FC } from "react";

type Props = { color?: string; className?: string };
const Influences: FC<Props> = ({ color = "var(--textColor)", className }) => {
  return (
    <svg
      className={className}
      width="42"
      height="44"
      viewBox="0 0 42 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.6206 43.9999C32.6206 39.9363 31.3709 36.0392 29.1463 33.1658C26.9217 30.2924 23.9046 28.6781 20.7586 28.6781C17.6125 28.6781 14.5954 30.2924 12.3708 33.1658C10.1462 36.0392 8.89648 39.9363 8.89648 43.9999L32.6206 43.9999Z"
        fill={color}
      />
      <circle cx="20.7587" cy="20.7701" r="5.93103" fill={color} />
      <mask
        id="mask0_106_30"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="42"
        height="36"
      >
        <path
          d="M35.4372 35.4372C38.3403 32.534 40.3174 28.8352 41.1184 24.8084C41.9193 20.7816 41.5083 16.6078 39.9371 12.8146C38.3659 9.0215 35.7052 5.77944 32.2915 3.49846C28.8778 1.21747 24.8643 1.87611e-07 20.7586 0C16.653 -1.87611e-07 12.6395 1.21747 9.22576 3.49846C5.81202 5.77944 3.15134 9.0215 1.58017 12.8146C0.00899465 16.6078 -0.402095 20.7816 0.39888 24.8084C1.19986 28.8352 3.17692 32.534 6.08007 35.4372C8.89655 27.6782 16.5529 23.7241 20.7586 23.7241C24.9643 23.7241 32.6207 27.6782 35.4372 35.4372Z"
          fill={color}
        />
      </mask>
      <g mask="url(#mask0_106_30)">
        <circle cx="20.8019" cy="21" r="12.5" stroke={color} strokeWidth="3" />
        <circle
          cx="20.7586"
          cy="20.7586"
          r="19.2586"
          stroke={color}
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};
export default Influences;