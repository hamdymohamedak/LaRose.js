import { useState, useEffect } from 'react';
import "./Viewer.css";
import { Ak_Alert, AnimatedText, RandomAnimate, SplitText, Variants, WaveText, CounterUp, CounterDown, Notification, SwitchCase, SideBox, RoseBox, SeeMore } from '../LaRose';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { howCanIUseIt, CodeSyntax } from '../sideBar/SideBar';

export default function Viewer({ componentName, howToUse }) {
    const [Component, setComponent] = useState(null);
    const [key, setKey] = useState(0);
    const [syntaxStyle, setSyntaxStyle] = useState("3rem");
    const [isHook, setIsHook] = useState(false);

    useEffect(() => {
        if (componentName) {
            const importComponent = async () => {
                try {
                    const module = await import(`../LaRose`);
                    const LoadedComponent = module[componentName];
                    if (LoadedComponent) {
                        setComponent(() => LoadedComponent);
                        setIsHook(typeof LoadedComponent === 'function' && LoadedComponent.name.startsWith('use'));
                    } else {
                        console.error(`Component ${componentName} does not exist in LaRose module`);
                        setComponent(null);
                    }
                } catch (err) {
                    console.error(`Error loading component ${componentName}:`, err);
                    setComponent(null);
                }
            };
            importComponent();
        }
    }, [componentName]);

    useEffect(() => {
        if (CodeSyntax[componentName] && CodeSyntax[componentName].length > 0) {
            setSyntaxStyle("10rem");
        } else {
            setSyntaxStyle("0rem");
        }
    }, [componentName]);

    const refreshViewer = () => {
        setKey(prevKey => prevKey + 1);
    };

    const getModifiedComponent = (Component) => {
        switch (componentName) {
            case 'Ak_Alert':
                return <Ak_Alert time={Infinity} key={key} />;
            case 'AnimatedText':
                return <AnimatedText edit={{ fontSize: "4rem" }} key={key}>Hello</AnimatedText>;
            case 'RandomAnimate':
                return <RandomAnimate key={key} />;
            case 'SplitText':
                return <SplitText key={key}>Hello</SplitText>;
            case 'Variants':
                return <Variants key={key} />;
            case 'WaveText':
                return <WaveText edit={{ fontSize: "4rem" }} key={key}>Hello</WaveText>;
            case 'CounterUp':
                return <div key={key}><CounterUp start={0} end={1000} time={50} size={4} weight={"bold"} /></div>;
            case 'CounterDown':
                return <div key={key}><CounterDown start={1000} end={0} time={0.01} size={4} /></div>;
            case 'Notification':
                return <Notification key={key}>Hello</Notification>;
            case 'SwitchCase':
                return <SwitchCase h={3} w={5} key={key} />;
            case 'SideBox':
                return <SideBox RoseID={"SideBoxTag"} key={key}><RoseBox AutoHandling /></SideBox>;
            case 'useDocumentTitle':
                return <div style={{ display: "none" }} className="App_Viewer" key={key}></div>;
            case 'SeeMore':
                return <SeeMore maxCharacters={50}
                    edit={{ padding: '10px', fontSize: "1.6rem" }}
                    RoseName="custom-class"
                    RoseId="unique-id"
                    editButton={{ fontSize: '1rem' }} >This is a long piece of text that will be truncated if it exceeds the maximum character limit specified.</SeeMore>
            default:
                return Component ? <Component key={key} RoseId={"App_Viewer_Text"}>Hello</Component> : <p>Component not found</p>;
        }
    };

    return (
        <>
            <div>{howCanIUseIt[componentName]}</div>
            <SyntaxHighlighter
                customStyle={{
                    minHeight: syntaxStyle,
                    width: "80%",
                    background: "transparent",
                    marginTop: "1.1rem",
                    overflow: "auto",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                }}
                language="javascript"
                style={a11yDark}>
                {CodeSyntax[componentName] || ""}
            </SyntaxHighlighter>

            <div>{howToUse}</div>

            {Component && (
                <div className={isHook ? '' : 'App_Viewer'}>
                    {!isHook && (
                        <button className='RefreshBtn' onClick={refreshViewer}>&#128472;</button>
                    )}
                    {getModifiedComponent(Component)}
                </div>
            )}
        </>
    );
}
