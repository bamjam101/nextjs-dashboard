"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Icon = ({ size, url, explicit }) => {
  const [span, setSpan] = useState(0);
  useEffect(() => {
    if (size === "md") {
      setSpan(18);
    } else if (size === "lg") {
      setSpan(24);
    } else if (size === "xl") {
      setSpan(36);
    } else {
      setSpan(14);
    }
  }, [size]);
  return (
    <Image
      src={`/${url}`}
      alt={url?.split(".")[0]}
      height={span}
      width={span}
      className={`cursor-pointer ${explicit ? explicit : "undefined"}`}
    ></Image>
  );
};

export default Icon;
