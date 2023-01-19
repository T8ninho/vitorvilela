import * as C from './index.style'

export const PhotoItem = ({ url, name }) => {

    return (
        <C.Container>
            <header >
                <a href="galeria"><img src={url} alt={name} /></a>
                {/* <h4 className='HouverContainer'>{name}</h4> */}
            </header>
        </C.Container>
    )
}

export default PhotoItem;