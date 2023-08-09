import React from 'react';
import cpp from '../icons/cpp';
import Js from '../icons/js';
import Ts from '../icons/ts';
import Html from '../icons/html';
import Css from '../icons/css';
import Python from "../icons/python";
import Cpp from "../icons/cpp"


const IconLanguage = ({language}) => {
    switch (language.toLowerCase()){
        case "javascript":
            return <Js/>
        case "css":
            return <Css/>
        case "html":
            return <Html/>
        case "typescript":
            return <Ts/>
        case "python":
            return <Python/>
        case "cpp":
            return <Cpp/>
    }
};

export default IconLanguage;