import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'alt'> & { alt: string };

export default function AccessibleImage({ alt, ...rest }: Props) {
  // Always require an alt prop
  return <Image alt={alt} {...rest} />;
}