import React from 'react';

const Loading=()=>{
    return (
        <div className="ui segment">
            <div className="ui active dimmer">
                <div className="ui huge text loader">Loading</div>
            </div>
        </div>
    );
};

export default Loading;