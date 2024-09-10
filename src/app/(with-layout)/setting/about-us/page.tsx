"use client";
import { Button, ConfigProvider } from "antd";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./quill.css";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AboutUs = () => {
  const [value, setValue] = useState("");
  const handleEditorText = () => {
    console.log(value);
  };

  const toolbarOptions = [
    ["image"],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
  ];

  const moduleConest = {
    toolbar: toolbarOptions,
  };

  return (
    <div>
      <h1 className=" text-2xl font-bold mb-6 text-white">About Us</h1>
      <ReactQuill
        className=" bg-white min-h-[600px] border-none rounded-md"
        theme="snow"
        value={value}
        modules={moduleConest}
        placeholder="Start writing ......"
        onChange={setValue}
      />
      <div className="mt-5">
        <Button onClick={handleEditorText} size="large" block>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(AboutUs), { ssr: false });
