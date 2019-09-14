import React from 'react';

const StreamContext = React.createContext({
    write: (chunk) => {
        console.log('No enclosing stream for write action.');
    },
    collect: () => {
        console.log('No enclosing stream for collect.');
        return [];
    }
});

export const Collect = ({ children }) => <StreamContext.Consumer>{({ collect }) => {children(collect());}}</StreamContext.Consumer>;

export const Chunk = ({ children }) => <StreamContext.Consumer>{({ write }) => {write(children);}}</StreamContext.Consumer>;

export const InlineStream = ({ children }) => {
    const chunks = [];
    const write = (chunk) => {
        chunks.push(chunk);
    };
    const collect = () => {
        return chunks;
    };
    return <StreamContext.Provider value={{ write, collect }}>{ children }</StreamContext.Provider>;
};