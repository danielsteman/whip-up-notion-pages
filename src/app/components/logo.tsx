import { Link } from "@chakra-ui/next-js";
import * as React from "react";

const Logo = () => (
  <Link href={"/"}>
    <svg
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="35px"
      height="35px"
      viewBox="0 0 95.103 95.103"
      xmlSpace="preserve"
    >
      {/* Define the linear gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#377ae7" />
          <stop offset="100%" stopColor="#74a6f9" />
        </linearGradient>
      </defs>

      <g>
        <g id="Layer_1_14_">
          <g>
            <g>
              <path
                d="M47.561,0C25.928,0,8.39,6.393,8.39,14.283v11.72c0,7.891,17.538,14.282,39.171,14.282 c21.632,0,39.17-6.392,39.17-14.282v-11.72C86.731,6.393,69.193,0,47.561,0z"
                fill="url(#logoGradient)"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M47.561,47.115c-20.654,0-37.682-5.832-39.171-13.227c-0.071,0.353,0,19.355,0,19.355 c0,7.892,17.538,14.283,39.171,14.283c21.632,0,39.17-6.393,39.17-14.283c0,0,0.044-19.003-0.026-19.355 C85.214,41.284,68.214,47.115,47.561,47.115z"
                fill="url(#logoGradient)"
              />
            </g>
          </g>
          <path
            d="M86.694,61.464c-1.488,7.391-18.479,13.226-39.133,13.226S9.875,68.854,8.386,61.464L8.39,80.82 c0,7.891,17.538,14.282,39.171,14.282c21.632,0,39.17-6.393,39.17-14.282L86.694,61.464z"
            fill="url(#logoGradient)"
          />
        </g>
      </g>
    </svg>
  </Link>
);

export default Logo;
