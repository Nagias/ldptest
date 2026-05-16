import Image, { type ImageProps } from "next/image";

const basePath = process.env.GITHUB_PAGES === "true" ? "/ldptest" : "";

export function assetPath(src: string) {
  if (src.startsWith("/")) {
    return `${basePath}${src}`;
  }

  return src;
}

export function AssetImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? assetPath(src) : src;

  return <Image src={resolvedSrc} {...props} />;
}
