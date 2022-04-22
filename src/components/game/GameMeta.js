import React from 'react';

const GameMeta = ({game}) => {
    const metaBlocks = [
        {metaField: 'platforms'},
        {metaField: 'genres'},
        {metaField: 'released'},
        {metaField: 'developers'},
        {metaField: 'publishers'},
        {metaField: 'tags'},
        {metaField: 'website'},
    ]

    return (
        <div className='GameMetaBlock-Wrapper'>
            {metaBlocks.map(block => Array.isArray(game[block.metaField]) ?
                <div className='GameMetaBlock'>
                    <h4>{block.metaField}</h4>
                    <div>
                        {game[block.metaField].map(meta => meta.hasOwnProperty('platform') ?
                            <span key={meta.platform.id}>{meta.platform.name}</span> :
                            <span key={meta.id}>{meta.name}</span>)}
                    </div>
                </div> :
                <div className='GameMetaBlock'>
                    <h4>{block.metaField}</h4>
                    <span>{game[block.metaField]}</span>
                </div>
            )}
        </div>
    );
};

export default GameMeta;
