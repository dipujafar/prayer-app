"use client"
import { Button, ConfigProvider } from 'antd';
import { useState } from 'react';
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import './quill.css'

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const PrivacyPolicy = () => {
    const [value, setValue] = useState('');
    const handleEditorText = () => {
        console.log(value)
    };
    return (
        <div>

            <h1 className=' text-2xl font-bold mb-6 text-white'>Privacy Policy</h1>
            <ReactQuill className=' bg-white min-h-[600px] border-none rounded-md' theme="snow" value={value} onChange={setValue} placeholder='Start writing......' />;

            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultHoverBg: "#F0BE1B",
                            defaultHoverBorderColor: "#F0BE1B",
                            defaultActiveBg: "#F0BE1B",
                            defaultHoverColor: "white",
                            colorBgTextActive: "white",
                            colorPrimaryActive: "white",

                        },
                    },
                }}
            >
                <Button onClick={handleEditorText} className=' bg-secondary text-white py-6 text-lg border-none hover:bg-secondary hover:text-white' block>Save Changes</Button>
            </ConfigProvider>
            <div>
                
            </div>
        </div>
    );
};

export default PrivacyPolicy;