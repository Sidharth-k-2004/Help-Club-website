import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from '@chakra-ui/react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function ModalComp({content, date, id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button 
            onClick={onOpen}
            style={{
                fontSize:'0.8rem',
                paddingLeft:'0.5rem',
                paddingRight:'0.5rem'
            }}
        >
            Read message
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{formatDistanceToNow(new Date("2022-06-13T09:43:58.6622"), {addSuffix: true})}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <div className='modal-info'>
                    <div className="modal-info-head">Dear Anon,</div>
                    <div className='modal-info-info'>{content}</div>
                </div>
                <hr/>
                <div className='modal-reply'>
                    <Editable defaultValue='Enter your reply here...'>
                        <EditablePreview />
                        <EditableTextarea />
                    </Editable>
                </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Confirm reply</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default ModalComp;