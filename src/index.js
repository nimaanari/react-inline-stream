import React from 'react';

const StreamContext = React.createContext({
    write: (text) => {
        console.log('No enclosing stream for write action.');
    }
});

export const Chunk = ({ text }) => <StreamContext.Consumer>{({ write }) => {write(text);}}</StreamContext.Consumer>;

export const InlineStream = ({ children }) => {
    const write = (text) => {
        console.log(`Writing '${text}' ...`);
    };
    console.log('Rendering InlineStream ...');
    return <StreamContext.Provider value={{ write }}>{ children }</StreamContext.Provider>;
};