import React from "react";
import MiniContactForm from "@/components/Contact/MiniContactForm";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <MiniContactForm />
    </div>
  );
}

export default AuraFooter;