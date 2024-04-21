import Modal from 'react-modal';

Modal.setAppElement('#root');

console.log(Modal.defaultStyles);

export default function ImageModal({
    isOpen, onAfterOpen, onRequestClose, style, contentLabel}) {
    return <> 
    <Modal 
    isOpen={isOpen} 
    onAfterOpen={onAfterOpen} 
    onRequestClose={onRequestClose}
    style={style}
    contentLabel={contentLabel}/>
    </>
}