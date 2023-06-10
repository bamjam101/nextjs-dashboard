"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Icon = ({ size, url, explicit }) => {
  const [span, setSpan] = useState("25%");
  useEffect(() => {
    if (size === "md") {
      setSpan("50%");
    } else if (size === "lg") {
      setSpan("75%");
    } else if (size === "xl") {
      setSpan("100%");
    }
  }, []);
  return (
    <Image
      href={url}
      alt={url?.split(".")[0]}
      height={span}
      width={span}
      className={explicit}
    ></Image>
  );
};

export default Icon;
