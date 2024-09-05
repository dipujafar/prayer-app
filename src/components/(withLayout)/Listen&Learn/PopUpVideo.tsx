import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const PopUpVideo = ({ isModalOpen, handleOk, setIsModalOpen }: any) => {
    const [playing, setPlaying] = useState(false);

    const handleCancel = () => {
        setIsModalOpen(false);
        setPlaying(false); // Stop the video when modal is closed
    };


    return (
        <Modal
            width={"750px"}
            footer={null}
            title="Video title"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <ReactPlayer
                playing={playing}
                controls={true}
                width={"700px"}
                height={"500px"}
                url='https://www.youtube.com/watch?v=NgrljB7UU34'
            />
        </Modal>
    );
};

export default PopUpVideo;
