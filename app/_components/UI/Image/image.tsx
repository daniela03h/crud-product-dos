import { IImage } from '../../../_types/types';
import { ContainerImage } from "./image-style";

const Image: React.FC<IImage> = ({ src, alt= ""})=>{
    return (
        <ContainerImage>
            <img src={src} alt={alt} />
        </ContainerImage>
    )
}

export default Image