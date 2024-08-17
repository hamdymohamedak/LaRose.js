import React, { useState, useEffect } from "react";
import "./chatbot.css";
import Navbar from "../Navbar/Navbar";
import Loading from "../loading/Loading";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import { Loader, MiniNav } from "../AMT_Package"

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [genAI, setGenAI] = useState(null);
    const [markdownResponsive, setMarkdownResponsive] = useState("0.5rem");

    useEffect(() => {
        const initGenerativeAI = async () => {
            try {
                // Initialize GoogleGenerativeAI with the provided API key
                const apiKey = "AIzaSyAKwpYVIOdaeJzU3RRN447bWUjThvXpEXw";
                const genAIInstance = new GoogleGenerativeAI(apiKey);
                setGenAI(genAIInstance);
            } catch (error) {
                console.error("Error initializing Generative AI:", error);
            }
        };

        initGenerativeAI();
    }, []);

    const getValue = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = async () => {
        if (message.trim() !== '' && genAI) {
            // Display the user's message
            const newMessages = [...messages, { text: message, deleted: false, sender: 'user' }];
            setMessages(newMessages);

            // Clear the input field
            setMessage('');

            // Set loading to true before calling the API
            setLoading(true);

            try {
                // Call the API and get the bot's response
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                const result = await model.generateContent(message);
                const response = await result.response;
                const text = await response.text();

                // Display the response from the model
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: text, deleted: false, sender: 'bot' }
                ]);
            } catch (error) {
                console.error("Error generating completion:", error);
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: "Sorry, I couldn't process your request.", deleted: false, sender: 'bot' }
                ]);
            }

            setLoading(false);
        }
    }

    const handleDelete = (index) => {
        const newMessages = [...messages];
        newMessages[index].deleted = true;
        setMessages(newMessages);
    }
    useEffect(() => {
        const handleResize = () => {
            const winWidth = window.innerWidth;
            if (winWidth <= 600) {
                setMarkdownResponsive("7rem");
            } else {
                setMarkdownResponsive("0.5rem");
            }
        };

        handleResize(); // Call the function initially to set the initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderMessage = (msg, index) => {
        const isCode = msg.text.includes('```');
        return (
            <div key={index} className={`messageContainer ${msg.sender === 'user' ? 'userMessage' : ''}`}>


                {!msg.deleted && (
                    <React.Fragment>
                        <div className="message">
                            <div className="text-container">
                                {isCode ? (
                                    <ReactMarkdown className="reactMarkDown" components={{
                                        code({ node, inline, className, children, ...props }) {
                                            return !inline ? (
                                                <SyntaxHighlighter wrapLines showLineNumbers style={a11yDark} customStyle={{
                                                    minHeight: "1rem",
                                                    width: "40rem",
                                                    color: "#f8fafc",
                                                    overflowX: "auto",
                                                    backgroundColor: "#1e293b",
                                                    overflowX: "auto",
                                                    fontWeight: "400",
                                                    fontSize: "1rem",
                                                    marginTop: "1.4285714285714286rem",
                                                    marginBottom: "2.2857142857142856rem",
                                                    borderRadius: "0.75rem",
                                                    paddingLeft: markdownResponsive,
                                                    boxShadow: "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
                                                    display: "flex",
                                                    position: "relative",
                                                    justifyContent: "space-between", // Aligns items to the end
                                                }} language="javascript">
                                                    {String(children).replace(/\n$/, '')}
                                                </SyntaxHighlighter>
                                            ) : (
                                                <code  {...props} className={className}>
                                                    {children}
                                                </code>
                                            )
                                        }
                                    }}>
                                        {msg.text}
                                    </ReactMarkdown>
                                ) : (
                                    msg.text
                                )}
                            </div>
                            <button onClick={() => handleDelete(index)} className="btn-donate">
                                <i id="icon" className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </React.Fragment>
                )}
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <MiniNav/>
            <div className="sec_chat">
                <h1 className="chatBot_title">Let's Talk</h1>
                <Loader/>
                <div className="chatArea">
                    {messages.map((msg, index) => renderMessage(msg, index))}
                    {loading && <Loading />}
                </div>
                <div className="chatBar">
                    <input
                        onKeyDown={(event) => event.key === 'Enter' && sendMessage()}
                        value={message}
                        onChange={getValue}
                        type="text"
                        placeholder="Enter Your Prompt"
                    />
                    <button onKeyDown={sendMessage} onClick={sendMessage} className="sendButton">
                        {loading ? <Loading className="loadingIcon" /> : <i id="send" className="fa-solid fa-paper-plane"></i>}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Chatbot;
