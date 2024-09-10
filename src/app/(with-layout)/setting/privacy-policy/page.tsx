"use client";
import { Button, ConfigProvider } from "antd";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./quill.css";

// Dynamically import ReactQuill with no SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const PrivacyPolicy = () => {
  const [value, setValue] = useState("");
  const handleEditorText = () => {
    console.log(value);
  };

  return (
    <div>
      <h1 className=" text-2xl font-bold mb-6 text-white">Privacy Policy</h1>

      {/* Ensure ReactQuill only renders on the client */}
      <ReactQuill
        className="bg-white min-h-[600px] border-none rounded-md"
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Start writing......"
      />
      <div className="mt-10">
        <Button onClick={handleEditorText} size="large" block>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(PrivacyPolicy), { ssr: false });
