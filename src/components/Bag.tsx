import Image from "next/image";
import React, { HTMLAttributes, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import bagIcon from "../assets/bag.svg";

import { Container, Badge, Box } from "../styles/components/bag";
import { BagDrawer } from "./BagDrawer";

interface BagProps extends HTMLAttributes<HTMLDivElement> {
  hasBadge?: boolean;
  width?: number;
  height?: number;
}

export function Bag({
  hasBadge = false,
  width = 24,
  height = 24,
  ...props
}: BagProps) {
  const { cartCount } = useShoppingCart();
  const [open, setOpen] = useState(false);

  const hasItems = cartCount > 0;

  return (
    <Box>
      <Container {...props} onClick={() => setOpen(true)}>
        {hasBadge && hasItems && <Badge>{cartCount}</Badge>}
        <Image src={bagIcon} alt="bag" width={width} height={height} />
      </Container>
      <BagDrawer isOpen={open} toggleDrawer={() => setOpen(false)} />
    </Box>
  );
}
