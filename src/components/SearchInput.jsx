import 'regenerator-runtime';
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


import MicIcon from "../assets/mic.svg";
import MicIcon1 from "../assets/mic1.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    const { query } = useParams();
    const [searchQuery, setSearchQuery] = useState(query || "");
    const navigate = useNavigate();
    const { transcript, resetTranscript, listening } = useSpeechRecognition();

    useEffect(() => {
        if (transcript && !listening) {
            setSearchQuery(transcript); // Update input value with transcribed text
        }
    }, [transcript, listening]);

    const searchQueryHandler = (event) => {
        if (event?.key === "Enter" && searchQuery?.length > 0) {
            navigate(`/${searchQuery}/${1}`);
        }
    };

    const handleMicClick = () => {
        if (SpeechRecognition.browserSupportsSpeechRecognition()) {
            if (!listening) {
                SpeechRecognition.startListening();
            } else {
                SpeechRecognition.stopListening();
                resetTranscript(); // Reset transcript for next input
            }
        } else {
            alert("Your browser doesn't support speech recognition.");
        }
    };

    return (
        <div
            id="searchBox"
            className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border bg-[#f8f9fa] border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
        >
            <AiOutlineSearch size={18} color="#9aa0a6" />
            <input
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                value={searchQuery}
                autoFocus
                className="grow outline-0 text-black/[0.87]"
            />
            <div className="flex items-center gap-3">
                {searchQuery && (
                    <IoMdClose
                        size={24}
                        color="#70757a"
                        className="cursor-pointer"
                        onClick={() => setSearchQuery("")}
                    />
                )}
                <img 
                    className="h-6 w-6 cursor-pointer" 
                    src={listening ? MicIcon1 : MicIcon} 
                    alt="" 
                    onClick={handleMicClick} 
                />
                <img
                    className="h-6 w-6 cursor-pointer"
                    src={ImageIcon}
                    alt=""
                />
            </div>
        </div>
    );
};

export default SearchInput;
