import { PropsImage } from '@/types/components';
import Image from 'next/image';

export const ImageComponent = ({ src, alt, width, height }: PropsImage) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};
