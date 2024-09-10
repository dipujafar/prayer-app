"use client";
import { Button, ConfigProvider } from "antd";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./quill.css";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TermsAndConditions = () => {
  const [value, setValue] = useState("");
  const handleEditorText = () => {
    console.log(value);
  };
  return (
    <div>
      <h1 className=" text-2xl font-bold mb-6 text-white">
        Terms And Conditons
      </h1>
      <ReactQuill
        className=" bg-white min-h-[600px] border-none rounded-md"
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="start writing ...."
      />
      <div className="mt-5">
      <Button size="large" onClick={handleEditorText} block>
        Save Changes
      </Button>
      </div>
      <div></div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TermsAndConditions), {
  ssr: false,
});
