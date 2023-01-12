import Image from "next/image";
import React, { HTMLAttributes } from "react";
import bagIcon from "../assets/bag.svg";

import { Container, Badge } from "../styles/components/bag";

interface BagProps extends HTMLAttributes<HTMLDivElement> {
  hasBadge: false;
  width?: number;
  height?: number;
}

export function Bag({ hasBadge, width = 24, height = 24, ...props }: BagProps) {
  return (
    <Container {...props}>
      {hasBadge && <Badge>5</Badge>}
      <Image src={bagIcon} alt="bag" width={width} height={height} />
    </Container>
  );
}
