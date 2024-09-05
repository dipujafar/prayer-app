"use client";

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const PlayVideo = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // This ensures that the component is only rendered on the client
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Render nothing on the server
    }

    return (
        <div className='h-full w-full flex justify-center items-center'>
            <ReactPlayer
                playing={false} 
                controls={true}
                width={"900px"}
                height={"600px"}
                url='https://www.youtube.com/watch?v=NgrljB7UU34'
            />
        </div>
    );
};

export default PlayVideo;
