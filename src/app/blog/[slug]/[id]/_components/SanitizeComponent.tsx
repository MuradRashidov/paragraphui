"use client"
import React, { useEffect, useState } from 'react'
import DOMPurify from "dompurify"

const SanitizeComponent = ({ content }: { content: string }) => {
    const [sanitizedContent, setSanitizedContent] = useState("");
    useEffect(() => {
        setSanitizedContent(DOMPurify.sanitize(content));
    }, [content]);

    return (
        <p
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            className="text-xs font-mono p-5 bg-gray-200 shadow-md rounded-md my-6"
        />
    )
}

export default SanitizeComponent